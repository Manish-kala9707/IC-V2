
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faEye } from "@fortawesome/free-solid-svg-icons";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import ErrorPage from "../../components/Card/ErrorPage";
const GlobalCard = ({
  search_results,
  field_pdf_digital_file_1,
  response,
  items_per_page,
  total_items,
}) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const location = useLocation();
  function limitTitleLength(title, wordLimit) {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  }

  console.log("search_results:", search_results);
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext("2d");
    context.drawImage(new Image(), 0, 0);
    canvas.toDataURL("image/webp").startsWith("data:image/webp") &&
      setSupportsWebP(true);
  }, []);
  console.log("search resultssss", search_results);
  let display;
  if (search_results.length > 0) {
    display = search_results.map((x, index) => {
      const {
        nid,
        type,
        title,
        field_pdf_digital_file_1,
        field_digital_image_file,
        field_unesco_data_thumbnail,
        field_forts_of_india_thumbnail,
        field_story_image,
        field_snippets_thumbnail,
        field_thumnail_images,
        field_video_streaming_url_1,
        field_pdf_digital_file_2,
        field_painting_portfolio_thumbna,
        field_thumbnail_image,
        field_food_category_image,
        field_cuisine_thumbnail,
        field_cuisines_of_india_category,
        field_ich_image_files,
        field_instrument_image,
        field_unesco_category_thumbnail,
        field_jewellery_thumbnail,
        field_photo_essays_image,
        field_photo_essay_thumbnail,
        field_timeless_image_gallery,
        field_timelesstrend_thumbnail,
        field_ajanta_category_thumbnail,
        field_textile_category_image,
        field_textile_content_image,
        field_ic_video_streaming_url_1,
        field_textile_map_image,
      } = x;
      const cardContent = (imgSrc) => (
        <div>
          <Link
            to={`${location.pathname}/title=${title.replace(
              /\s+/g,
              "_"
            ).replaceAll("&#039","-")}/nid=${nid}`}
            key={nid}
          >
            <div className="news-card">
              <img
                variant="top images"
                className="news-card__image"
                src={imgSrc}
              />
              <div className="news-card__text-wrapper">
                <h2
                  className="news-card__title"
                  dangerouslySetInnerHTML={{
                    __html: limitTitleLength(title, 10),
                  }}
                />
                <div className="news-card__details-wrapper">
                  <a href="#" className="news-card__read-more">
                    View <i className="fa fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
      return (
        <React.Fragment key={index}>
          {type==="Digital Records" && field_pdf_digital_file_1 &&
            cardContent(`https://icvtesting.nvli.in${field_pdf_digital_file_1}`)} 
             {type==="Digital Records" && field_digital_image_file &&
            cardContent(`https://icvtesting.nvli.in${field_digital_image_file.split(",")[0]}`)} 
        </React.Fragment>
      );
    });
  } else {
    display = <ShimmersUiCard />;
  }
  return <>{display}</>;
};
export default GlobalCard;

