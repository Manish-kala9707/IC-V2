import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ThreeDExplorationsLandingPage.css";
import { useTranslation } from "react-i18next";

const extractImagesFromHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const images = Array.from(div.querySelectorAll("img"));
  return images.map((img, index) => ({
    src: `https://icvtesting.nvli.in${img.getAttribute("src")}`,
    alt: img.getAttribute("alt") || `Image ${index + 1}`,
  }));
};

const ThreeDExplorationsLandingPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [whatsNewItems, setWhatsNewItems] = useState([]);

  useEffect(() => {
    // First API: 3D Explorations
    axios
      .get("https://icvtesting.nvli.in/rest-v1/3D-explorations-landing-page")
      .then((res) => {
        const item = res.data.results?.[0];
        if (item) {
          setData(item);
          if (item.field_audio_image) {
            const extractedImages = extractImagesFromHtml(
              item.field_audio_image
            );
            setImages(extractedImages);
          }
        }
      })
      .catch((err) => {
        console.error("Failed to fetch landing page data", err);
      });

    // Second API: What's New
    axios
      .get(
        "https://icvtesting.nvli.in/rest-v1/virtual-walkthrought-newly-added"
      )
      .then((res) => {
        setWhatsNewItems(res.data.results || []);
      })
      .catch((err) => {
        console.error("Failed to fetch What's New data", err);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="three-d-page container py-5">
      <h2 className="text-center fw-bold mb-4">3D Explorations</h2>

      <p
        className="text-center three-description mb-5"
        dangerouslySetInnerHTML={{ __html: data.body }}
      />

      <div className="row g-4 justify-content-center">
        {images.map((img, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-5">
            <div className="three-exploration-tile">
              <img
                src={img.src}
                alt={img.alt}
                className="three-exploration-image"
              />
              <div className="three-tile-overlay">
                <h5 className="three-tile-title">{img.alt}</h5>
                {index === 0 ? (
                  <Link
                    to="/3D-Explorations/virtual-walkthrough"
                    className="btn btn-warning fw-semibold mt-2"
                  >
                    {t("Explore")}
                  </Link>
                ) : index === 1 ? (
                  <a
                    href="https://videoserver.nvli.in/nvli/360video/Qutb_Minar/app-files/index.html"
                    className="btn btn-warning mt-2 fw-semibold explore-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Explore")}
                  </a>
                ) : (
                  <Link
                    to={img.alt}
                    className="btn btn-warning fw-semibold mt-2"
                  >
                    {t("Explore")}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What's New Section */}
      <div className="whats-new-section mt-5">
        <h2 className="text-center fw-bold mb-4">What’s New</h2>
        <div className="row g-4 justify-content-center">
          {whatsNewItems.map((item, index) => {
            // Construct the internal path if applicable
            const formattedTitle = item.title
              ?.replace(/\s/g, "_")
              .replace(/[()]/g, "");
            const internalPath = `/3D-Explorations/virtual-walkthrough/title=${formattedTitle}/nid=${item.nid}`;

            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className={`three-whatsnew-card ${
                    item.field_unesco_data_thumbnail?.startsWith("http")
                      ? ""
                      : "local-thumbnail"
                  }`}
                  style={{
                    backgroundImage: `url(${
                      item.field_unesco_data_thumbnail?.startsWith("http")
                        ? item.field_unesco_data_thumbnail
                        : "https://icvtesting.nvli.in" +
                          item.field_unesco_data_thumbnail
                    })`,
                  }}
                >
                  <div className="three-whatsnew-card-overlay">
                    <h5 className="three-whatsnew-title">{item.title}</h5>

                    {index === 1 ? (
                      // External <a> for the 2nd item
                      <a
                        href="https://videoserver.nvli.in/nvli/360video/Qutb_Minar/app-files/index.html"
                        className="btn btn-warning mt-2 fw-semibold explore-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("Explore")}
                      </a>
                    ) : (
                      // Internal <Link> for 1st and 3rd
                      <Link
                        to={internalPath}
                        className="btn btn-warning mt-2 fw-semibold explore-btn"
                      >
                        {t("Explore")}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThreeDExplorationsLandingPage;
