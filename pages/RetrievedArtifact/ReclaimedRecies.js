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
import AjantaCardDetails from "../AjantaCaves/AjantaCardDetails";
import RetrievedDetails from "../../components/Card/RetrievedDetails";
const ReclaimedRelics = () => {
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

  console.log("fethedatarc", fetchedData);
  console.log("nidatarc", nid);
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
                  <h1>{t("Reclaimed Relics")}</h1>
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
              <Row>
                {location.pathname.includes("lang=hi") ? (
                  <p>
                    आज़ादी के बाद के वर्षों में, सैकड़ों या हज़ारों की संख्या
                    में कलाकृतियाँ भारत के तटों से अक्सर अज्ञात गुप्त और गुप्त
                    चैनलों के ज़रिए बाहर चली गई हैं। कई कलाकृतियों की उत्पत्ति
                    का स्पष्ट पता नहीं है, जिससे उनके चोरी होने के सटीक स्थान का
                    पता लगाना चुनौतीपूर्ण हो जाता है, उनके क्षेत्रीय उद्गम के
                    बारे में सामान्य जानकारी को छोड़कर। पिछले दशक में, भारतीय
                    सरकार, विरासत के प्रति उत्साही और गैर सरकारी संगठनों के ठोस
                    प्रयासों से कई कलाकृतियों को भारत वापस लाया गया है। यह खंड
                    इन कलाकृतियों को उनके संबंधित स्रोतों और जिस सामग्री से
                    उन्हें बनाया गया है उसके आधार पर वर्गीकृत करता है, हालाँकि
                    कुछ अभी भी अज्ञात उद्गम रखती हैं।
                  </p>
                ) : (
                  <p>
                    Over the years since independence, a multitude of artefacts,
                    numbering in the hundreds, if not thousands, have departed
                    from India's shores, often through unknown covert and
                    clandestine channels. Many lack a clear origin, making it
                    challenging to ascertain their exact place of theft, save
                    for a general notion of their regional provenance. In the
                    past decade, concerted efforts by the Indian government,
                    heritage enthusiasts, and NGOs have led to the repatriation
                    of numerous artefacts to India. This section categorises
                    these artefacts based on their respective sources and
                    according to the materials they are crafted from, although
                    some still bear unknown provenance.
                  </p>
                )}
              </Row>
            </Container>
          )}

          {location && !location?.pathname?.includes("title") && (
            <Container>
              <Row>
                <Col lg={6} md={6} sm={12}></Col>
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
                  return <RetrievedDetails key={x.nid} detailData={x} />;
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
export default ReclaimedRelics;
