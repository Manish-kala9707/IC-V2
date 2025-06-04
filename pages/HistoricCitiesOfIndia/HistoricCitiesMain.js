import { useEffect, React, useState, lazy, Suspense, useContext } from "react";
import { useLocation, Link, Navigate, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HistoricCities.css";
import { ContextData } from "../Store/FetchApiData";
import SwrilDivider from "../../components/SwrilDivider";
// Glider.js npm i glider-js
import "glider-js/glider.min.css";
import Glider from "glider-js";
import HistoryCardDetails from "../../components/Card/HistoryCardDetails";
// install font awesome npm install @fortawesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
// npm install @fortawesome/free-solid-svg-icons
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import Card from "../../components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Delhi from "../../image/historic cities/Delhi.jpeg";
import Lucknow from "../../image/historic cities/Lucknnow.jpeg";
import Ahmedabad from "../../image/historic cities/Jama_Masjid_Ahmedabad_heritage.jpg";
import Thanjavur from "../../image/historic cities/ThanjavurThumbnail_0.jpg";
import Varanasi from "../../image/historic cities/Varanasi_1_1.jpg";
import Bhopal from "../../image/historic cities/bhopal-new_0.jpg";
import Kolkata from "../../image/historic cities/kolkata.jpg";
import Madurai from "../../image/historic cities/madurai-img.jpg";
import Patna from "../../image/historic cities/patna.jpeg";
import timeline from "../../image/historic cities/WHAT CONNECTS THESE CITIES (1) (1).png";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import CityCapsules from "./CityCapsules";

function HistoricCities() {
  const cities = [
    { img: Lucknow, title: "Lucknow", nid: 2787454 },
    { img: Ahmedabad, title: "Ahmedabad", nid: 2761081 },
    { img: Thanjavur, title: "Thanjavur", nid: 2790169 },
    { img: Varanasi, title: "Varanasi", nid: 2790202 },
    { img: Bhopal, title: "Bhopal", nid: 2945975 },
    { img: Kolkata, title: "Kolkata", nid: 2871266 },
    { img: Madurai, title: "Madurai", nid: 2989465 },
    { img: Patna, title: "Patna", nid: 2790317 },
  ];

  console.log(cities);

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
  useEffect(() => {
    const gliderElement = document.querySelector(".glider");

    // Check if the element exists before initializing Glider
    if (gliderElement) {
      new Glider(gliderElement, {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".dots",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.1,
              slidesToScroll: 1,
              duration: 0.8,
              arrows: {
                prev: ".glider-prev",
                next: ".glider-next",
              },
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4.1,
              slidesToScroll: 1,
              duration: 0.8,
              arrows: {
                prev: ".glider-prev",
                next: ".glider-next",
              },
            },
          },
        ],
      });
    }
  }, []);

  // BacktoPrevious page
  /*    const backtopre = () => {
           window.open('/', '_parent');
       } */
  const location = useLocation();

  const [showOnlyCard, setshowOnlyCard] = useState();

  const urlarray = location?.pathname?.split("/");
  const isHindi = urlarray.filter((element) => element === "hi");

  const uniqueNidData = [
    ...new Map(
      fetchedData && fetchedData.map((item) => [item.nid, item])
    ).values(),
  ];

  const handleCard = () => {
    navigate(`${location.pathname}/all-cities`);
  };
  return (
    <>
      {!location.pathname.includes("title")&&!location.pathname.includes("read") &&
                !location.pathname.includes("see") &&
                !location.pathname.includes("glimpse") && (
        <Container className="hc-header">
          <Row>
            <Col>
              <h4>Historic cities of India</h4>
              <SwrilDivider />
            </Col>
          </Row>
        </Container>
      )}
      {!location.pathname.includes("title") && (
        <Container className="hccover">
          <Row className="justify-content-md-center">
            {!location.pathname.includes("read") &&
              !location.pathname.includes("see") &&
              !location.pathname.includes("glimpse") && (
                <Col>
                  <p>
                    The map of India is dotted with cities that so many of us
                    call home. Many of these cities have origins in our
                    collective history. While they may now be modern and dynamic
                    centres, they continue to represent centuries of culture and
                    heritage that even today, sets them apart from every other
                    city across the globe. Explore these unique urban centres
                    and everything that they have to offer at your own pace,
                    through a virtual expedition. Click on the icons to the
                    right to begin a virtual visit to these historic cities!
                    Each city has its own story, one that is told here through a
                    collection of rare photographs, multimedia,
                    specially-narrated tales, and more. We invite you to sift
                    through them, explore, and discover your own favourite
                    stories about every city.
                  </p>
                </Col>
              )}

            {!location.pathname.includes("read") &&
              !location.pathname.includes("see") &&
              !location.pathname.includes("glimpse") && (
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
                  {cities.map((data) => {
                    return (
                      <SwiperSlide
                        onClick={() =>
                          navigate(
                            `${location.pathname}/title=${data.title}/nid=${data.nid}`
                          )
                        }
                      >
                        <img className="img-responsive" src={data.img} />
                        <div
                          className="swipetext"
                          style={{ left: "130px", top: "300px" }}
                        >
                          <p style={{ fontSize: "30px" }}>
                            <b>{data.title}</b>
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <SwiperSlide
                    onClick={() => navigate(`${location.pathname}/delhi`)}
                  >
                    <img className="img-responsive" src={Delhi} />
                    <div
                      className="swipetext"
                      style={{ left: "130px", top: "300px" }}
                    >
                      <p style={{ fontSize: "30px" }}>
                        <b>{"delhi"}</b>
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )}
          </Row>
        </Container>
      )}

      <section>
        <div className="hc-section " id="section-2">
          {location.pathname.includes("title") ? (
            uniqueNidData && uniqueNidData.length > 0 ? (
              uniqueNidData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  return (
                    <HistoryCardDetails
                      key={x.nid}
                      detailData={x}
                      title={title}
                    />
                  );
                })
            ) : (
              <ShimmerCardDetails />
            )
          ) : (
            <>
              {location.pathname.includes("all-cities") ? (
                <div className="page-content">
                  <Suspense
                    fallback={
                      <div>
                        <ShimmersUiCard />
                      </div>
                    }
                  >
                    <Card
                      page="/"
                      search_results={uniqueNidData}
                      className="page-content"
                    />
                  </Suspense>
                </div>
              ) : (
                !location.pathname.includes("read") &&
                !location.pathname.includes("see") &&
                !location.pathname.includes("glimpse") && (
                  <Container
                    style={{
                      width: "100%",
                      maxWidth: "1440px",
                      margin: "0 auto",
                    }}
                  ></Container>
                )
              )}
            </>
          )}

          {(location.pathname.includes("read") ||
            location.pathname.includes("see") ||
            location.pathname.includes("glimpse")) && <CityCapsules />}
        </div>
      </section>
      {!location.pathname.includes("title") &&
        !location.pathname.includes("read") &&
        !location.pathname.includes("see") &&
        !location.pathname.includes("glimpse") && (
          <img src={timeline} className="img-responsive"></img>
        )}
    </>
  );
}

export default HistoricCities;
