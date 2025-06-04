import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./InstagramGallery.css";
import { useTranslation } from "react-i18next";
 
const InstagramGallery = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [instagramPosts, setInstagramPosts] = useState([]);
 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <576);
    };
 
    checkMobile();
    window.addEventListener("resize", checkMobile);
 
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  // Fetch data from API
  useEffect(() => {
    fetch("https://icvtesting.nvli.in/rest-v1/instagram-post-api")
      .then((response) => response.json())
      .then((data) => {
        const posts = data.results.map((item) => ({
          url: extractHref(item.field_instagram_post_link),
          img: item.field_instagram_post_thumbnail,
          title: item.title,
        }));
        setInstagramPosts(posts);
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  }, []);
 
  // Extract clean href from anchor tag string
  const extractHref = (htmlString) => {
    const match = htmlString.match(/href="([^"]+)"/);
    return match ? match[1] : "#";
  };
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  return (
    <div className="instagram-section">
      <h5>{t("Instagram")}</h5>
 
      {isMobile ? (
        <Slider {...sliderSettings} className="instagram-slider" >
          {instagramPosts.map((post, index) => (
            <div className="insta" style={{width: "323px",
              display: "inline-block",marginRight:"13px"}}>
            <div className="insta-card"  key={index}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <img src={`http://icvtesting.nvli.in${post.img}`} alt={post.title} />
              </a>
            </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="instagram-scroll">
          {instagramPosts.map((post, index) => (
            <div className="insta-card" key={index}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <img src={`http://icvtesting.nvli.in${post.img}`} alt={post.title} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
 
export default InstagramGallery;
 
 