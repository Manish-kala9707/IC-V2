import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardDetails from "../../components/Card/CardDetails";
import { Filter, Search } from "react-feather";
import Divider from "../../image/intangible culture heritage/Intangible-Cultural-Heritage-Black.webp";
import { useContext } from "react";
import { ContextData } from "../Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import CounterCard from "../../components/Card/CounterCard";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import Card from "../../components/Card/Card";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import { useTranslation } from "react-i18next";
import ErrorPage from "../../components/Card/ErrorPage";
const PerformingArts = () => {
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
    error,
    response,
  } = useContext(ContextData);
  const location = useLocation();
  const navigate = useNavigate();
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
                 <Col md={6} className="offset-md-3">
                                        <img
                                           src={Divider}
                                           alt="Caption Divider"
                                            className="icon"
                                                                   style={{
                                                                     width: "80px",
                                                                     height: "80px",
                                                                     marginRight: "10px",
                                                                     objectFit: "contain",
                                                                     marginBottom: "15px",}} />
                  <h1>{t("Performing Arts")}</h1>
                   <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                </Col>
              </Row>
            </Container>
          )}

          {location && !location?.pathname?.includes("title") && (
            <Container fluid>
             <Row className="filtersearchrow pr-2">
                <Col lg={6} md={6}></Col>
                {/* <InternalSearchCard filterSearchdata={filterSearchdata} filterSearchdata2={filterSearchdata2} category={"other-collections"}/> */}
                <CounterCard
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                />
              </Row>
            </Container>
          )}
          {location && location?.pathname?.includes("title") ? (
            fetchedData &&
            fetchedData.length > 0 &&
            fetchedData
              .filter((x) => x.nid == nid)
              .map((x) => {
                return <CardDetails key={x.nid} detailData={x} />;
              })
          ) : (
            <Container fluid>
              <Row>
                <div className="page-content">
                  <Card
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
export default PerformingArts;
