 
import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
 
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import BookList from "./TextualRepositoryCard/BookList";
import BookListShimmer from "../../components/Card/Book/BookListShimmer";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import BookGrid from "./TextualRepositoryCard/BookGrid";
import TextualRepositoryDetails from "./TextualRepositoryDetails";
import ArchivesBlack from "../../image/TextualRepository/ArchivesBlack.webp";
import EBooksBlack from "../../image/TextualRepository/EBooksBlack.webp";
import GazettesGazetteersBlack from "../../image/TextualRepository/GazettesGazetteersBlack.webp";
import ManuscriptsBlack from "../../image/TextualRepository/ManuscriptsBlack.webp";
import OtherCollections from "../../image/TextualRepository/OtherCollections.webp";
import RareBooksBlack from "../../image/TextualRepository/RareBooksBlack.webp";
import ReportsProceedings from "../../image/TextualRepository/ReportsProceedings.webp";
import ResearchPapersBlack from "../../image/TextualRepository/ResearchPapersBlack.webp";
const TextualRepository = () => {
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
 
  const { t } = useTranslation();
 
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
                  {location.pathname.includes("archives") ? (
                    <div>
                      <img
                        src={ArchivesBlack} // Image corresponding to Archives
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Archives")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {!location.pathname.includes("rare") && location.pathname.includes("e-books") ? (
                    <div>
                      <img
                        src={EBooksBlack}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("E Books")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("gazettes-and-gazetteers") ? (
                    <div>
                      <img
                        src={GazettesGazetteersBlack}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Gazettes And Gazetteers")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("manuscripts") ? (
                    <div>
                      <img
                        src={ManuscriptsBlack}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Manuscripts")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("other-collections") ? (
                    <div>
                      <img
                        src={OtherCollections}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Other Collections")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {
                  location.pathname.includes("rare-books") ? (
                    <div>
                      <img
                        src={RareBooksBlack}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Rare Books")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("reports-and-proceedings") ? (
                    <div>
                      <img
                        src={ReportsProceedings}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Reports And Proceedings")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                  {location.pathname.includes("research-papers") ? (
                    <div>
                      <img
                        src={ResearchPapersBlack}
                        alt="Archives Icon"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }}
                      />
                      <h1>{t("Research Papers")}</h1>
                     
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Container>
          )}
 
          {location && !location?.pathname?.includes("title") && (
            <>
              {location.pathname.includes("archives") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterName1={"type"}
                  category={"archives"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {!location.pathname.includes("rare") && location.pathname.includes("e-books")  && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata4={filterSearchdata4}
                  filterSearchdata5={filterSearchdata5}
                  filterName1={"Copyright date"}
                  filterName2={"Issued Date"}
                  filterName3={"Languages"}
                  filterName4={"Publishers"}
                  filterName5={"Organistions"}
                  category="e-books"
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
              {location.pathname.includes("gazettes-and-gazetteers") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata4={filterSearchdata4}
                  filterSearchdata5={filterSearchdata5}
                  filterSearchdata6={filterSearchdata6}
                  filterSearchdata7={filterSearchdata7}
                  filterName1={"State"}
                  filterName2={"Editor"}
                  filterName3={"District/Sub-location"}
                  filterName4={"Copyright-Year"}
                  filterName5={"Date"}
                  filterName6={"Publishers"}
                  filterName7={"Collections"}
                  category="gazettes-and-gazetteers"
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("manuscripts") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata4={filterSearchdata4}
                  filterSearchdata5={filterSearchdata5}
                  filterName1={"Organisations"}
                  filterName2={"Time-Period"}
                  filterName3={"Languages"}
                  filterName4={"Authors"}
                  filterName5={"Collections"}
                  category={"manuscripts"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("other-collections") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata4={filterSearchdata4}
                  filterSearchdata5={filterSearchdata5}
                  filterName1={"Date"}
                  filterName2={"Language"}
                  filterName3={"Keywords"}
                  filterName4={"Collections"}
                  filterName5={"Organisations"}
                  category={"other-collections"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("rare") &&
                (
                  <InternalSearchCard
                    filterSearchdata={filterSearchdata}
                    filterSearchdata2={filterSearchdata2}
                    filterSearchdata3={filterSearchdata3}
                    filterSearchdata4={filterSearchdata4}
                    filterSearchdata5={filterSearchdata5}
                    filterSearchdata6={filterSearchdata6}
                    filterName1={"Author"}
                    filterName2={"Copyright-Date"}
                    filterName3={"Language"}
                    filterName4={"Publishers"}
                    filterName5={"Subject"}
                    filterName6={"Organisations"}
                    category="rare-books"
                    pageNumber={pageNumber}
                    total_items={total_items}
                    items_per_page={items_per_page}
                    t={t}
                    isGridView={isGridView}
                    setIsGridView={setIsGridView}
                  />
                )}
 
              {location.pathname.includes("reports-and-proceedings") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterSearchdata3={filterSearchdata3}
                  filterSearchdata4={filterSearchdata4}
                  filterName1={"Organisations"}
                  filterName2={"Collections"}
                  filterName3={"Publisher"}
                  filterName4={"Author"}
                  category={"reports-and-proceedings"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                  isGridView={isGridView}
                  setIsGridView={setIsGridView}
                />
              )}
 
              {location.pathname.includes("research-papers") && (
                <InternalSearchCard
                  filterSearchdata={filterSearchdata}
                  filterSearchdata2={filterSearchdata2}
                  filterName1={"Organisations"}
                  filterName2={"Themes"}
                  category={"research-papers"}
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
 
          {location && location?.pathname?.includes("title") ? (
            fetchedData && fetchedData.length > 0 ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  return (
                    <TextualRepositoryDetails key={x.nid} detailData={x} />
                  );
                })
            ) : (
              <ShimmerCardDetails />
            )
          ) : isGridView ? (
            fetchedData && fetchedData.length > 0 ? (
              <BookGrid fetcheData={fetchedData} />
            ) : (
              <BookListShimmer />
            )
          ) : fetchedData && fetchedData.length > 0 ? (
            <BookList fetcheData={fetchedData} />
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
export default TextualRepository;
 
 
 