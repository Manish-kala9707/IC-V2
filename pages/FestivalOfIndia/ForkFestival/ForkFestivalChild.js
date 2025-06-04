import React from "react";
// import './FreedomArchive.css';
import FICeleBan from "../../../image/FICeleBan.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FICelebratingNature.css";
import { useContext } from "react";
import { ContextData } from "../../Store/FetchApiData";
import CounterCard from "../../../components/Card/CounterCard";
import Card from "../../../components/Card/Card";
import Pagination2 from "../../../components/Pagination/Pagination2";
import Divider from "../../../image/SwirlDivider.png";
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FICeleimg1 from "../../../image/celeimg1.png";
import FICeleimg2 from "../../../image/celeimg2.png";
import FICeleimg3 from "../../../image/celeimg3.png";
import FICeleimg4 from "../../../image/celeimg4.png";
import { useTranslation } from "react-i18next";
import FesivalsOfIndiaDetails from "../FesivalsOfIndiaDetails";
import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
import ErrorPage from "../../../components/Card/ErrorPage";
function ForkFestivalChild() {
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
        <ErrorPage response={response} />
      ) : (
        <div className="App">
          {location && !location?.pathname?.includes("title") && (
            <>
              <Container className="ficelenat-header">
                <Row>
                  <Col>
                    {location.pathname.includes("celebrating-nature") && (
                      <h1>{t("Celebrating Nature")}</h1>
                    )}
                    {location.pathname.includes("social-traditions") && (
                      <h1>{t("Social Traditions")}</h1>
                    )}
                    {location.pathname.includes("honoring-deities") && (
                      <h1>{t("Honoring Deities")}</h1>
                    )}
                    {/* <SwrilDivider /> */}
                  </Col>
                </Row>
              </Container>
              <Container className="ficelenat-cover">
                <Row className="justify-content-md-center">
                  <Col>
                    {location.pathname.includes("lang=hi") ? (
                      <p>
                        लोक उत्सव सांस्कृतिक आत्मसात के प्रतीक हैं जो समुदाय में
                        पाई जाने वाली पारंपरिक अभिव्यक्तियों के विभिन्न घटकों को
                        एकजुट करते हैं। ये त्यौहार प्रकृति का सम्मान करने,
                        सामाजिक परंपराओं को संरक्षित करने और पूर्वजों और देवताओं
                        को याद करने वाले सामाजिक लोक रीति-रिवाजों के विविध घटकों
                        को दर्शाते हैं। ये आवधिक उत्सव हैं जहाँ समुदाय उत्सवों
                        में औपचारिक रूप से बातचीत करते हैं।
                      </p>
                    ) : (
                      <p>
                        Folk festivals are markers of cultural assimilation
                        uniting various components of the traditional
                        expressions found in a community. The festivals reflect
                        the diverse constituents of social folk customs revering
                        nature, preserving social traditions, and commemorating
                        ancestors and deities. They are the periodic
                        celebrations where the communities interact ceremonially
                        in the festivities.
                      </p>
                    )}
                  </Col>
                </Row>
              </Container>
            </>
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
                  return <FesivalsOfIndiaDetails key={x.nid} detailData={x} />;
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
}

export default ForkFestivalChild;
