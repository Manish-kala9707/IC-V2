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
import image1 from "../../image/retrievedartifact/img-rect-new-1.jpg";
import image2 from "../../image/retrievedartifact/img-rect-new-2.jpg";
import image3 from "../../image/retrievedartifact/img-rect-new-3.jpg";
import image4 from "../../image/retrievedartifact/img-rect-new-4.jpg";
import image5 from "../../image/retrievedartifact/top-retrive-11.png";
import image6 from "../../image/retrievedartifact/top-retrive-12.png";
import RetrievedDetails from "../../components/Card/RetrievedDetails";
const RetrievedArtifact = () => {
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
                  <h1>{t("Retrieved Artifact of India")}</h1>
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
            <Container className="archive-header">
              <Row style={{ backgroundColor: "black" }}>
                <Col lg={6} md={6} sm={12}>
                  <img className="img-responsive" src={image5}></img>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <img className="img-responsive" src={image6}></img>
                </Col>
              </Row>
              <Row>
                <Col
                  lg={12}
                  md={12}
                  sm={12}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    marginTop: "15px",
                    padding: "10px",
                  }}
                >
                  {location.pathname.includes("lang=hi") ? (
                    <p>
                      सहस्राब्दियों से भारत विविध संस्कृतियों का संगम रहा है,
                      जिसमें लुभावनी मूर्तियों और कलाकृतियों की समृद्ध विरासत
                      है। फिर भी, सदियों से विजेता और औपनिवेशिक शक्तियों ने इस
                      विरासत को लगातार लूटा, एक प्रवृत्ति जो आधुनिक लुटेरों और
                      तस्करों द्वारा जारी है। नतीजतन, भारत की अधिकांश ऐतिहासिक
                      संपदा पश्चिमी संग्रहालयों और निजी संग्रहों में चली गई,
                      जिसके परिणामस्वरूप एक गहरा सांस्कृतिक नुकसान हुआ जो भावी
                      पीढ़ियों को उनकी समृद्ध और जटिल विरासत से वंचित कर रहा है।{" "}
                      <br /> किसी कलाकृति की चोरी या हानि इतिहास के एक टुकड़े और
                      उसमें निहित सामूहिक स्मृति के मिटने का संकेत देती है।
                      कलाकृतियों को उनके मूल स्थानों से हटाने से उनका आंतरिक
                      महत्व खत्म हो जाता है, जिससे भावी पीढ़ियों को सांस्कृतिक
                      अंतर्दृष्टि से वंचित होना पड़ता है। हालांकि, पिछले दशक में
                      भारतीय और अंतर्राष्ट्रीय सरकारों, गैर सरकारी संगठनों,
                      पत्रकारों और विरासत कार्यकर्ताओं के ठोस प्रयासों से 358
                      कलाकृतियाँ वापस भारत लाने में सफलता मिली है। <br />
                      इस अनुभाग को पढ़कर प्राप्त कलाकृतियों की दुनिया में गहराई
                      से उतरें, उनकी वापसी की कहानियों, विरासत और उन्हें
                      सुरक्षित रखने वाले कानूनी ढाँचों को जानें।
                    </p>
                  ) : (
                    <p>
                      For millennia, India has been a melting pot of diverse
                      cultures, boasting a rich heritage of breathtaking
                      sculptures and artwork. Yet, over centuries, conquerors
                      and colonial powers relentlessly pillaged this heritage, a
                      trend continued by modern looters and smugglers.
                      Consequently, much of India’s historical wealth found its
                      way to Western museums and private collections, resulting
                      in a profound cultural loss that deprives future
                      generations of their rich and intricate heritage.
                      <br />
                      The theft or loss of an artefact signifies the erasure of
                      a piece of history and the collective memory it embodies.
                      Removing artefacts from their original locations strips
                      them of their intrinsic significance, depriving future
                      generations of cultural insights. However, in the past
                      decade, concerted efforts by Indian and international
                      governments, NGOs, journalists, and heritage activists
                      have succeeded in repatriating 358 artefacts back to
                      India.
                      <br />
                      Explore this section to delve into the world of Retrieved
                      Artefacts, uncovering their repatriation stories,
                      heritage, and the legal frameworks that protect them.
                    </p>
                  )}
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <h1>{t("Artifact Chronicles")}</h1>
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
                    इन कलाकृतियों से जुड़ी चोरी, तस्करी और उनके घर वापसी की
                    कहानियाँ कला तस्करी के गुप्त क्षेत्र में अंतर्दृष्टि प्रदान
                    करती हैं। वे देश की अमूल्य विरासत को पुनर्स्थापित करने के
                    लिए विजय और अटूट प्रयास के प्रमाण के रूप में भी काम करते
                    हैं। कलाकृतियों पर क्लिक करके इसकी यात्रा का पता लगाएँ।
                  </p>
                ) : (
                  <p>
                    The tales of theft, smuggling and their return home
                    surrounding these artefacts offer insights into the
                    clandestine realm of art smuggling. They also serve as
                    testaments to the triumphs and unwavering endeavour to
                    restore the nation’s invaluable heritage. Click on the
                    artefacts to explore its journey.
                  </p>
                )}
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
            <Container className="archive-header">
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
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() =>
                    navigate(`${location.pathname}/artefact-chronicles`)
                  }
                  className="p-2 catabtn"
                >
                  {t("Explore more")}
                </button>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <h1>{t("Artifact Exploration hub")}</h1>
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
                    भारत के समृद्ध इतिहास की यात्रा पर निकल पड़िए, जो इसके अतीत
                    की कहानियाँ सुनाने वाले अवशेषों से भरा हुआ है। भारत की चोरी
                    हुई विरासत को वापस पाने की चल रही लड़ाई पर एक सम्मोहक निबंध
                    पढ़ें। लौटाए गए खजानों की एक क्यूरेटेड सूची में तल्लीन हो
                    जाएँ, और हमारी सूचनात्मक समयरेखा के साथ विरासत और सांस्कृतिक
                    संपत्ति के संरक्षण और संरक्षण के कानूनी और अंतर्राष्ट्रीय
                    ढांचे को नेविगेट करें। हमारे सावधानीपूर्वक क्यूरेटेड पुस्तक
                    संग्रह के माध्यम से भारतीय कला और प्रतीकात्मकता की दुनिया
                    में खुद को डुबोएँ। अभी अपना अन्वेषण शुरू करें।
                  </p>
                ) : (
                  <p class="retrie-p">
                    Embark on a journey through India’s rich history, filled
                    with relics that narrate tales of its past. Explore a
                    compelling essay on India’s ongoing battle to reclaim its
                    stolen heritage. Delve into a curated list of returned
                    treasures, and navigate the legal and international
                    framework of protection and preservation of heritage and
                    cultural property with our informative timeline. Immerse
                    yourself in the world of Indian art and iconography through
                    our carefully curated book collection. Begin your
                    exploration now.
                  </p>
                )}
              </Row>
              <Row>
                <Col lg={3} md={6} sm={12}>
                  <Link
                    to={`/stories/title=Looted,Recovered,and Awaited: Stories of India/page=2/nid=2801016`}
                  >
                    <div
                      className="children-card-food"
                      style={{ margin: "4px" }}
                    >
                      <img
                        className="img-responsive"
                        src={image1}
                        alt={title}
                      />
                      <div className="children-name" style={{ top: "30%" }}>
                        <p className="text-center">
                          {t(" Essay:India’s Stolen Antiques")}
                        </p>
                      </div>
                      <div className="children-username"></div>
                      <Button
                        className="children-icons"
                        variant="outline-light"
                      >
                        {t("Explore")}
                      </Button>
                    </div>
                  </Link>
                </Col>

                <Col lg={3} md={6} sm={12}>
                  <Link to={`${location.pathname}/reclaimed-relics`}>
                    <div
                      className="children-card-food"
                      style={{ margin: "4px" }}
                    >
                      <img
                        className="img-responsive"
                        src={image2}
                        alt={title}
                      />
                      <div className="children-name" style={{ top: "30%" }}>
                        <p className="text-center">
                          {t("Reclaimed relics:Glimpses")}
                        </p>
                      </div>
                      <div className="children-username"></div>
                      <Button
                        className="children-icons"
                        variant="outline-light"
                      >
                        {t("Explore")}
                      </Button>
                    </div>
                  </Link>
                </Col>

                <Col lg={3} md={6} sm={12}>
                  <Link
                    to={`stories/title=Looted,Recovered,and Awaited: Stories of India/page=1/nid=2801016`}
                  >
                    <div
                      className="children-card-food"
                      style={{ margin: "4px" }}
                    >
                      <img
                        className="img-responsive"
                        src={image3}
                        alt={title}
                      />
                      <div className="children-name" style={{ top: "30%" }}>
                        {location.pathname.includes("lang=hi") ? (
                          <p>
                            संधियों, कानूनों, संगठनों के लिए समयरेखा..... जल्द
                            ही आ रही है
                          </p>
                        ) : (
                          <p className="text-center">
                            Timeline for Treaties,Laws,Organisations..... coming
                            soon
                          </p>
                        )}
                      </div>
                      <div className="children-username"></div>
                      <Button
                        className="children-icons"
                        variant="outline-light"
                      >
                        {t("Explore")}
                      </Button>
                    </div>
                  </Link>
                </Col>

                <Col lg={3} md={6} sm={12}>
                  <Link
                    to={`${location.pathname}/books-indian-art-and-iconography`}
                  >
                    <div
                      className="children-card-food"
                      style={{ margin: "4px" }}
                    >
                      <img
                        className="img-responsive"
                        src={image4}
                        alt={title}
                      />
                      <div className="children-name" style={{ top: "30%" }}>
                        {location.pathname.includes("lang=hi") ? (
                          <p>भारतीय कला और प्रतिमा विज्ञान पर पुस्तकें</p>
                        ) : (
                          <p className="text-center">
                            Books on Indian Art and iconography
                          </p>
                        )}
                      </div>
                      <div className="children-username"></div>
                      <Button
                        className="children-icons"
                        variant="outline-light"
                      >
                        {t("Explore")}
                      </Button>
                    </div>
                  </Link>
                </Col>
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
export default RetrievedArtifact;
