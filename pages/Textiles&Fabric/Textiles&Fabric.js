import './Textiles&Fabrics.css'; 
import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import image1 from "../../image/textiles/Artisans.jpg";
import image2 from "../../image/textiles/Fort_William,_Calcutta,_1735.jpg";
import image3 from "../../image/textiles/Gloossary.jpg";
import image4 from "../../image/textiles/Historyyyy.jpg";
import image5 from "../../image/textiles/Manufacturing.jpg";
import image6 from "../../image/textiles/Museums.jpg";
import image7 from "../../image/textiles/TextileTales1.jpg";
import image8 from "../../image/textiles/Textiles.jpg";
import image9 from "../../image/textiles/TextilesArtefacaaats.jpg";
import image10 from "../../image/textiles/Woman with Charkha.jpg";
import image11 from "../../image/textiles/typeimage-min.jpg";
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useTranslation } from 'react-i18next';

const TextilesGallery = () => {
  const {t}=useTranslation()
  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
const navigate=useNavigate()
const location=useLocation()
  const images = [
{ src: image1, detail: 'Detail about image 1', title: 'Artisans', description: 'This section highlights the skills of the artisans and their families who have been associated with the production and decoration of textiles and fabrics in different regions of India. It talks about their history, heritage, and stories of their craft.' },
{ src: image2, detail: 'Detail about image 2', title: 'Trade', description: 'This section takes a deep dive into the textile trade and exchange which took place during different periods of Indian History i.e. Ancient, Medieval, Modern and Contemporary. Find out essays that discuss Indian textile production and trade with different regions of the world throughout history.' },
{ src: image3, detail: 'Detail about image 3', title: 'Glossary', description: 'Familiarise yourself with complex textile terminologies in this section to become an expert!' },
{ src: image4, detail: 'Detail about image 4', title: 'history', description: 'Textiles have a very long history in India going back to the ancient period. Through timelines and essays, get to know the interesting events in the history of textiles and fabrics in India.' },
{ src: image5, detail: 'Detail about image 5', title: 'manufacturing-process', description: 'Ever wondered how weaving is done on handlooms or how is a fabric printed and dyed? Find out the manufacturing techniques of different kinds of textiles in this section through interesting videos.' },
{ src: image6, detail: 'Detail about image 6', title: 'Textiles-from-museum', description: 'In this section, find rare images of Indian textiles and fabrics which are displayed in Indian Museums, from different periods in Indian history.' },
{ src: image7, detail: 'Detail about image 7', title: 'textilestales', description: 'This section brings to you stories associated with the textile craft in India, the techniques, the people and the communities. Watch and experience these stories to deeply connect with the textile tradition of India.' },
{ src: image8, detail: 'Detail about image 8', title: 'Textiles-and-fabrics-of-indian-state', description: 'In this section, navigate through a map to find diverse textiles of all the Indian states. Also, find rare images and videos of Indian textiles and fabrics here.' },
{ src: image9, detail: 'Detail about image 9', title: 'artifact', description: 'In this section, witness rare belongings of Kings, Queens, Nobles and other important personalities. Find out their costumes, wall hangings, coverlets and much more. ' },
{ src: image10, detail: 'Detail about image 10', title: 'freedom-movement-and-textiles', description: 'In this section, explore how textiles and fabrics had become symbols of resistance against the British during the Freedom movement in India.' },
{ src: image11, detail: 'Detail about image 11', title: 'type-of-textiles', description: 'In this section, a range of textiles is presented, credited to ancient techniques and specific to each region of India. Get to know different types of woven, dyed, printed, painted and embroidered textiles of India. ' }
]

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle - (360 / images.length));
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 300);
  };

  return (
    <div className="gallery-container">
       <Row>       <h1>{t("Textiles and Fabrics of India")}</h1>
       <div class="col pt-3">
              <div class="line-with-dspace">
                <div class="linedpsace"></div>
              </div>
            </div></Row>
      <Row>
        
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
                            onClick={() => navigate(`${location.pathname}/${data.title}`)}
                            >
                              <img className="img-responsive" src={data.src} />
                              <div
                                className="swipetext"
                                style={{ left: "130px", top: "300px" }}
                              >
                                <p style={{ fontSize: "20px" }}>
                                  <b>{data.title}</b>
                                </p>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
      </Row>
      
  
    </div>
  );
};

export default TextilesGallery;
