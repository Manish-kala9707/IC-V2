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
import CardDetails from "../../components/Card/CardDetails";
import clothingancient from "../../image/timelessimages/clothing ancient.jpg";
import clothingmedival from "../../image/timelessimages/clothing medival.jpg";
import clothingcolonial from "../../image/timelessimages/clothing colonial.jpg";
import accbg1 from "../../image/timelessimages/acc-bg-1.jpg";
import accbg2 from "../../image/timelessimages/acc-bg-2.jpg";
import Clithingphoto from "../../image/timelessimages/Clithingphoto.png";

const TimelessFirstChild = () => {
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
  const splicedData =
    location.pathname.includes("all") ||
    location.pathname.includes("book") ||
    location.pathname.includes("videostories")
      ? fetchedData
      : fetchedData.slice(0, 5);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAncient = () => {
    if (location.pathname.includes("accessories")) {
      return `${location.pathname}/title=history-of-accessories-in-Ancient-India/nid=2896047`;
    }
    if (location.pathname.includes("clothing")) {
      return `${location.pathname}/title=history-of-clothing-in-Ancient-India/nid=2885896`;
    }
    if (location.pathname.includes("hairstyles")) {
      return `${location.pathname}/title=history-of-hairstyles-in-Ancient-India/nid=2951062`;
    }
  };
  const handleMedival = () => {
    if (location.pathname.includes("accessories")) {
      return `${location.pathname}/title=history-of-accessories-in-medival-India/nid=2898774`;
    }
    if (location.pathname.includes("clothing")) {
      return `${location.pathname}/title=history-of-clothing-in-medival-India/nid=2884322`;
    }
    if (location.pathname.includes("hairstyles")) {
      return `${location.pathname}/title=history-of-hairstyles-in-medival-India/nid=2949867`;
    }
  };
  const handleColonial = () => {
    if (location.pathname.includes("accessories")) {
      return `${location.pathname}/title=history-of-accessories-in-colonial-India/nid=2898771`;
    }
    if (location.pathname.includes("clothing")) {
      return `${location.pathname}/title=history-of-clothing-in-colonial-India/nid=2885931`;
    }
    if (location.pathname.includes("hairstyles")) {
      return `${location.pathname}/title=history-of-hairstyles-in-colonial-India/nid=2949961`;
    }
  };
  console.log("colonial=====", handleColonial());
  return (
    <>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <div className="App">
          {location && !location?.pathname?.includes("title") && (
            <Container className="archive-header">
              {!location.pathname.includes("all") && (
                <Row>
                  <Col>
                    {location.pathname.includes("clothing") && (
                      <h1>{t("Clothing")}</h1>
                    )}
                    {location.pathname.includes("accessories") && (
                      <h1>{t("Accessories")}</h1>
                    )}
                    {location.pathname.includes("boardgames") && (
                      <h1>{t("Board Games")}</h1>
                    )}
                    {location.pathname.includes("hairstyles") && (
                      <h1>{t("Hairstyles")}</h1>
                    )}
                    {location.pathname.includes("books") && (
                      <h1>{t("Read-Timeless Trends")}</h1>
                    )}
                    {location.pathname.includes("videostories") && (
                      <h1> {t("Video Stories")}</h1>
                    )}
                    {location.pathname.includes("photoessay") && (
                      <h1> {t("Photo Essay")}</h1>
                    )}
                    {location.pathname.includes("snippets") && (
                      <h1>{t("Snippets & Stories")}</h1>
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
              )}
              {!location.pathname.includes("all") &&
                !location.pathname.includes("videostories") &&
                !location.pathname.includes("photoessay") &&
                !location.pathname.includes("book") &&
                !location.pathname.includes("snippets") && (
                  <Row>
                    {location.pathname.includes("lang=hi") ? (
                      <p>
                        यह खंड भारतीय उपमहाद्वीप में कपड़ों के इतिहास का पता
                        लगाता है। यह वस्त्रों की लंबी और विविध परंपरा और समय
                        अवधि में लोगों द्वारा पहने जाने वाले परिधानों की विभिन्न
                        शैलियों में परिलक्षित होता है। भौगोलिक परिस्थितियाँ,
                        अंतर-सांस्कृतिक संपर्क और आर्थिक और राजनीतिक परिवर्तन
                        सभी ने कपड़ों में विभिन्न प्रवृत्तियों में योगदान दिया
                        है।
                      </p>
                    ) : (
                      location.pathname.includes("clothing") && (
                        <p>
                          This section traces the history of clothing in the
                          Indian subcontinent. It is reflected in the long and
                          diverse tradition of textiles and the various styles
                          of garments worn by the people across time periods.
                          Geographical conditions, cross-cultural interactions,
                          and economic and political changes have all
                          contributed to the various trends in clothing.
                        </p>
                      )
                    )}
                    {location.pathname.includes("lang=hi") ? (
                      <p>
                        यह खंड भारतीय उपमहाद्वीप में सहायक उपकरणों के इतिहास का
                        पता लगाता है। आभूषण, जूते और अन्य सहायक उपकरणों का
                        इतिहास पुरातन काल से चला आ रहा है, जिसमें उस समय की
                        सामाजिक, राजनीतिक, आर्थिक और सांस्कृतिक स्थितियों को
                        दर्शाने वाली विविधताएँ हैं। आवर्ती विषय, डिज़ाइन और
                        तकनीक अतीत और वर्तमान के बीच एक निर्विवाद संबंध स्थापित
                        करते हैं।
                      </p>
                    ) : (
                      location.pathname.includes("accessories") && (
                        <p>
                          This section traces the history of accessories in the
                          Indian subcontinent. The history of jewellery,
                          footwear and other accessories goes back to antiquity,
                          with variations reflecting the social, political,
                          economic and cultural conditions of the time.
                          Recurring themes, designs and techniques establish an
                          undeniable connection between the past and the
                          present.{" "}
                        </p>
                      )
                    )}
                    {location.pathname.includes("boardgames") && (
                      <p>{t("Page not found")}</p>
                    )}
                    {location.pathname.includes("lang=hi") ? (
                      <p>
                        यह खंड भारतीय उपमहाद्वीप में हेयर स्टाइल के इतिहास का
                        पता लगाता है, हेयर स्टाइलिंग प्रथाओं की जटिल और विविध
                        परंपराओं को प्रदर्शित करता है। भौगोलिक परिस्थितियों,
                        अंतर-सांस्कृतिक बातचीत और समूहों की विविधता ने समय अवधि
                        के दौरान लोगों के हेयर स्टाइल में अधिक जटिलता और विविधता
                        में योगदान दिया है। प्राचीन काल से लेकर वर्तमान तक, हेयर
                        स्टाइल मानव पहचान का एक अभिन्न अंग बने हुए हैं।
                      </p>
                    ) : (
                      location.pathname.includes("hairstyles") && (
                        <p>
                          This section traces the history of hairstyles in the
                          Indian subcontinent, showcasing the intricate and
                          varied tradition of hairstyling practices.
                          Geographical conditions, cross-cultural interactions,
                          and diversity of groups have all contributed to
                          greater complexity and variations in the hairstyles of
                          people across time periods. From ancient times to the
                          present, hairstyles have remained an integral part of
                          human identity.{" "}
                        </p>
                      )
                    )}
                  </Row>
                )}
              {!location.pathname.includes("videostories") &&
                !location.pathname.includes("photoessay") &&
                !location.pathname.includes("book") &&
                !location.pathname.includes("snippets") && (
                  <Row>
                    <Col>
                      <h1>{t("Digital catalogue")}</h1>
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
                    {location.pathname.includes("lang=hi") ? (
                      <p>
                        <b>डिजिटल कैटलॉग</b> संग्रहालय संग्रह से अलग-अलग
                        कलाकृतियों को देखता है और उनकी सबसे दिलचस्प विशेषताओं पर
                        प्रकाश डालता है।
                      </p>
                    ) : (
                      <p>
                        The <b>Digital Catalogue</b> looks at individual
                        artefacts from museum collections and highlights their
                        most interesting features.
                      </p>
                    )}
                  </Row>
                )}
            </Container>
          )}

          {location && !location?.pathname?.includes("title") && (
            <Container>
              {location.pathname.includes("all") &&
                location.pathname.includes("videostories") &&
                location.pathname.includes("photoessay") &&
                location.pathname.includes("book") &&
                location.pathname.includes("snippets")(
                  <Row>
                    <Col
                      md={6}
                      xs={12}
                      lg={6}
                      style={{ alignItems: "center", display: "flex" }}
                    ></Col>
                    {/* <InternalSearchCard filterSearchdata={filterSearchdata} filterSearchdata2={filterSearchdata2} category={"other-collections"}/> */}
                    <CounterCard
                      pageNumber={pageNumber}
                      total_items={total_items}
                      items_per_page={items_per_page}
                      t={t}
                    />
                  </Row>
                )}
            </Container>
          )}
          {location && location?.pathname?.includes("title") ? (
            splicedData && splicedData.length > 0 ? (
              splicedData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  if (
                    location.pathname.includes("books") ||
                    location.pathname.includes("videostories")
                  ) {
                    return <CardDetails key={x} detailData={x} />;
                  } else {
                    return <CardStoryDetails key={x} detailData={x} />;
                  }
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
                    search_results={splicedData}
                    response={response}
                    className="page-content"
                  />
                </div>
              </Row>
              {!location.pathname.includes("all") &&
                !location.pathname.includes("videostories") &&
                !location.pathname.includes("photoessay") &&
                !location.pathname.includes("book") &&
                !location.pathname.includes("snippets") && (
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    <button
                      onClick={() => navigate(`${location.pathname}/all`)}
                      className="p-2 catabtn"
                    >
                      {t(" Explore more")}
                    </button>
                  </Row>
                )}
              {!location.pathname.includes("all") &&
                !location.pathname.includes("videostories") &&
                !location.pathname.includes("photoessay") &&
                !location.pathname.includes("book") &&
                !location.pathname.includes("snippets") && (
                  <Row style={{ marginTop: "30px" }}>
                    <Col>
                      {location.pathname.includes("lang=hi") ? (
                        <h1>एक संक्षिप्त इतिहास</h1>
                      ) : (
                        <h1>A Brief history</h1>
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
                    {location.pathname.includes("lang=hi") ? (
                      <p>
                        <b>संक्षिप्त इतिहास</b> नामक खंड में भारतीय उपमहाद्वीप
                        में समय-समय पर हुए विभिन्न ऐतिहासिक विकासों और पहनावे
                        में हुए बदलावों का विवरण दिया गया है।
                      </p>
                    ) : (
                      <p>
                        The section, <b>A Brief History</b>, details the various
                        historical developments and changes in clothing across
                        time periods in the Indian subcontinent.
                      </p>
                    )}
                  </Row>
                )}
              {!location.pathname.includes("all") &&
                !location.pathname.includes("videostories") &&
                !location.pathname.includes("photoessay") &&
                !location.pathname.includes("book") &&
                !location.pathname.includes("snippets") && (
                  <Row style={{ display: "flex", justifyContent: "centre" }}>
                    <Col lg={4} md={4} sm={12}>
                      <Link to={handleAncient()}>
                        <div
                          className="children-card-food"
                          style={{ margin: "4px" }}
                        >
                          <img
                            style={{ borderRadius: "10px", width: "100%" }}
                            className="img-responsive"
                            src={
                              location.pathname.includes("accessories")
                                ? accbg1
                                : clothingancient
                            }
                          ></img>
                          <div className="children-name" style={{ top: "30%" }}>
                            <p className="text-center">{t("Ancient")}</p>
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
                    <Col lg={4} md={4} sm={12}>
                      <Link to={handleMedival()}>
                        <div
                          className="children-card-food"
                          style={{ margin: "4px" }}
                        >
                          <img
                            style={{ borderRadius: "10px" }}
                            className="img-responsive"
                            src={
                              location.pathname.includes("accessories")
                                ? accbg2
                                : clothingmedival
                            }
                          ></img>
                          <div className="children-name" style={{ top: "30%" }}>
                            <p className="text-center">{t("Medival")}</p>
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
                    <Col lg={4} md={4} sm={12}>
                      <Link to={handleColonial()}>
                        <div
                          className="children-card-food"
                          style={{ margin: "4px" }}
                        >
                          <img
                            style={{ borderRadius: "10px" }}
                            className="img-responsive"
                            src={
                              location.pathname.includes("accessories")
                                ? Clithingphoto
                                : clothingcolonial
                            }
                          ></img>
                          <div className="children-name" style={{ top: "30%" }}>
                            <p className="text-center">{t("Colonial")}</p>
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
                )}
            </Container>
          )}
          {location.pathname.includes("all") && (
            <Pagination2 totalPages={totalPages} baseUrl="/videos" />
          )}
          {(location.pathname.includes("book") ||
            location.pathname.includes("videostories") ||
            location.pathname.includes("photoessay") ||
            location.pathname.includes("snippets")) && (
            <Pagination2 totalPages={totalPages} baseUrl="/videos" />
          )}
        </div>
      )}
    </>
  );
};
export default TimelessFirstChild;
