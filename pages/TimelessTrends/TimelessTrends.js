import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardDetails from "../../components/Card/CardDetails";
import { Filter, Search } from "react-feather";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import Accessieries from "../../image/timelessimages/Accesseries.jpg";
import Book from "../../image/timelessimages/Book.png";
import Hairstyles from "../../image/timelessimages/Hairstyles_0.jpg";
import Snippets from "../../image/timelessimages/SnippetsStories.jpg";
import boardgames from "../../image/timelessimages/boardgames.jpg";
import clothing from "../../image/timelessimages/clothing.jpg";
import photoessay from "../../image/timelessimages/photo-essay.jpg";
import timelesscarosel1 from "../../image/timelessimages/timelesscarosel1.jpg";
import timelesscarosel2 from "../../image/timelessimages/timelesscarosel2.png";
import timelesscarosel3 from "../../image/timelessimages/timelesscarosel3.png";
import videostories from "../../image/timelessimages/videostories.png";
import Pagination2 from "../../components/Pagination/Pagination2";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import Card from "../../components/Card/CricleCard";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap";
import ErrorPage from "../../components/Card/ErrorPage";
import { useTranslation } from "react-i18next";
const TimelessTrends = () => {
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
    <div className="App">
      {location && !location?.pathname?.includes("title") && (
        <Container className="archive-header">
          <Row
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              height: "450px",
            }}
          >
            <Carousel style={{ height: "100%" }} slide={false}>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={timelesscarosel1}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={timelesscarosel2}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={timelesscarosel3}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row>
            <Col>
              <h1>{t("Timeless Trends")}</h1>
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
                भारतीय कला अपनी पारंपरिक और आधुनिक दोनों ही अभिव्यक्तियों में
                डिज़ाइन की एक शक्तिशाली भावना और एक ज्वलंत कल्पना को प्रदर्शित
                करती है। ये मूर्तियां, पेंटिंग, भित्ति चित्र, वास्तुकला, सिक्के
                और व्यक्तिगत श्रंगार की वस्तुओं जैसे आभूषण, कपड़े, और बहुत कुछ
                में परिलक्षित होते हैं। समय की अनिश्चितताओं से बचते हुए, इनमें
                से कई कलाकृतियाँ अब संग्रहालयों, पुरातात्विक स्थलों और
                सांस्कृतिक संस्थानों में संरक्षित हैं। ये प्रतीत होता है कि
                साधारण कलाकृतियाँ ज्ञान के भंडार के रूप में कार्य करती हैं जो
                अपने समय के समाज के बारे में जानकारी देती हैं।
              </p>
            ) : (
              <p style={{ textAlign: "justify" }}>
                In both its traditional and modern manifestations, Indian art
                exhibits a powerful sense of design and a vivid imagination.
                These are reflected in sculptures, paintings, murals,
                architecture, coins, and items of personal adornment like
                jewellery, clothing, and more. Surviving the vagaries of time,
                many of these artefacts are now preserved in museums,
                archaeological sites and cultural institutions. These seemingly
                ordinary artefacts act as a repository of knowledge that conveys
                information about the society of their time.
              </p>
            )}
            {location.pathname.includes("lang=hi") ? (
              <p>
                टाइमलेस ट्रेंड्स अतीत और वर्तमान के बीच के अंतर्संबंधों का जश्न
                मनाता है और उन संस्कृतियों और परंपराओं के बीच संबंधों को खोजने
                का प्रयास करता है जिन्हें हम संजोते हैं, संरचनाएं और स्थल जो
                हमारे आधुनिक परिदृश्यों को दर्शाते हैं, और वे छोटी-छोटी चीजें जो
                हम हर दिन करते और कहते हैं।
              </p>
            ) : (
              <p style={{ textAlign: "justify" }}>
                Timeless Trends celebrates the interconnectedness of the past
                and the present and attempts to discover the links between the
                cultures and traditions we cherish, the structures and sites
                that dot our modern landscapes, and the little things that we do
                and say every day.
              </p>
            )}
          </Row>
        </Container>
      )}
      <Container className="archive-header">
        <Row>
          <Col
            lg={8}
            md={8}
            sm={12}
            style={{ height: "250px", marginTop: "10px" }}
          >
            <Link to={`${location.pathname}/clothing`}>
              <img
                style={{ borderRadius: "10px" }}
                className="img-responsive"
                src={clothing}
              ></img>
              <div className="overlay-text2">
                <b>{t("CLOTHING")}</b>
              </div>
            </Link>
          </Col>

          <Col
            lg={4}
            md={8}
            sm={12}
            style={{ height: "250px", marginTop: "10px" }}
          >
            <Link to={`${location.pathname}/accessories`}>
              <img
                style={{ borderRadius: "10px" }}
                className="img-responsive"
                src={Accessieries}
              ></img>
              <div className="overlay-text2">
                <b>{t("ACCESSORIES")}</b>
              </div>
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col
            lg={4}
            md={4}
            sm={12}
            style={{ height: "250px", marginTop: "10px" }}
          >
            <Link to={`${location.pathname}/boardgames`}>
              <img
                style={{ borderRadius: "10px" }}
                className="img-responsive"
                src={boardgames}
              ></img>
              <div className="overlay-text2">
                <b>{t("BOARD GAMES")}</b>
              </div>
            </Link>
          </Col>
          <Col
            lg={8}
            md={8}
            sm={12}
            style={{ height: "250px", marginTop: "10px" }}
          >
            <Link to={`${location.pathname}/hairstyles`}>
              <img
                style={{ borderRadius: "10px" }}
                className="img-responsive"
                src={Hairstyles}
              ></img>
              <div className="overlay-text2">
                <b>{t("HAIRSTYLES")}</b>
              </div>
            </Link>
          </Col>
        </Row>

        <Row style={{ marginTop: "15px" }}>
          <Col>
            <h1>{t("Then & Now")}</h1>
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
            {location.pathname.includes("lang=hi") ? (
              <p>
                नीचे दिए गए आइकन पुस्तकों, फोटो निबंधों और कहानियों का संग्रह
                प्रस्तुत करते हैं
              </p>
            ) : (
              <p>
                The icons below offer a collection of books, photo essays and
                stories
              </p>
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Link to={`${location.pathname}/books`}>
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img className="img-responsive" src={Book} alt={title} />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center">{t("Books")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Link to={`${location.pathname}/videostories`}>
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img
                  className="img-responsive"
                  src={videostories}
                  alt={title}
                />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center"> {t("Video-stories")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Link to={`${location.pathname}/photoessay`}>
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img className="img-responsive" src={photoessay} alt={title} />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center">{t("Photo-essay")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Link to={`${location.pathname}/snippets`}>
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img className="img-responsive" src={Snippets} alt={title} />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center"> {t("Snippets")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TimelessTrends;
