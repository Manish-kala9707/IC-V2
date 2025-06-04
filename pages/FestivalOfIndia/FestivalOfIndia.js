import React from "react";
import "./FestivalsOfIndia.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SwrilDivider from "../../components/SwrilDivider";
import FesIndiBan from "../../image/FesIndiBan.png";
import IndiaMap from "./IndiaMap";

import { Swiper, SwiperSlide } from "swiper/react";
// install swiper.js npm i swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper styles

import FIimg1 from "../../image/fig2.webp";
import FIimg2 from "../../image/fig3.webp";
import FIimg3 from "../../image/fig4.webp";
import FIimg4 from "../../image/fig5.webp";
import FIimg5 from "../../image/fig2.webp";

import FIimg6 from "../../image/fesimg1.png";
import FIimg7 from "../../image/fesimg2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* import FFimg1 from '../image/ffimg1.png';
import FFimg2 from '../image/ffimg2.png'; */

function FestivalsOfIndia() {
  const navigate = useNavigate();
  const location = useLocation();
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

  const { t } = useTranslation();
  //slider end here
  return (
    <>
      <div className="festindia-parent-container">
        <img src={FesIndiBan} className="festindia-banner" alt="Free Banner" />
      </div>

      <Container className="festindia-header">
        <Row>
          <Col>
            <h1>{t("Festivals of India")}</h1>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>
      <Container className="festindia-cover">
        <Row className="justify-content-md-center">
          <Col>
            {location.pathname.includes("lang=hi") ? (
              <p>
                भारत के त्यौहारों का अनुभव करना भारतीय सांस्कृतिक विरासत की
                भव्यता और समृद्धि का अनुभव करना है। भारत के त्यौहार विविधता की
                संस्कृति में पनपते हैं, और इन त्यौहारों का उत्सव पार-सांस्कृतिक
                आदान-प्रदान का समय बन गया है। अनुष्ठानों, संगीत, प्रदर्शनों, पाक
                व्यंजनों और बहुत कुछ से भरा हुआ, प्रत्येक त्यौहार अपना आकर्षक
                इतिहास और अनूठा आकर्षण प्रस्तुत करता है। त्यौहारों के साथ
                रीति-रिवाजों, परंपराओं और कहानियों की एक बड़ी विविधता भी जुड़ी
                हुई है।
              </p>
            ) : (
              <p>
                To experience the festivals of India is to experience the
                grandeur and richness of the Indian cultural heritage. The
                festivals of India thrive in a culture of diversity, and the
                celebration of these festivals has become a time for
                cross-cultural exchanges. Filled with rituals, music,
                performances, culinary treats, and more, each festival presents
                its own fascinating history and unique charm. A large diversity
                of customs, traditions, and tales are also associated with
                festivals.
              </p>
            )}
            {location.pathname.includes("lang=hi") ? (
              <p>
                सांस्कृतिक विविधता, रीति-रिवाजों और परंपराओं के बारे में जानें,
                साथ ही नीचे दी गई श्रेणियों में प्रस्तुत त्योहारों से जुड़ी
                दिलचस्प कहानियों के बारे में जानें, या मानचित्र पर क्लिक करके या
                अपना पसंदीदा त्योहार ढूंढकर राज्यों के जीवंत त्योहारों का पता
                लगाएं।
              </p>
            ) : (
              <p>
                Learn about the cultural diversity, customs and traditions, as
                well as the fascinating stories associated with the festivals
                presented in the categories below, or explore the vibrant
                festivals of the states by clicking on the map or finding your
                favourite festival.
              </p>
            )}
          </Col>
        </Row>
      </Container>

      <Container>
        <div class="festindia-grid-container">
          <div
            class="festindia-grid-item"
            id="pan-india"
            onClick={() => navigate(`${location.pathname}/pan-india-festivals`)}
          >
            <div class="festindia-overlay">{t("Pan India Festivals")}</div>
          </div>
          <div
            class="festindia-grid-item"
            id="folk"
            onClick={() => navigate(`${location.pathname}/folk-festivals`)}
          >
            <div class="festindia-overlay">{t("Folk Festivals")}</div>
          </div>
          <div
            class="festindia-grid-item"
            id="tribal"
            onClick={() => navigate(`${location.pathname}/tribal-fest`)}
          >
            <div class="festindia-overlay">{t("Tribal Festivals")}</div>
          </div>
          <div
            class="festindia-grid-item"
            id="fairs"
            onClick={() => navigate(`${location.pathname}/fairs-piligrimages`)}
          >
            <div class="festindia-overlay">{t("Fairs & Pilgrimages")}</div>
          </div>
        </div>
      </Container>

      <Container className="festindia-header">
        <Row>
          <Col>
            <h1>{t("Journey Through State Festivals")}</h1>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>

      <Container className="festindia-cover">
        <Row className="justify-content-md-center">
          <Col>
            {location.pathname.includes("lang=hi") ? (
              <p>
                विभिन्न राज्यों में मनाए जाने वाले विविध त्योहारों को देखने के
                लिए मानचित्र पर जाएँ। प्रत्येक क्लिक पर अद्वितीय और रंगीन
                उत्सवों का पता चलता है, जो प्रत्येक राज्य की सांस्कृतिक विरासत
                और स्थानीय रीति-रिवाजों की झलक पेश करते हैं।
              </p>
            ) : (
              <p>
                Navigate through the map to explore the diverse festivals
                celebrated across various states. Each click reveals unique and
                colorful celebrations, offering a glimpse into the cultural
                heritage and local customs that distinguish each state.
              </p>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <IndiaMap />
      </Container>

      <Container className="festindia-headerr">
        <Row>
          <Col>
            <h1>{t("Photo Essays")}</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>

      {/* swiper 3d slider start here */}
      <Container>
        {/* </Swiper>  */}
        {/* New slider */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="img-responsive" src={FIimg1} />
            <div className="swipetext" style={{ left: "220px", top: "450px" }}>
              <p>{t("Sufi Basant")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={FIimg2} />
            <div className="swipetext" style={{ left: "200px", top: "450px" }}>
              <p>{t("Onam")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={FIimg3} />
            <div className="swipetext" style={{ left: "120px", top: "450px" }}>
              <p>{t("Pushkar Mela")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={FIimg4} />
            <div className="swipetext" style={{ left: "120px", top: "450px" }}>
              <p>{t("Sufi Basant")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={FIimg5} />
            <div className="swipetext" style={{ left: "120px", top: "450px" }}>
              <p>{t("Onam")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>

      <Container fluid className="festindia-bg">
        <Container className="festindia-headerr">
          <Row>
            <Col>
              {location.pathname.includes("lang=hi") ? (
                <h1>त्यौहारों के बारे में अधिक जानें</h1>
              ) : (
                <h1>know more about festivals</h1>
              )}
              <SwrilDivider />
            </Col>
          </Row>
        </Container>

        {/* <article class="festindia-video-sec-wrap">
                    <div class="festindia-video-sec">
                        <ul class="festindia-video-sec-middle" id="vid-grid">
                            <li class="festindia-thumb-wrap"><a href="">
                                <img class="festindia-thumb" src="https://images.unsplash.com/photo-1555661225-ade1bbf3fbb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80" alt="" />
                                <div class="festindia-thumb-info">
                                    <p class="festindia-thumb-title">Festivals Framed</p>

                                </div>
                            </a></li>
                            <li class="festindia-thumb-wrap"><a href="">
                                <img class="festindia-thumb" src="https://images.unsplash.com/photo-1566075247408-2fc9e74810d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                                <div class="festindia-thumb-info">
                                    <p class="festindia-thumb-title">Literature of Festivals</p>


                                </div>
                            </a></li>
                        </ul>
                    </div>
                </article> */}

        <div className="neamain-image-container neamain-beige-bg">
          <div class="neamain-image-item">
            <img src={FIimg6} alt="Image 1" />
            <div class="neamain-caption">
              {t("Glimpses of North-East India")}
            </div>
          </div>
          <div class="neamain-image-item">
            <img src={FIimg7} alt="Image 2" />
            <div class="neamain-caption">
              {t("Tetseo Sisters: A Conversation")}
            </div>
          </div>
        </div>

        <Container>
          <div class="festindia-error">
            <div class="festindia-error__titlee">{t("Disclaimer")}: &nbsp;</div>
            <div class="festindia-error__title">
              {" "}
              {location.pathname.includes("lang=hi") ? (
                <p>
                  कृपया ध्यान दें कि प्रदान की गई सामग्री व्यापक नहीं है और केवल
                  समग्र जानकारी के एक विशिष्ट भाग को ही कवर करती है।
                </p>
              ) : (
                <p>
                  Please be informed that the content provided is not
                  comprehensive and only covers a specific section of the
                  overall information.
                </p>
              )}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default FestivalsOfIndia;
