import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardDetails from "../../components/Card/CardDetails";
import Divider from "../../image/SwirlDivider.png";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import ErrorPage from "../../components/Card/ErrorPage";
import BookListShimmer from "../../components/Card/Book/BookListShimmer";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import BookGrid from "../TextualRepository/TextualRepositoryCard/BookGrid";
import VideosDetails from "./VideosDetails";
import VisualGrid from "./VisualRepositoryCard/VisualGrid";
import BookGridShimmer from "../../components/Card/Book/BookGridShimmer";
import { useState } from "react";
const VideosRepository = () => {
  const location = useLocation();
  const { t } = useTranslation();
   const [isGridView, setIsGridView] = useState(true);
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
    error,
    response,
  } = useContext(ContextData);

  return !response.ok ? (
    <ErrorPage response={response} />
  ) : (
    <div className="App">
      {location && !location.pathname.includes("title") && (
        <Container className="archive-header">
          <Row>
            <Col>
              {location.pathname.includes("audios") && <h1>{t("Audios")}</h1>}
              {location.pathname.includes("videos") && <h1>{t("Videos")}</h1>}
            </Col>
          </Row>
        </Container>
      )}

      {location && !location.pathname.includes("title") && (
        <>
          {location.pathname.includes("audios") && (
            <InternalSearchCard
            filterSearchdata={filterSearchdata}
            filterSearchdata2={filterSearchdata2}
            filterName1={"Language"}
            filterName2={"Organisations"}
              pageNumber={pageNumber}
              total_items={total_items}
              items_per_page={items_per_page}
              t={t}
              isGridView={isGridView}
              setIsGridView={setIsGridView}
            />
          )}
          {location.pathname.includes("videos") && (
            <InternalSearchCard
              filterSearchdata={filterSearchdata}
              filterSearchdata2={filterSearchdata2}
              filterSearchdata3={filterSearchdata3}
              filterName1={"Duration"}
              filterName2={"Language"}
              filterName3={"Organisations"}
              category={"videos"}
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
            .map((x) => <VideosDetails key={x.nid} detailData={x} />)
        ) : (
          <ShimmerCardDetails />
        )
      ) : fetchedData && fetchedData.length > 0 ? (
        <VisualGrid fetcheData={fetchedData} />
      ) : (
        <BookGridShimmer />
      )}

      {location && !location.pathname.includes("title") && (
        <Pagination2 totalPages={totalPages} baseUrl="/videos" />
      )}
    </div>
  );
};

export default VideosRepository;
