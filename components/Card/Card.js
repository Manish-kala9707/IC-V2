import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ShimmersUiCard from "./ShimmersUiCard";
import "./Card.css";
import { useTranslation } from "react-i18next";
const Card = ({ search_results }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [supportsWebP, setSupportsWebP] = useState(false);
  const location = useLocation();

  function limitTitleLength(title, wordLimit) {
    const words = title.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : title;
  }

  const handleRedirect = (title, nid) => {
    const path = `${location.pathname}/title=${title
      .replace(/\s+/g, "_")
      .replaceAll("&#039", "-")}/nid=${nid}`;
    navigate(path);
  };

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.toDataURL("image/webp").startsWith("data:image/webp") &&
      setSupportsWebP(true);
  }, []);

  let display;

  if (search_results.length > 0) {
    display = search_results.map((x, index) => {
      const {
        nid,
        nid_1,
        nid_2,
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
        field_ich_videos_1,
      } = x;

      console.log("first image", field_instrument_image);

      const cardContent = (imgSrc) =>
        imgSrc && (
          <div className="news-card">
            <img
              className="news-card__image"
              src={`http://icvtesting.nvli.in${imgSrc}`}
              alt={title}
            />

            <div className="news-card__share">
              <span>
                {" "}
                <FontAwesomeIcon icon={faEye} />
                {nid_2 && nid_2.replaceAll("/n", "")}
              </span>
              <span>
                <FontAwesomeIcon icon={faThumbsUp} />
                {parseInt(
                  (nid_1 && nid_1.match(/Like\s*(\d+)/)?.[1]) || "0",
                  10
                )}
              </span>
            </div>

            <div className="news-card__text-wrapper">
              <h2
                className="news-card__title"
                dangerouslySetInnerHTML={{
                  __html: limitTitleLength(title, 10),
                }}
              />
              <div className="news-card__details-wrapper">
                <button
                  onClick={() => handleRedirect(title, nid)}
                  className="news-card__read-more"
                >
                  {t("Explore")}
                </button>
              </div>
            </div>
          </div>
        );

      // Clean path segment to match keys like "stories", "ebooks", etc.

      const filteredArr = location.pathname
        .split("/")
        .filter(
          (element) =>
            !element.includes("page=") &&
            !element.includes("nid=") &&
            !element.includes("title=") &&
            !element.includes("type=") &&
            !element.includes("lang=hi") &&
            !element.includes("searchtext=") &&
            !element.includes("category=") &&
            !element.includes("state=") &&
            !element.includes("district=")
        );
      const cleanedPath = filteredArr.join("").replace(/-/g, "");

      const pathFieldMap = {
        stories: () => field_story_image?.split(",")[0],
        snippets: () => field_snippets_thumbnail,
        photoessays: () => field_photo_essay_thumbnail,
        photoarchives: () => field_digital_image_file,
        paintingsportfoliopaintings: () => field_painting_portfolio_thumbna,
        paintingsmuseumpaintings: () => field_digital_image_file,
        fortsofindiararebooks: () =>
          field_pdf_digital_file_1?.match(/src="([^"]*)"/)?.[1],
        fortsofindiatalesofforts: () => field_forts_of_india_thumbnail,
        fortsofindiadiscoveringthefortsofindia: () =>
          field_forts_of_india_thumbnail,
        fortsofindiafortsandthefreedomstruggle: () =>
          field_forts_of_india_thumbnail,
        districtsofdefiance: () => field_thumbnail_image,
        foodandculture: () => field_food_category_image,
        foodandculturecuisinesofindia: () => field_cuisines_of_india_category,
        intangibleculturalheritage: () => field_ich_image_files?.split(",")[0],
        musicalinstrumentsofindia: () => field_instrument_image,
        incredibletext: () => field_pdf_digital_file_1,
        unesco: () => field_unesco_category_thumbnail,
        "3DExplorationsvirtualwalkthrough": () => field_unesco_data_thumbnail,
        jewelleryofthenizams: () => field_jewellery_thumbnail,
        historiccitiesofindia: () =>
          field_pdf_digital_file_1?.match(/src="([^"]*)"/)?.[1],
        see: () => field_digital_image_file,
        glimpse: () =>
          field_ic_video_streaming_url_1?.match(/src="([^"]*)"/)?.[1],
        timeless: () => field_timeless_image_gallery?.split(",")[0],
        books: () => field_timeless_image_gallery,
        timelesstrends: () => field_timeless_image_gallery,
        videostories: () => field_timelesstrend_thumbnail,
        timelesstrendsphotoessay: () => field_photo_essay_thumbnail,
        ajantacaves: () =>
          field_ajanta_category_thumbnail?.match(/src="([^"]*)"/)?.[1],
        ajantapaintings: () =>
          field_ajanta_category_thumbnail?.match(/src="([^"]*)"/)?.[1],
        retrievedartefactsofindia: () => field_thumbnail_image,
        textilesandfabricsofindiatextilestales: () =>
          field_textile_category_image,
        textilesandfabricsofindiaartifact: () => field_textile_category_image,
        textilesandfabricsofindiaTrade: () => field_textile_category_image,
        Artisans: () => field_textile_content_image?.split(",")[0],
        Weaving: () => field_textile_category_image?.split(",")[0],
        Embroidery: () => field_textile_category_image?.split(",")[0],
        Painting: () => field_textile_category_image?.split(",")[0],
        textilesandfabricsofindiamanufacturingprocessDyeing: () =>
          field_textile_category_image?.split(",")[0],
        Printing: () => field_textile_category_image?.split(",")[0],
        panindiafestivals: () =>
          field_thumbnail_image?.match(/src="([^"]*)"/)?.[1],
        festivalsofindia: () => field_thumbnail_image,
        freedomarchiverarebooks: () =>
          field_pdf_digital_file_1?.match(/src="([^"]+)"/)?.[1],
        freedomarchivearchivalrecords: () =>
          field_pdf_digital_file_1?.match(/src="([^"]+)"/)?.[1],
        freedomarchivemuseum: () => field_digital_image_file,
        newspaperclippings: () => field_digital_image_file,
        unsungheroes: () => field_photo_essays_image,
        flagshipevents: () =>
          field_ic_video_streaming_url_1?.match(/src="([^"]+)"/)?.[1],
        talesfromthehinterland: () => field_snippets_thumbnail,
        booksnortheastindia: () =>
          field_pdf_digital_file_2?.match(/src="([^"]+)"/)?.[1],
        intangibleculturalheritageoraltraditionsandexpressions: () =>
          field_ich_image_files ||
          field_ich_videos_1?.match(/src="([^"]+)"/)?.[1],
        intangibleculturalheritageperformingarts: () =>
          field_ich_image_files ||
          field_ich_videos_1?.match(/src="([^"]+)"/)?.[1],
        intangibleculturalheritageknowledgeandpracticesconcerningnatureandtheuniverse:
          () =>
            field_ich_image_files ||
            field_ich_videos_1?.match(/src="([^"]+)"/)?.[1],
        intangibleculturalheritagesocialpracticesritualsandfestiveevents: () =>
          field_ich_image_files ||
          field_ich_videos_1?.match(/src="([^"]+)"/)?.[1],
        intangibleculturalheritagetraditionalcraftsmanship: () =>
          field_ich_image_files ||
          field_ich_videos_1?.match(/src="([^"]+)"/)?.[1],
        ajantacavesearly: () =>
          field_ajanta_category_thumbnail.match(/src="([^"]*)"/)[1],
        ajantacaveslater: () =>
          field_ajanta_category_thumbnail.match(/src="([^"]*)"/)[1],
        textilesandfabricsofindiaTextilesandfabricsofindianstate: () => {
          field_textile_map_image.match(/src="([^"]*)"/)[1];
        },
        musicalinstrumentsofindiaavanaddhavadya: () => field_instrument_image,
         musicalinstrumentsofindiatatvadya: () => field_instrument_image.match(/<li>(.*?)<\/li>/)[1],
         musicalinstrumentsofindiaghanvadya: () => field_instrument_image.match(/<li>(.*?)<\/li>/)[1],
          musicalinstrumentsofindiasushirvadya: () => field_instrument_image.match(/<li>(.*?)<\/li>/)[1],
          musicalinstrumentsofindiaincredibletexts: () =>
          field_pdf_digital_file_1?.match(/src="([^"]*)"/)?.[1],
      };

      const fieldValue = pathFieldMap[cleanedPath]?.();

      return (
        <React.Fragment key={index}>{cardContent(fieldValue)}</React.Fragment>
      );
    });
  } else {
    display = <ShimmersUiCard />;
  }

  return <>{display}</>;
};

export default Card;
