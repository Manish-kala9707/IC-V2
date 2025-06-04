import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FairsPiligram.css";

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FIFairimg1 from "../../../image/fairimg1.png";
import FIFairimg2 from "../../../image/fairimg2.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FairsPilgrim() {
  const navigate = useNavigate();
  const {t}=useTranslation()
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
  return (
    <>
      <Container className="fifairspil-header">
        <Row>
          <Col>
            <h1>{t("fairs & pilgrimages")}</h1>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>
      <Container className="fifairspil-cover">
        <Row className="justify-content-md-center">
          <Col>
            {location.pathname.includes("lang=hi") ? (
              <p>
                मेले और तीर्थयात्राएँ कई तरह के चौराहे बन जाते हैं और इन्हें
                सिर्फ़ तीर्थयात्रियों के जमावड़े के तौर पर नहीं देखा जा सकता। इन
                समागमों की एक समृद्ध सांस्कृतिक विरासत होती है क्योंकि ये किसी
                समुदाय के इतिहास और परंपरा को दर्शाते हैं। ये धार्मिक, आर्थिक,
                सामाजिक, सांस्कृतिक और राजनीतिक समेत कई तरह से एक दूसरे से
                जुड़ने के बिंदु होते हैं। खास पवित्र दिनों पर तीर्थ स्थलों और
                धार्मिक स्थलों पर बड़ी संख्या में श्रद्धालु एकत्रित होते हैं जो
                व्यापारियों, कारोबारियों, दुकानदारों के लिए व्यापार का एक अवसर
                भी बन जाता है। ये तीर्थ स्थल आदान-प्रदान के केंद्र और
                सामाजिक-सांस्कृतिक नेटवर्क के मिलन स्थल के रूप में विकसित हुए
                हैं।
              </p>
            ) : (
              <p>
                Fairs and pilgrimages become points of multiple intersections
                and cannot be viewed simply as a gathering of pilgrims. These
                gatherings have a rich cultural heritage because they reflect a
                community's history and tradition. They are points of
                convergence in a variety of ways, including religious, economic,
                social, cultural, and political. Devotees gather in great
                numbers in pilgrimages sites and shrines on particular sacred
                days which also becomes an opportunity of the merchants,
                traders, shopkeepers for business. These pilgrimage sites have
                evolved into a hub of exchange and a meeting place for
                socio-cultural networks.
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
            <div className="fifairspil-card-2">
              <img
                src={FIFairimg1}
                className="img img-responsive"
                alt="rarebook"
              />
              <div
                className="fifairspil-name"
                style={{ left: "80px", top: "215px" }}
              >
                <p>{t("Fairs")}</p>
              </div>
              <div className="fifairspil-username"></div>
              {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
              <Button
                className="fifairspil-icons"
                variant="outline-light"
                onClick={() => navigate(`${location.pathname}/fairs`)}
              >
              {t("Explore")}
              </Button>
            </div>
          </div>
          <div>
            {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
            <div className="fifairspil-card-2">
              <img
                src={FIFairimg2}
                className="img img-responsive"
                alt="rarebook"
              />
              <div
                className="fifairspil-name"
                style={{ left: "50px", top: "215px" }}
              >
                <p>{t("pilgrimages")}</p>
              </div>
              <div className="fifairspil-username"></div>
              <Button
                className="fifairspil-icons"
                variant="outline-light"
                onClick={() => navigate(`${location.pathname}/pilgrims`)}
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

export default FairsPilgrim;
