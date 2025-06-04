import React from "react";
// import './FreedomArchive.css';
import FICeleBan from "../../../image/FICeleBan.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
function TribalFestChild() {
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
                    {location.pathname.includes("worshiping-nature") ? (
                      <h1>{t("Worshiping Nature")}</h1>
                    ) : (
                      <h1>{t("Venerating Ancestors Deities")}</h1>
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
                        भारत में अनेक आदिवासी जनजातियाँ निवास करती हैं, जिनमें
                        से प्रत्येक की अपनी अलग संस्कृति और जीवन शैली है। भारत
                        की विभिन्न जनजातियों द्वारा मनाए जाने वाले त्यौहारों के
                        कई पहलू हैं और वे अनूठे हैं। ये त्यौहार जनजातियों के
                        पारंपरिक रीति-रिवाजों और मान्यताओं को प्रदर्शित करते
                        हैं। प्रकृति, उर्वरता, समृद्धि, कृषि, पूर्वजों और
                        आदिवासी देवताओं से जुड़ी सांस्कृतिक उल्लास की बहुरंगी
                        कहानी इन आदिवासी त्यौहारों में सुनाई जाती है। इन
                        जनजातियों की अलग-अलग जीवन शैली उनके कई रीति-रिवाजों और
                        त्यौहारों में झलकती है।
                      </p>
                    ) : (
                      <p>
                        India is home to numerous indigenous tribes, each with a
                        distinct culture and way of life. The festivals
                        celebrated by India's various tribes have many facets
                        and are unique. These festivals exhibit the traditional
                        customs and beliefs of the tribes. The multi-hued tale
                        of cultural euphoria associated with nature, fertility,
                        prosperity, agriculture, ancestors, and tribal deities
                        is narrated in these tribal festivals. The distinct way
                        of life of these tribes is reflected in their numerous
                        observances and festivals.
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

export default TribalFestChild;
