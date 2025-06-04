import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";
import FIGudhiBan from "../../image/FIGudhiBan.png";
import FIGudhiimg1 from "../../image/gudhiimg1.png";
import FIGudhiimg2 from "../../image/gudhiimg2.png";
import culinary from "../../image/festivalsImages/fes-12.png";
import Traditional from "../../image/festivalsImages/fest-13.png";
import sport from "../../image/festivalsImages/fest-14.png";
import myth from "../../image/festivalsImages/fest-15.png";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
function FestivalsOfIndiaDetails({ detailData }) {
  const [modalData, setModalData] = useState();
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractedData =
    detailData.field_dismarker &&
    detailData.field_dismarker
      .replaceAll("], [", "]*[")
      .split("*")
      .map((data) => {
        return JSON.parse(data);
      })
      .flat()
      .map(
        ({
          nid,
          title,
          body,
          field_galleryimage,
          field_categories_list,
          field_discover_image,
        }) => ({
          nid,
          title,
          body,
          field_galleryimage,
          field_categories_list,
          field_discover_image,
        })
      );

  const uniqueCategories = [
    ...new Set(
      extractedData &&
        extractedData.flatMap((item) => item.field_categories_list)
    ),
  ];

  console.log("Extracted Data:", extractedData);
  console.log("Unique Categories:", uniqueCategories);

  const parser = new DOMParser();
  const doc = parser.parseFromString(
    JSON.parse(detailData.field_pan_india_marker).results[0]
      .field_slider_images,
    "text/html"
  );
  const images = [...doc.querySelectorAll("img")].map((img) => ({
    src: img.getAttribute("src"),
    alt: img.getAttribute("alt"),
  }));

  const caliNaryModal = (data) => {
    const modalarray = extractedData.filter((modal) => {
      return modal.field_categories_list == data;
    });
    setModalData(modalarray);
    setShow(true);
  };

  console.log("modal", modalData);
  var settings = {
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const slides = [
    { img: FIGudhiimg1, title: "Culinary Traditions" },
    { img: FIGudhiimg1, title: "Culinary Traditions" },
    { img: FIGudhiimg1, title: "Culinary Traditions" },
    { img: FIGudhiimg1, title: "Culinary Traditions" },
    { img: FIGudhiimg2, title: "Performative Traditions" },
  ];

  return (
    <>
      <div className="parent">
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
          {images.map((data) => {
            return (
              <SwiperSlide
                onClick={() =>
                  navigate(
                    `${location.pathname}/title=${data.title}/nid=${data.nid}`
                  )
                }
              >
                <img
                  className="img-responsive"
                  src={`http://icvtesting.nvli.in${data.src}`}
                />
                <div
                  className="swipetext"
                  style={{ left: "100px", top: "100px" }}
                ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Container className="figudi-header">
        <Row>
          <Col>
            <h1>{detailData.title}</h1>
          </Col>
        </Row>
      </Container>
      <Container className="figudi-cover">
        <Row className="justify-content-md-center">
          <Col
            className="text-center"
            dangerouslySetInnerHTML={{ __html: detailData.body }}
          />

          <Col
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: JSON.parse(detailData.field_pan_india_marker).results[0]
                .body,
            }}
          />
        </Row>
      </Container>
      <Container fluid style={{ display: "flex", justifyContent: "center" }}>
        <Row>
          {uniqueCategories.map((data) => {
            if (data === "Cuisines") {
              return (
                <Col key={data}>
                  <div className="fibudaha-card-2">
                    <img
                      src={culinary}
                      className="culilary-image"
                      alt="Cuisines"
                    />
                    <div className="fibudaha-name">
                      <p>{t("Discover Culinary Traditions")}</p>
                    </div>
                    <div className="fibudaha-username"></div>
                    <Button
                      className="fibudaha-icons"
                      variant="outline-light"
                      onClick={() => caliNaryModal("Cuisines")}
                    >
                      {t("Explore")}
                    </Button>
                  </div>
                </Col>
              );
            } else if (data === "Myths and Legends") {
              return (
                <Col key={data}>
                  <div className="fibudaha-card-2">
                    <img
                      src={myth}
                      className="culilary-image"
                      alt="Myths and Legends"
                    />
                    <div className="fibudaha-name">
                      <p>{t("Discover Fairs and Pilgrimages")}</p>
                    </div>
                    <div className="fibudaha-username"></div>
                    <Button
                      className="fibudaha-icons"
                      variant="outline-light"
                      onClick={() => caliNaryModal("Myths and Legends")}
                    >
                      {t("Explore")}
                    </Button>
                  </div>
                </Col>
              );
            } else if (data === "Sport Tradition") {
              return (
                <Col key={data}>
                  <div className="fibudaha-card-2">
                    <img
                      src={sport}
                      className="culilary-image"
                      alt="Sport Tradition"
                    />
                    <div className="fibudaha-name">
                      <p>{t("Discover Sport Tradition")}</p>
                    </div>
                    <div className="fibudaha-username"></div>
                    <Button
                      className="fibudaha-icons"
                      variant="outline-light"
                      onClick={() => caliNaryModal("Sport Tradition")}
                    >
                      {t("Explore")}
                    </Button>
                  </div>
                </Col>
              );
            } else if (data === "Performative Tradition") {
              return (
                <Col key={data}>
                  <div className="fibudaha-card-2">
                    <img
                      src={Traditional}
                      className="culilary-image"
                      alt="Performative Tradition"
                    />
                    <div className="fibudaha-name">
                      <p>{t("Discover Performative Traditions")}</p>
                    </div>
                    <div className="fibudaha-username"></div>
                    <Button
                      className="fibudaha-icons"
                      variant="outline-light"
                      onClick={() => caliNaryModal("Performative Tradition")}
                    >
                      {t("Explore")}
                    </Button>
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </Container>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {modalData &&
              modalData.map((data, index) => (
                <Modal.Title
                  key={index}
                  onClick={() => setSelectedItem(data)}
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    color:
                      selectedItem?.title === data.title ? "blue" : "black",
                  }}
                >
                  {data.title}
                </Modal.Title>
              ))}
          </Modal.Header>
          <Modal.Body>
            {selectedItem ? (
              <div
                dangerouslySetInnerHTML={{ __html: selectedItem.body }}
              ></div>
            ) : (
              "Click on a title to see details"
            )}
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>{t("Close")}</button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default FestivalsOfIndiaDetails;
