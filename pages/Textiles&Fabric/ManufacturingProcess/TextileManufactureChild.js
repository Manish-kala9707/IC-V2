// import React, { useContext, useState, useEffect } from "react";
// import { Tabs, Tab } from "react-bootstrap";
// import { ContextData } from "../../../pages/Store/FetchApiData";
// import { Col, Container, Row, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { useTranslation } from "react-i18next";

// const TextileManufactureChild = () => {
//   const { fetchedData, images, navigate } = useContext(ContextData);

//   const [key, setKey] = useState("0");
//   const [tabData, setTabData] = useState([]);

//   useEffect(() => {
//     if (fetchedData && Array.isArray(fetchedData)) {
//       setTabData(fetchedData);
//     }
//   }, [fetchedData]);
//   const location = useLocation();

//   return (
//     <div>
//       <Tabs
//         id="pan-india-tabs"
//         activeKey={key}
//         onSelect={(k) => setKey(k)}
//         className="mb-3"
//       >
//         {tabData.length > 0 &&
//           tabData.map((item, index) => (
//             <Tab
//               eventKey={index.toString()}
//               title={item.title || `Tab ${index + 1}`}
//               key={index}
//             >
//               <div style={{ padding: "1rem" }}>
//                 {/* Video Section */}
//                 {item.field_feb_video && (
//                   <video
//                     src={item.field_feb_video}
//                     controls
//                     controlsList="nodownload"
//                     disablePictureInPicture
//                     onContextMenu={(e) => e.preventDefault()}
//                     style={{
//                       display: "block",
//                       width: "100%",
//                       borderRadius: "8px",
//                       border: "2px solid white",
//                       marginBottom: "1rem",
//                     }}
//                   />
//                 )}

//                 <Swiper
//                   effect={"coverflow"}
//                   grabCursor={true}
//                   centeredSlides={true}
//                   slidesPerView={"auto"}
//                   loop={true}
//                   coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 3,
//                     slideShadows: true,
//                   }}
//                   autoplay={{
//                     delay: 1200,
//                     disableOnInteraction: false,
//                   }}
//                   speed={2000}
//                   pagination={true}
//                   modules={[EffectCoverflow, Pagination, Autoplay]}
//                   className="mySwiper"
//                 >
//                   {images.map((data) => {
//                     return (
//                       <SwiperSlide
//                         onClick={() =>
//                           navigate(
//                             `${location.pathname}/title=${data.title}/nid=${data.nid}`
//                           )
//                         }
//                       >
//                         <img
//                           className="img-responsive"
//                           src={`http://icvtesting.nvli.in${data.field_feb_image}`}
//                         />
//                         <div
//                           className="swipetext"
//                           style={{ left: "100px", top: "100px" }}
//                         ></div>
//                       </SwiperSlide>
//                     );
//                   })}
//                 </Swiper>

//                 {/* HTML Body Content */}
//                 {item.body && (
//                   <div dangerouslySetInnerHTML={{ __html: item.body }} />
//                 )}
//               </div>
//             </Tab>
//           ))}
//       </Tabs>
//     </div>
//   );
// };

// export default TextileManufactureChild;








import React, { useContext, useState, useEffect } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { ContextData } from "../../../pages/Store/FetchApiData";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

const TextileManufactureChild = () => {
  const { fetchedData, images, } = useContext(ContextData);
  const [key, setKey] = useState("0");
  const [tabData, setTabData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  
  const extractVideoSrc = (htmlString) => {
    if (!htmlString) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const anchor = doc.querySelector("a");
    return anchor?.getAttribute("href") || "";
  };
  useEffect(() => {
    if (fetchedData && Array.isArray(fetchedData)) {
      setTabData(fetchedData);
    }
  }, [fetchedData]);

  return (
    <div>
      <Tabs
        id="pan-india-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {fetchedData.length > 0 &&
          fetchedData.map((item, index) => (
            <Tab
              eventKey={index.toString()}
              title={item.title || `Tab ${index + 1}`}
              key={index}
            >
              <div style={{ padding: "1rem" }}>
                {/* Video Section */}
                {item.field_feb_video && (
                  <video
                  src={extractVideoSrc(item.field_feb_video)}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                      display: "block",
                      width: "50%",
                      borderRadius: "8px",
                      border: "2px solid white",
                      marginBottom: "1rem",
                    }}
                  />
                )}

                {/* Image Swiper Section */}
                {/* {Array.isArray(images) && images.length > 0 && (
                  <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
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
                    {images.map((data, i) => (
                      <SwiperSlide
                        key={i}
                        onClick={() =>
                          navigate(
                            `${location.pathname}/title=${data.title}/nid=${data.nid}`
                          )
                        }
                      >
                        <img
                          className="img-responsive"
                          src={`http://icvtesting.nvli.in${data.field_feb_image}`}
                          alt={data.title || "Image"}
                        />
                        <div
                          className="swipetext"
                          style={{ left: "100px", top: "100px" }}
                        ></div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )} */}

                {/* HTML Body Content */}
                {item.body && (
                  <div dangerouslySetInnerHTML={{ __html: item.body }} />
                )}
              </div>
            </Tab>
          ))}
      </Tabs>
    </div>
  );
};

export default TextileManufactureChild;
