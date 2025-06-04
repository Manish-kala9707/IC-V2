import React, { useContext } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardDetails from "../../../components/Card/CardDetails";
import Divider from "../../../image/SwirlDivider.png";
import Pagination2 from "../../../components/Pagination/Pagination2";
import InternalSearchCard from "../../../components/Card/InternalSearchCard";
import CounterCard from "../../../components/Card/CounterCard";
import Card from "../../../components/Card/Card";
import ErrorPage from "../../../components/Card/ErrorPage";
import TextilesStateDetails from "../TextilesState/TextilesStateDetails";
import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
import { ContextData } from "../../../pages/Store/FetchApiData";
 
const TextilesManufacture = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
 
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
 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
 
  return (
    <>
      {!response.ok ? (
        <ErrorPage response={response} />
      ) : (
        <div className="App">
          {location && !location?.pathname?.includes("title") && (
            <Container className="archive-header">
              <Row>
                <Col>
                  <h1>{t("Textiles Manufacture")}</h1>
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
 
          {location && location?.pathname?.includes("title") ? (
            fetchedData && fetchedData.length > 0 ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => <TextilesStateDetails key={x.nid} detailData={x} />)
            ) : (
              <ShimmerCardDetails />
            )
          ) : (
            <Container>
              <Row>
                <div className="textile-content">
                  <Carousel responsive={responsive}>
                    {fetchedData &&
                      fetchedData.map((data, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            navigate(`${location.pathname}/${data.title}`)
                          }
                          style={{
                            cursor: "pointer",
                            padding: "10px",
                            textAlign: "center",
                          }}
                        >
                          <Image
                            style={{
                              height: "400px",
                              width: "90%",
                              objectFit: "cover",
                            }}
                            src={`http://icvtesting.nvli.in${data.field_textile_category_image.trim()}`}
                          />
                          <h3 style={{ marginTop: "10px" }}>{data.title}</h3>
                        </div>
                      ))}
                  </Carousel>
                </div>
              </Row>
            </Container>
          )}
        </div>
      )}
    </>
  );
};
 
export default TextilesManufacture;
 
 



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination } from "swiper/modules";
// import { Navigation, Pagination } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./TextilesManufacture.css";

// const slides = [
//   {
//     title: "WEAVING",
//     image: "https://indianculture.gov.in/system/files/textilefile/Weaving.jpg",
//     description:
//       "In the process of weaving, the vertical or the warp thread is interlaced with the horizontal or the weft thread. Artisans in India produce a range of different kinds of weaves depending on the types of yarn, ways of interlacing, variety of designs and motifs etc. In this section, know details about the processes of weaving khadi fabrics, cotton and silk sarees, shawls, rugs and other textiles and apparel of India.",
//     link: "https://indianculture.gov.in/node/2790980",
//   },
//   {
//     title: "DYEING",
//     image: "https://indianculture.gov.in/system/files/textilefile/Dyeing_0.jpg",
//     description:
//       "The process of adding colours to yarns or textiles is referred to as dyeing. Various techniques are used to dye either the yarns before weaving or the fabric after weaving, using natural or synthetic dyes.",
//     link: "https://indianculture.gov.in/node/2791346",
//   },
//   {
//     title: "PRINTING",
//     image: "https://indianculture.gov.in/system/files/textilefile/Printing.jpg",
//     description:
//       "Printing is one of the ways of decorating textiles practiced in different parts of India. It is a process of obtaining designs on a piece of textile with the help of dyes and a printing tool like a carved wooden block.",
//     link: "https://indianculture.gov.in/node/2793031",
//   },
//   {
//     title: "PAINTING",
//     image: "https://indianculture.gov.in/system/files/textilefile/Painting_0.jpg",
//     description:
//       "Textile painting is an art requiring immense patience and skill. Different methods are used to carefully paint the woven textiles using fine tools and vibrant colours.",
//     link: "https://indianculture.gov.in/node/2791313",
//   },
//   {
//     title: "EMBROIDERY",
//     image: "https://indianculture.gov.in/system/files/textilefile/Embroidery.jpg",
//     description:
//       "Techniques of making fine designs on textiles using needles, threads, beads, mirror pieces, sequins and others are known as embroidery.",
//     link: "https://indianculture.gov.in/node/2791344",
//   },
// ];

// const TextileTimeline = () => {
//   return (
//     <div className="timeline-container">
//       <Swiper
//         direction="vertical"
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             return `<div class="${className}"><img src="${slides[index].image}" alt="${slides[index].title}" class="thumb-img"/>${slides[index].title}</div>`;
//           },
//         }}
//         navigation
//         modules={[Pagination, Navigation]}
//         className="swiper-container-vertical"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide
//             key={idx}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               height: "600px",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="swiper-slide-content">
//               <h4 className="timeline-title">{slide.title}</h4>
//               <p className="timeline-text">{slide.description}</p>
//               <p className="timeline-text">
//                 <a href={slide.link} className="btn btn-info" target="_blank" rel="noopener noreferrer">
//                   Explore
//                 </a>
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default TextileTimeline;
