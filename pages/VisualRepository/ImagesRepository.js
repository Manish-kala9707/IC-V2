import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardDetails from "../../components/Card/CardDetails";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import BookList from "../TextualRepository/TextualRepositoryCard/BookList";
import BookListShimmer from "../../components/Card/Book/BookListShimmer";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import BookGrid from "../TextualRepository/TextualRepositoryCard/BookGrid";
import VisualGrid from "./VisualRepositoryCard/VisualGrid";
import BookGridShimmer from "../../components/Card/Book/BookGridShimmer";
import VisualList from "./VisualRepositoryCard/VisualList";
// import museumcollections from "../../image/TextualRepository/museumcollections.png";
// import imagesicon from "../../image/TextualRepository/images.png";
// import paintingcollection from "../../image/TextualRepository/Painting.png";
import ImagesDetails from "./ImagesDetails";
const ImagesRepository = () => {
  const location = useLocation();
  const [isGridView, setIsGridView] = useState(true);
  const navigate = useNavigate();
  const {
    fetchedData,
    title,
    nid,
    totalPages,
    total_items,
    items_per_page,
    current_page,
    pagename,
    pageNumber,
    filterSearchdata,
    filterSearchdata2,
    filterSearchdata3,
    filterSearchdata4,
    filterSearchdata5,
    filterSearchdata6,
    filterSearchdata7,
    error,
    response,
  } = useContext(ContextData);
 
  console.log("filterSearchdata", filterSearchdata);
  const { t } = useTranslation();
 
  console.log("filters at imagess", filterSearchdata4);
  return (
    <>
      {!response.ok ? (
        <ErrorPage response={response} />
      ) : (
        <div className="App">
          {location && !location?.pathname?.includes("title") && (
            <Container className="archive-header">
              <Row>
                <Col>
                  {location.pathname.includes("museum-collections") ? (
                    <div>
                                          <img
                                            src={museumcollections}
                                            alt="museum-collections Icon"
                                            className="icon"
                                            style={{
                                              width: "80px",
                                              height: "80px",
                                              marginRight: "10px",
                                              objectFit: "contain",
                                              marginBottom: "15px",
                                            }}
                                          />
                    <h1>{t("Museum Collections")}</h1></div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("images") ? (
                     <div><img
                                            src={imagesicon}
                                            alt="images Icon"
                                            className="icon"
                                            style={{
                                              width: "80px",
                                              height: "80px",
                                              marginRight: "10px",
                                              objectFit: "contain",
                                              marginBottom: "15px",
                                            }}
                                          />
                    <h1>{t("Images")}</h1></div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("photo-archives") ? (
                    <div><img
                                            src={paintingcollection}
                                            alt="photo-archives"
                                            className="icon"
                                            style={{
                                              width: "80px",
                                              height: "80px",
                                              marginRight: "10px",
                                              objectFit: "contain",
                                              marginBottom: "15px",
                                            }}
                                          />
                    <h1>{t("Photo Archives")}</h1></div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("portfolio") ? (
                    <h1>{t("Portfolio Paintings")}</h1>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("museum-paintings") ? (
                    <h1>{t("Museum Paintings")}</h1>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Container>
          )}
 
          {location && !location?.pathname?.includes("title") && (
            <>
              {location.pathname.includes("museum-collections") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata5={filterSearchdata5}
                  filterName1={"Provenance"}
                  filterName2={"Time Period"}
                  filterName3={"Material"}
                  filterName5={"Organisation"}
                  category={"museum-collections"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("images") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterName1={"Organisation"}
                  filterName2={"Collection"}
                  category={"images"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("photo-archives") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata3={filterSearchdata3}
                  filterName1={"Issued Date"}
                  filterName3={"Organigation"}
                  category={"photo-archives"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("portfolio") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterName1={"Portfolio"}
                  category={"paintings/portfoliopaintings"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("museum-paintings") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata4={filterSearchdata4}
                  filterSearchdata6={filterSearchdata6}
                  filterName1={"Provenance"}
                  filterName2={"Time Period"}
                  filterName3={"Material"}
                  filterName4={"Organisation"}
                  filterName6={"Collection"}
                  category={"paintings/museum-paintings"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
            </>
          )}
 
          {location?.pathname.includes("title") ? (
            fetchedData && fetchedData.length > 0 ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => <ImagesDetails key={x.nid} detailData={x} />)
            ) : (
              <ShimmerCardDetails />
            )
          ) : isGridView ? (
            fetchedData && fetchedData.length > 0 ? (
              <VisualGrid fetcheData={fetchedData} />
            ) : (
              <BookGridShimmer />
            )
          ) : fetchedData && fetchedData.length > 0 ? (
            <VisualList fetcheData={fetchedData} />
          ) : (
            <BookListShimmer />
          )}
 
          {location && !location.pathname.includes("title") && (
            <Pagination2 totalPages={totalPages} baseUrl="/videos" />
          )}
        </div>
      )}
    </>
  );
};
export default ImagesRepository;