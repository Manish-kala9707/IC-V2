import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tribal.css";

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import FITribalimg1 from '../../../image/FIT';
//  import FITribalimg2 from '../../../Images/tribal'

function TribalFest() {
  const navigate = useNavigate();
  var settings1 = {
    dots: false,
    infinite: false,
    lazyload: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrow: false,
    autoplay: false,
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
  const { t } = useTranslation();
  return (
    <>
      <Container className="fitribfest-header">
        <Row>
          <Col>
            <h1>{t("Tribal Festivals")}</h1>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>
      <Container className="fitribfest-cover">
        <Row className="justify-content-md-center">
          <Col>
            {location.pathname.includes("lang=hi") ? (
              <p>
                भारत में अनेक आदिवासी जनजातियाँ निवास करती हैं, जिनमें से
                प्रत्येक की अपनी अलग संस्कृति और जीवन शैली है। भारत की विभिन्न
                जनजातियों द्वारा मनाए जाने वाले त्यौहारों के कई पहलू हैं और वे
                अनूठे हैं। ये त्यौहार जनजातियों के पारंपरिक रीति-रिवाजों और
                मान्यताओं को प्रदर्शित करते हैं। प्रकृति, उर्वरता, समृद्धि,
                कृषि, पूर्वजों और आदिवासी देवताओं से जुड़ी सांस्कृतिक उल्लास की
                बहुरंगी कहानी इन आदिवासी त्यौहारों में सुनाई जाती है। इन
                जनजातियों की अलग-अलग जीवन शैली उनके कई रीति-रिवाजों और त्यौहारों
                में झलकती है।
              </p>
            ) : (
              <p>
                India is home to numerous indigenous tribes, each with a
                distinct culture and way of life. The festivals celebrated by
                India's various tribes have many facets and are unique. These
                festivals exhibit the traditional customs and beliefs of the
                tribes. The multi-hued tale of cultural euphoria associated with
                nature, fertility, prosperity, agriculture, ancestors, and
                tribal deities is narrated in these tribal festivals. The
                distinct way of life of these tribes is reflected in their
                numerous observances and festivals.{" "}
              </p>
            )}
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}
      >
        <Slider1 {...settings1}>
          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
            <div className="fitribfest-card-2">
              <img className="img img-responsive" alt="rarebook" />
              <div
                className="fitribfest-name"
                style={{ left: "80px", top: "215px" }}
              >
                <p>{t("Worshiping Nature")}</p>
              </div>
              <div className="fitribfest-username"></div>
              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
              <Button
                className="fitribfest-icons"
                variant="outline-light"
                onClick={() =>
                  navigate(`${location.pathname}/worshiping-nature`)
                }
              >
                {t("Explore")}
              </Button>
            </div>
          </div>

          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
            <div className="fitribfest-card-2">
              <img className="img img-responsive" alt="rarebook" />
              <div
                className="fitribfest-name"
                style={{ left: "50px", top: "215px" }}
              >
                <p>{t("Venerating Ancestors Deities")}</p>
              </div>
              <div className="fitribfest-username"></div>
              <Button
                className="fitribfest-icons"
                variant="outline-light"
                onClick={() =>
                  navigate(`${location.pathname}/venerating-ancestors-deities`)
                }
              >
                {t("Explore")}
              </Button>

              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
            </div>
          </div>
        </Slider1>
      </Container>
    </>
  );
}

export default TribalFest;
