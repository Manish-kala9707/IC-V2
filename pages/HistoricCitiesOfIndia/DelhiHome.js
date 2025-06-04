import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Store/FetchApiData";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import HistoryCardDetails from "../../components/Card/HistoryCardDetails";

import DelhiHomeImg1 from "../../image/historic cities/delhihomeimg1.png";
import DelhiHomeImg2 from "../../image/historic cities/delhihomeimg2.png";
import DelhiHomeImg3 from "../../image/historic cities/delhihomeimg3.png";
import DelhiHomeImg4 from "../../image/historic cities/delhihomeimg4.png";
import DelhiHomeImg5 from "../../image/historic cities/delhihomeimg5.png";
import DelhiHomeImg6 from "../../image/historic cities/delhihomeimg6.png";
import DelhiHomeImg7 from "../../image/historic cities/delhihomeimg7.png";
import DelhiHomeImg8 from "../../image/historic cities/delhihomeimg8.png";
import "./DelhiHome.css";

function DelhiHome() {
  const { fetchedData, title, nid } = useContext(ContextData);

  const uniqueNidData = [
    ...new Map((fetchedData || []).map((item) => [item.nid, item])).values(),
  ];

  const navigate = useNavigate();
  const isDetailView = location.pathname.includes("title=");

  return (
    <>
      {isDetailView ? (
        uniqueNidData
          .filter((x) => x.nid == nid)
          .map((x) => (
            <HistoryCardDetails key={x.nid} detailData={x} title={title} />
          ))
      ) : (
        <>
          <Container className="dh-header">
            <Row>
              <Col>
                <h1>Delhi</h1>
              </Col>
            </Row>
          </Container>

          <Container className="dhcover">
            <Row className="justify-content-md-center">
              <Col>
                <p>
                  Delhi is no stranger to being at the centre of political power
                  and cultural innovation. With a history that spans millennia,
                  Delhi has appeared in mythology and legend, as well as in the
                  expansive accounts left behind by generations of rulers,
                  foreign emissaries, courtiers, poets, artists, and others who
                  have passed through this beautiful capital city on the banks
                  of the River Yamuna. Traces of this rich historical past are
                  still alive in the many monuments that continue to inhabit
                  corners of this bustling city.
                </p>
              </Col>
            </Row>
          </Container>

          <Container>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              speed={2000}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide
                onClick={() =>
                  navigate(`${location.pathname}/title=Central-Delhi/nid=2806410`)
                }
              >
                <img src={DelhiHomeImg1} alt="Mehrauli" />
                <div className="dhcaption">Central Delhi</div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() =>
                  navigate(`${location.pathname}/title=Nizamuddin/nid=2801323`)
                }
              >
                <img src={DelhiHomeImg2} alt="Mehrauli" />
                <div className="dhcaption">Nizzamuddin</div>
              </SwiperSlide>

              <SwiperSlide
                onClick={() =>
                  navigate(`${location.pathname}/title=Shahjahanabad/nid=2807785`)
                }
              >
                <img src={DelhiHomeImg3} alt="Mehrauli" />
                <div className="dhcaption">Sahjahanbad</div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() =>
                  navigate(`${location.pathname}/title=Mehrauli/nid=2790479`)
                }
              >
                <img src={DelhiHomeImg4} alt="Mehrauli" />
                <div className="dhcaption">North Delhi</div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() =>
                  navigate(`${location.pathname}/title=Mehrauli/nid=2790479`)
                }
              >
                <img src={DelhiHomeImg5} alt="Mehrauli" />
                <div className="dhcaption">Mehrauli</div>
              </SwiperSlide>
            </Swiper>
          </Container>

          <Container className="my-5">
            <Row className="justify-content-center">
              {[DelhiHomeImg6, DelhiHomeImg7, DelhiHomeImg8].map(
                (img, index) => (
                  <Col
                    key={index}
                    md={4}
                    sm={6}
                    className="mb-4 d-flex justify-content-center"
                  >
                    <div className="dhthumbnail-container">
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="dhimg-fluid"
                      />
                    </div>
                  </Col>
                )
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default DelhiHome;
