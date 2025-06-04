
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faEye } from "@fortawesome/free-solid-svg-icons";
import UnderConst from "../UnderConst";
import ShimmersUiCard from "./ShimmersUiCard";
import ErrorPage from "./ErrorPage";

const Card = ({ search_results,field_pdf_digital_file_1,response}) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const location = useLocation();

 
  function limitTitleLength(title, wordLimit) {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  }

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext("2d");
    context.drawImage(new Image(), 0, 0);
    canvas.toDataURL("image/webp").startsWith("data:image/webp") &&
      setSupportsWebP(true);
  }, []);
  let display;

    if(search_results.length>0){
      display = search_results.map((x, index) => {
        const {
          nid,
          title,
          field_dc_type,
          field_pdf_digital_file_1,
          field_digital_image_file,
          field_unesco_data_thumbnail,
          field_forts_of_india_thumbnail,
          field_story_image,
          field_snippets_thumbnail,
          field_museums_images,
          field_hc_city_capsule_images,
          field_thumnail_images,
          field_painting_portfolio_thumbna,
          field_thumbnail_image,
          field_thumbnail_images,
          field_food_category_image,
          field_cuisine_thumbnail,
          field_cuisines_of_india_category,
          field_ich_category_thumbnail,
          field_musical_instrument_cat_ima,
          field_unesco_category_thumbnail,
          field_jewellery_thumbnail
        } = x;

        let imagePath = "";
        let fullPaths = "";

        if (field_pdf_digital_file_1) {
          const srcRegex = /src="([^"]+)"/;
          const match = field_pdf_digital_file_1.match(srcRegex);
          if (match && match.length > 1) {
            const fullPath = match[1];
            const parts = fullPath.split(".");
            parts.pop();
            imagePath = parts.join(".");
            fullPaths = match[1];
          }
        }

        const cardContent = (imgSrc) => (
          <div>
          <Link to={`${location.pathname}/${title.toLowerCase().replace(/\s+/g, "-").replaceAll(",","")
            }`} key={nid}>
            <div className="news-card">
              <img
                variant="top images"
                className="news-card__image"
                src={imgSrc}
              />
              
              <div className="news-card__text-wrapper">
                <h2 className="news-card__title" dangerouslySetInnerHTML={{ __html: limitTitleLength(title, 10) }} />
                <div className="news-card__details-wrapper">
                  <a href="#" className="news-card__read-more">View <i className="fa fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
          </Link>
          </div>
        );

        return (
          <React.Fragment key={index}>
            { location.pathname.includes("painting-collections/paintings") && !location.pathname.includes("painting-collections/museum-paintings") &&  cardContent(`http://icvtesting.nvli.in${field_painting_portfolio_thumbna}`)}
            {location.pathname.includes("painting-collections/museum-paintings")  &&  cardContent(`http://icvtesting.nvli.in${field_digital_image_file}`)}
            { location.pathname.includes("forts-of-india/rarebooks") &&  cardContent(`http://icvtesting.nvli.in${field_pdf_digital_file_1.match(/src="([^"]+)"/)[1]}`)}
            { location.pathname.includes("forts-of-india/tales-of-forts") &&  cardContent(`http://icvtesting.nvli.in${field_forts_of_india_thumbnail}`)}
            { location.pathname.includes("forts-of-india/discovering-the-forts-of-india") &&  cardContent(`http://icvtesting.nvli.in${field_forts_of_india_thumbnail}`)}
            { location.pathname.includes("forts-of-india/fortsandthefreedomstruggle") &&  cardContent(`http://icvtesting.nvli.in${field_forts_of_india_thumbnail}`)}
            { location.pathname.includes("digital-district-repository") && !field_thumnail_images &&  cardContent(`http://icvtesting.nvli.in${field_thumbnail_image}`)}
            { location.pathname.includes("food-and-culture")&& !field_cuisines_of_india_category && !field_cuisine_thumbnail  && cardContent(`http://icvtesting.nvli.in${field_food_category_image}`)}
            { location.pathname.includes("digital-district-repository") && !field_thumbnail_image && cardContent(`http://icvtesting.nvli.in${field_thumnail_images}`)}
            { location.pathname.includes("food-and-culture/cuisines-of-india") && !field_cuisine_thumbnail && field_cuisines_of_india_category && cardContent(`http://icvtesting.nvli.in${field_cuisines_of_india_category}`)}
            { location.pathname.includes("/food-and-culture/evolution-of-indian-gastronomy")&& !field_cuisines_of_india_category && field_cuisine_thumbnail && cardContent(`http://icvtesting.nvli.in${field_cuisine_thumbnail}`)}
            {location.pathname.includes("food-and-culture/timeless-recipes") && !field_cuisine_thumbnail && field_cuisines_of_india_category && cardContent(`http://icvtesting.nvli.in${field_cuisines_of_india_category}`)}
            {location.pathname.includes("intangible-cultural-heritage")  && cardContent(`http://icvtesting.nvli.in${field_ich_category_thumbnail}`)}
            {location.pathname.includes("musical-instruments-of-india")  && cardContent(`http://icvtesting.nvli.in${field_musical_instrument_cat_ima}`)}
            {location.pathname.includes("unesco")  && field_unesco_category_thumbnail  && cardContent(`http://icvtesting.nvli.in${field_unesco_category_thumbnail}`)}
            {location.pathname.includes("jewelleryOfTheNizams")  && field_jewellery_thumbnail  && cardContent(`http://icvtesting.nvli.in${field_jewellery_thumbnail}`)}
          </React.Fragment>
  
        );
      })
    }
    else{
      
      display =<ShimmersUiCard/>;
    }
  
  return <>{display}</>;
};

export default Card;

