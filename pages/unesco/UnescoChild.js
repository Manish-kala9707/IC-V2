import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import { useTranslation } from "react-i18next";
import ErrorPage from "../../components/Card/ErrorPage";
import UnescoDetails from "../../components/UnescoDetails";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
const UnescoChild = () => {
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
                <Col>
                  {location.pathname.includes("biosphere") && (
                    <h1> {t("Biosphere")}</h1>
                  )}
                  {!location.pathname.includes("intangible") &&
                    location.pathname.includes("heritage") && (
                      <h1>{t("World Heritage Site")} </h1>
                    )}
                  {location.pathname.includes("creative-cities") && (
                    <h1>{t("Creative Cities Network")}</h1>
                  )}
                  {location.pathname.includes("memory") && (
                    <h1> {t("Memory Of the world")}</h1>
                  )}
                  {!location.pathname.includes("learning") &&
                    location.pathname.includes("global") && (
                      <h1> {t("Global geo parks")}</h1>
                    )}
                  {!location.pathname.includes("geo") &&
                    location.pathname.includes("global") && (
                      <h1> {t("Global network learning citties")}</h1>
                    )}
                  {!location.pathname.includes("world") &&
                    location.pathname.includes("heritage") && (
                      <h1> {t("Intangible Culture Heritage")}</h1>
                    )}
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
              <Row>
                <Col lg={6} xl={6}></Col>
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
            fetchedData && fetchedData.length > 0 ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  return <UnescoDetails key={x.nid} detailData={x} />;
                })
            ) : (
              <ShimmerCardDetails />
            )
          ) : (
            <Container>
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
export default UnescoChild;
