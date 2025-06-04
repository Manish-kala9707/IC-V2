import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardDetails from "../../components/Card/CardDetails"; 
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import Divider from "../forts/images/FortsofIndia.png";
import FeatureForts from "./FeatureForts";
const Understandingforts = () => {
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
                                <Row>     <Col md={6} className="offset-md-3">
                                  <img
                                    src={Divider}
                                    alt="Caption Divider"
                                    className="icon"
                                    style={{
                                      width: "80px",
                                      height: "80px",
                                      marginRight: "10px",
                                      objectFit: "contain",
                                      marginBottom: "15px",
                                    }} />
                                  <h1 className="text-center">{t("Understanding Forts")}</h1>
                                  <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                                </Col></Row>
                              </Container>
          )}

          {location && location?.pathname?.includes("title") ? (
            fetchedData &&
            fetchedData.length > 0 &&
            !location.pathname.includes("title=FEATURES") ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  return <CardStoryDetails key={x.nid} detailData={x} />;
                })
            ) : (
              <FeatureForts fetchedData={fetchedData} />
            )
          ) : (
            <Container className="p-1">
              {fetchedData.map((data, index) => {
                return (
                  <Row key={index} style={{ marginTop: "30px" }}>
                    <Col lg={6} md={6} sm={12}>
                      <img
                        src={`http://icvtesting.nvli.in${data.field_forts_writup_images}`}
                        className="img-responsive"
                        style={{ borderRadius: "10px" }}
                      ></img>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <h1>{data.title}</h1>
                      <p>{data.field_understanding_fort_short_d}</p>
                      <>
                        <Link
                          className="btn btn-warning"
                          to={`${location.pathname}/title=${data.title.replace(
                            "?",
                            ""
                          )}/nid=${data.nid}`}
                        >
                          Read more
                        </Link>
                      </>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          )}
        </div>
      )}
    </>
  );
};
export default Understandingforts;
