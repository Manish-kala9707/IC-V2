import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardDetails from "../../components/Card/CardDetails";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
const FlagshipEvents = () => {
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
    filterSearchdata4,
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
                  <h1>FlagshipEvents</h1>
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
                <Col lg={6} md={6}></Col>
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
                  return <CardDetails key={x.nid} detailData={x} />;
                })
            ) : (
              <ShimmerCardDetails />
            )
          ) : (
            <Container>
              <Row>
                <div className="page-content">
                  <div>
                    {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                    <div className="fiflagshipevents-card-2">
                      <img
                        src={
                          "http://icvtesting.nvli.in/system/files/2024-03/International%20Museum%20Expo.jpg"
                        }
                        className="img img-responsive"
                        alt=""
                      />
                      <div
                        className="fiflagshipevents-name"
                        style={{ left: "80px", top: "215px" }}
                      >
                        <p>{t("International Museum Expo")}</p>
                      </div>
                      <div className="fiflagshipevents-username"></div>
                      <Button
                        className="fiflagshipevents-icons"
                        variant="primary"
                        onClick={() =>
                          navigate(
                            `${location.pathname}/international-museum-expo`
                          )
                        }
                      >
                        {t("Explore")}
                      </Button>

                      {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                    </div>
                  </div>

                  <div>
                    {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                    <div className="fiflagshipevents-card-2">
                      <img
                        src={
                          "http://icvtesting.nvli.in/system/files/2024-03/libraries.jpg"
                        }
                        className="img img-responsive"
                        alt=""
                      />
                      <div
                        className="fiflagshipevents-name"
                        style={{ left: "80px", top: "215px" }}
                      >
                        <p>{t("Festival of Libraries")}</p>
                      </div>
                      <div className="fiflagshipevents-username"></div>
                      <Button
                        className="fiflagshipevents-icons"
                        variant="primary"
                        onClick={() =>
                          navigate(`${location.pathname}/festival-of-libraries`)
                        }
                      >
                        {t("Explore")}
                      </Button>

                      {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                    </div>
                  </div>

                  <div>
                    {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                    <div className="fiflagshipevents-card-2">
                      <img
                        src={
                          "http://icvtesting.nvli.in/system/files/2024-03/iaadb.jpg"
                        }
                        className="img img-responsive"
                        alt=""
                      />
                      <div
                        className="fiflagshipevents-name"
                        style={{ left: "80px", top: "215px" }}
                      >
                        <p>
                          {t("Indian Art Architecture and Design Biennale")}
                        </p>
                      </div>
                      <div className="fiflagshipevents-username"></div>
                      <Button
                        className="fiflagshipevents-icons"
                       variant="primary"
                        onClick={() =>
                          navigate(
                            `${location.pathname}/Indian-Art-Architecture-and-Design-Biennale`
                          )
                        }
                      >
                        {t("Explore")}
                      </Button>

                      {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                    </div>
                  </div>
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
export default FlagshipEvents;
