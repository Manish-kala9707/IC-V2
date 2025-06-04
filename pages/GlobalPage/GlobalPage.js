import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
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
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import TextualRepositoryDetails from "../TextualRepository/TextualRepositoryDetails";
import VideosDetails from "../VisualRepository/VideosDetails";
import GlobalCard from "./GlobalCard";
import ImagesDetails from "../VisualRepository/ImagesDetails";
const GlobalPage = () => {
  const location = useLocation();
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
    error,
    response,
  } = useContext(ContextData);
  const { t } = useTranslation();

  return (
    <>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <div className="App">
          {location && !location?.pathname?.includes("title") && (
            <Container className="archive-header">
              <Row>
                <Col>
                  <h1>Search Results</h1>
                  <img
                    src={Divider}
                    alt="Caption Divider"
                    style={{
                      marginTop: "-17px",
                      width: "90px",
                      height: "15px",
                      backgroundColor: "transparent",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          )}

          {location && !location?.pathname?.includes("title") && (
            <Container>
              <Row className="justify-content-center align-items-center text-center">
                {/* <InternalSearchCard filterSearchdata={filterSearchdata} filterSearchdata2={filterSearchdata2} filterSearchdata3={filterSearchdata3} filterName1={"Organisations" }filterName2={"Copyright date"} filterName3={"Languages"} category="e-books"/> */}
                <InternalSearchCard
                filterSearchdata={filterSearchdata}
                filterSearchdata2={filterSearchdata2}
                filterName1={"Organisation"}
                filterName2={"Collection"}
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                />
              </Row>
            </Container>
          )}
          {location && location?.pathname?.includes("title") ? (
            fetchedData && fetchedData.length > 0 ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  if (x.type === "Digital Records" && x.field_pdf_digital_file) {
                    return (
                      <TextualRepositoryDetails key={x.nid} detailData={x} />
                    );
                  } 
                  else if (x.type === "Digital Records" && x.field_type_of_content=="Manuscripts" && x.field_digital_image_file) {
                    return (
                      <TextualRepositoryDetails key={x.nid} detailData={x} />
                    )    
                  }
                  else if (x.type === "Digital Records" && x.field_type_of_content=="Artefacts from museums" && x.field_digital_image_file) {
                    return (
                      <ImagesDetails key={x.nid} detailData={x} />
                    )    
                  }
                  else if (x.type === "Digital Records" && x.field_type_of_content=="Images" && x.field_digital_image_file) {
                    return (
                      <ImagesDetails key={x.nid} detailData={x} />
                    )    
                  }
                  else if (x.type === "Digital Records" && x.field_type_of_content=="Photo Archives" && x.field_digital_image_file) {
                    return (
                      <ImagesDetails key={x.nid} detailData={x} />
                    )    
                  }
                  else if (x.type === "Digital Records" && x.field_type_of_content=="Video" && x.field_video_streaming_url) {
                    return (
                      <VideosDetails key={x.nid} detailData={x} />
                    )
                   
                  }
                  else if (x.type === "Digital Records" && x.field_type_of_content=="Audio" && x.field_video_streaming_url) {
                    return (
                      <VideosDetails key={x.nid} detailData={x} />
                    )}
                  else {
                    return <CardDetails key={x.nid} detailData={x} />;
                  }
                })
            ) : (
              <ShimmerCardDetails />
            )
          ) : (
            <Container>
              <Row>
                <div className="page-content">
                  <GlobalCard
                    page="/"
                    search_results={fetchedData}
                    response={response}
                    className="page-content"
                  />
                </div>
              </Row>
            </Container>
          )}

          {location && !location.pathname.includes("title") && (
            <Pagination2 totalPages={totalPages} baseUrl="/videos" />
          )}
        </div>
      )}
    </>
  );
};
export default GlobalPage;
