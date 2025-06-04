import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./Ajanta.css";
import { useNavigate } from "react-router-dom";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
// import '../../node_modules/video-react/dist/video-react.css';

import AjantaBan from "../../image/AjantaBan.png";

import { Swiper, SwiperSlide } from "swiper/react";
// install swiper.js npm i swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from 'swiper/modules';

import AboutAjantaImg from "../../image/aboutajnimg1.png";

import AjntaImg1 from "../../image/ajnata-2.webp";
import AjntaImg2 from "../../image/ajnata-3.webp";
import AjntaImg3 from "../../image/ajnata-4.webp";
import AjntaImg4 from "../../image/ajnata-5.webp";
import AjntaImg5 from "../../image/Sahid_Smarak.webp";
import { useTranslation } from "react-i18next";

function Ajanta() {
  // slider start here
  var settings1 = {
    dots: false,
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          draggable: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
          draggable: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          // initialSlide: 1,
          dots: false,
          arrows: false,
          draggable: true,
          autoplay: false,
        },
      },
    ],
  };
  //slider end here
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="ajanta-parent-container">
        <img src={AjantaBan} className="ajanta-banner" alt="Free Banner" />
      </div>
      <Container className="ajanta-header">
        <Row>
          <Col>
            <h4>{t("Ajanta")}</h4>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>
      <Container className="ajanta-cover">
        <Row className="justify-content-md-center">
          <Col>
            {location.pathname.includes("lang=hi") ? (
              <p>
                अजंता गुफाएँ चट्टानों को काटकर बनाए गए बौद्ध गुफा मंदिर हैं, जो
                इंद्री पर्वतमाला के किनारे वाघोरा नदी के पास एक घोड़े की नाल के
                आकार की घाटी में उकेरे गए हैं। ये गुफाएँ यूनेस्को की विश्व धरोहर
                स्थल हैं और यहाँ हज़ारों पर्यटक आते हैं जो इसकी शांत जगह,
                चट्टानों को काटकर बनाई गई वास्तुकला और गुफाओं में पाए जाने वाले
                सुंदर बौद्ध चित्रों की प्रशंसा करने आते हैं। ये 30 चट्टानों को
                काटकर बनाई गई गुफाएँ महाराष्ट्र में सहयाद्रि या पश्चिमी घाट पर
                स्थित बौद्ध गुफा मंदिरों के समूह का हिस्सा हैं। लेकिन अजंता
                अद्वितीय है क्योंकि यहाँ कला के बेहतरीन नमूने मौजूद हैं - गुफा 9
                और 10 में भारत की सबसे पुरानी बौद्ध कथाएँ हैं।
              </p>
            ) : (
              <p>
                The Ajantā caves are rock-cut Buddhist cave temples carved out
                of a horseshoe shaped valley near the Waghora river at the edge
                of the Indyadhri range. The caves are a UNESCO World Heritage
                site and are thronged by thousands of tourists who come to
                admire its serene location, rock-cut architecture and beautiful
                Buddhist paintings that are found in the caves. These 30
                rock-cut caves are part of a constellation of Buddhist cave
                temples dotting the Sahayādri or Western Ghats in Maharashtra.
                But Ajantā is unique as it hosts the finest specimens of art -
                Cave 9 and 10 contain the oldest Buddhist narrative paintings in
                India.
              </p>
            )}
          </Col>
        </Row>
      </Container>

      <Container className="ajanta-header">
        <Row>
          <Col>
            <h4>{t("Watch a short introduction to Ajanta")}</h4>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>

      <Container className="ajanta-banner-container ">
        <Row style={{ marginTop: "0px" }}>
          <Col
            xs={12}
            lg={12}
            style={{
              display: "flex",
              alignItems: "centre",
              justifyContent: "centre",
              height: "400px",
            }}
          >
            <video
              src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/varanasi/IntroductionAjanta.mp4"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              style={{
                display: "flex",
                width: "100%",
                borderRadius: "8px",
                height: "100%",
                justifyContent: "center",
                border: "2px solid black",
              }}
            />
          </Col>
        </Row>

        {/* <Player className="ajanta-player" playsInline src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/varanasi/IntroductionAjanta.mp4">
                        <BigPlayButton position="center" />
                        <LoadingSpinner />
                        <ControlBar autoHide={true} className="my-class" />
                    </Player> */}
      </Container>

      {/* swiper 3d slider start here */}

      <div className="ajanta-contain-slider "></div>

      <Container>
        <div class="ajanta-lst-imgs-grid">
          <div
            onClick={() => {
               location.pathname.includes("lang=hi")?(navigate("/lang=hi/ajanta-caves")):(navigate("/ajanta-caves"));
            }}
            class="ajanta-grid-item"
            id="caves"
          >
            <img src={AjntaImg5} alt="Caves" />
            <div class="ajanta-overlay">
              <div class="ajanta-text">{t("Caves")}</div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/ajanta-paintings");
            }}
            class="ajanta-grid-item"
            id="paintings"
          >
            <img src={AjntaImg2} alt="Paintings" />
            <div class="ajanta-overlay">
              <div class="ajanta-text">{t("Paintings")}</div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate();
            }}
            class="ajanta-grid-item center"
            id="stories"
          >
            <img src={AjntaImg4} alt="Stories" />
            <div class="ajanta-overlay">
              <div class="ajanta-text">{t("Stories")}</div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate();
            }}
            class="ajanta-grid-item"
            id="material-culture"
          >
            <img src={AjntaImg1} alt="Material Culture" />
            <div class="ajanta-overlay">
              <div class="ajanta-text">{t("Material Culture")}</div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate();
            }}
            class="ajanta-grid-item"
            id="sculptures"
          >
            <img src={AjntaImg3} alt="Sculptures & Architecture" />
            <div class="ajanta-overlay">
              <div class="ajanta-text">{t("Sculptures & Architecture")}</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Ajanta;
