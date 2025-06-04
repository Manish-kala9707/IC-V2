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
const BookIndianArt = () => {
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
                  <h1>{t("Book on Indian Art and Iconography")}</h1>
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
                    भारत से चुराई और तस्करी की गई कलाकृतियाँ भारतीय कला के कुछ
                    बेहतरीन उदाहरण हैं। ये वस्तुएँ अपनी अपार सौंदर्यात्मकता और
                    ऐतिहासिक महत्व के कारण काले बाज़ार में ऊँची कीमतों पर बिकती
                    हैं। दुर्भाग्य से, यह कलात्मक विरासत अक्सर संदर्भहीन हो जाती
                    है, समृद्ध पश्चिमी संग्रहालयों में कांच के बक्सों के पीछे
                    प्रदर्शित की जाती है या व्यापारियों के निजी क्वार्टरों की
                    शोभा बढ़ाती है। भारतीय कला का गहन ज्ञान इसके सांस्कृतिक,
                    ऐतिहासिक और धार्मिक महत्व की सराहना और समझ प्रदान करता है।
                    यह विशेषज्ञता कलाकृतियों को पहचानने और प्रमाणित करने में
                    सहायता करती है, जिससे चोरी की गई वस्तुओं की पहचान करना और
                    उनकी उत्पत्ति का पता लगाना आसान हो जाता है, जिससे भारत की
                    विरासत का अधिक प्रभावी दस्तावेज़ीकरण और संरक्षण संभव हो पाता
                    है। हमारे पोर्टल पर इस विषय पर गहराई से जानने के लिए भारतीय
                    कला पर हमारी चुनी हुई पुस्तकों की सूची देखें।
                  </p>
                ) : (
                  <p>
                    Artefacts stolen and smuggled from India comprise some of
                    the finest representations of Indian art. These items fetch
                    high prices on the black market due to their immense
                    aesthetic beauty and historical significance. Unfortunately,
                    this artistic heritage often ends up decontextualized,
                    displayed behind glass cases in affluent Western museums, or
                    adorning the private quarters of businessmen. A deep
                    knowledge of Indian art allows for an appreciation and
                    understanding of its cultural, historical, and religious
                    significance. This expertise aids in recognizing and
                    authenticating artefacts, making it easier to identify
                    stolen items and trace their origins, thereby enabling more
                    effective documentation and protection of India’s heritage.
                    Explore our curated book list on Indian art to delve deeper
                    into this subject on our portal.
                  </p>
                )}
              </Row>
            </Container>
          )}

          {location && !location?.pathname?.includes("title") && (
            <Container>
              <Row>
                <Col lg={6} md={6}></Col>
                {/* <InternalSearchCard filterSearchdata={filterSearchdata} filterSearchdata2={filterSearchdata2} filterName1={"Origin"} filterName2={"Material"}  category={"retrieved-artefacts-of-india/reclaimed-relics"}/>*/}
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
export default BookIndianArt;
