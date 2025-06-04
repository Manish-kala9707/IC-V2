import React, { useContext } from "react";
import FICeleBan from "../../../image/FICeleBan.png";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

function FairsPiligrimChild() {
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
                    {location.pathname.includes("fairs-piligrimages/fairs") ? (
                      <h1>{t("Fairs")}</h1>
                    ) : (
                      <h1>{t("Piligrimsa")}</h1>
                    )}
                  </Col>
                </Row>
              </Container>

              <Container className="ficelenat-cover">
                <Row className="justify-content-md-center">
                  <Col>
                    {location.pathname.includes("fairs-piligrimages/fairs") &&
                    location.pathname.includes("lang=hi") ? (
                      <>
                        <p>
                          भारत अपने त्यौहारों और मेलों के लिए प्रसिद्ध है। भारत
                          में आयोजित होने वाले ज़्यादातर मेले या तो धार्मिक मेले
                          होते हैं या मौसमी उत्सव। इन मेलों में लोगों की बड़ी
                          भीड़ उमड़ती है और इनमें से कई मेले कैलेंडर में पवित्र
                          तिथियों के आसपास आयोजित किए जाते हैं। मेले सांस्कृतिक
                          त्यौहार और व्यापार केंद्र होते हैं, जिनमें से ज़्यादातर
                          वार्षिक तीर्थस्थल के रूप में काम करते हैं। मेले आम
                          तौर पर किसी स्थान विशेष के लिए होते हैं और वहाँ रहने
                          वाले लोगों के पारंपरिक ग्रामीण जीवन, विश्वासों और
                          संस्कृति के बारे में जानकारी देते हैं।
                        </p>
                        <p>
                          India is well-known for its festivals and fairs. The
                          majority of the fairs held in India are either
                          religious fairs or seasonal celebrations. These fairs
                          witness a large congregation of people, and many of
                          them are organised around sacred dates in the
                          calendar. Fairs are cultural festivals and trade hubs,
                          with the majority of them serving as annual pilgrimage
                          centres. Fairs are generally specific to a location
                          and provide insight into traditional rural life,
                          beliefs, and the culture of the people who live there.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          भारत में तीर्थयात्रा या तीर्थयात्रा पवित्र स्थानों की
                          यात्रा करने की परंपरा है। तीर्थयात्री कुछ ज्योतिषीय
                          घटनाओं के दिन धार्मिक महत्व के स्थानों पर बड़ी संख्या
                          में एकत्रित होते हैं। मान्यता के अनुसार, तीर्थ स्थल या
                          तीर्थ वे स्थान हैं जहाँ मोक्ष या मुक्ति प्राप्त की जा
                          सकती है। बहुत से लोग अपने पापों से मुक्ति पाने और
                          धार्मिक पुण्य प्राप्त करने के लिए तीर्थों पर जाते हैं।
                          तीर्थयात्रा के दौरान, एक तीर्थयात्री का दैनिक जीवन
                          विभिन्न अनुष्ठानों और अनुष्ठानों से भरा होता है।
                        </p>
                        <p>
                          Pilgrimage or tirthayatra in India is a tradition of
                          journeying to sacred places. Pilgrims congregate in
                          large numbers at places of religious significance, on
                          days of certain astrological occurrence. According to
                          the belief, the pilgrimage sites or tirthas are the
                          places where moksha or liberation could be achieved.
                          Many people throng the tirthas for absolving their
                          sins and gaining religious merit. While on pilgrimage,
                          a pilgrim’s everyday life is full of various rituals
                          and observances.
                        </p>
                      </>
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

export default FairsPiligrimChild;
