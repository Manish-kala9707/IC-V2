import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menubar.css";
import { useTranslation } from "react-i18next";

const MenuBarOption = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const handleMenubarOptionsurl = (path) => {
    const isHindi = location.pathname.includes("lang=hi");
    return isHindi ? `/lang=hi/${path}` : `/${path}`;
  };

  return (
    <div className="categories-container">
      {/* Original Categories */}
      <div className="categories-section">
        <h2>{t("Original Categories")}</h2>

        <div className="category-group">
          <div className="title-box">{t("Cultural Expressions")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link
                  to={handleMenubarOptionsurl("textiles-and-fabrics-of-india")}
                >
                  {t("Textiles and Fabrics of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("festivals-of-india")}>
                  {t("Festivals of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("food-and-culture")}>
                  {t("Food and Culture")}
                </Link>
              </li>
              <li>
                <Link
                  to={handleMenubarOptionsurl("musical-instruments-of-india")}
                >
                  {t("Musical Instruments of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("timeless-trends")}>
                  {t("Timeless Trends")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("classical-dances-of-india")}>
                  {t("Classical Dances of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("dying-languages")}>
                  {t("Dying Languages of India")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-group">
          <div className="title-box">{t("Legends & Legacies")}</div>{" "}
          {/* //once check the correct one for this  */}
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("iconic-battles-of-india")}>
                  {t("Iconic Battles of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("healing-through-the-ages")}>
                  {t("Healing through the Ages")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("jewelleryOfTheNizams")}>
                  {t("Jewellery of the Nizams")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("folktales-of-india")}>
                  {t("Folktales of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("legendary-figures")}>
                  {t("Legendary Figures")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-group">
          <div className="title-box">{t("Pan India Explorations")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("unesco")}>
                  {t("Unesco")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("historic-cities-of-india")}>
                  {t("Historic Cities of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("states")}>
                  {t("States of India")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="title-box">{t("Built Heritage")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("forts-of-india")}>
                  {t("Forts of India")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("ajanta-caves")}>
                  {t("Ajanta Caves")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("3D-Explorations")}>
                  {t("3D-Explorations")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-group">
          <div className="title-box">{t("Footprint of Freedom")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link
                  to={handleMenubarOptionsurl("digital-district-repository")}
                >
                  {t("Districts of Defiance")}
                </Link>
              </li>{" "}
              {/* // need to check spelling */}
              <li>
                <Link to={handleMenubarOptionsurl("freedom-archive")}>
                  {t("Freedom Archive")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="title-box">{t("Cultural Chronicles")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("stories")}>
                  {t("Stories")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("snippets")}>
                  {t("Snippets")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("photo-essay")}>
                  {t("Photo-Essay")}
                </Link>
              </li>
              <li>
                <Link
                  to={handleMenubarOptionsurl("retrieved-artefacts-of-india")}
                >
                  {t("Retrieved Artifact of India")}
                </Link>
              </li>
              {/* //  need to check speeling */}
            </ul>
          </div>
        </div>
      </div>

      {/* Curated Categories */}

      <div className="categories-section">
        <h2>{t("Curated Categories")}</h2>

        <div className="category-group">
          <div className="title-box">{t("Textual Repository")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("rare-books")}>
                  {t("Rare Books")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("e-books")}>
                  {t("E-Books")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("manuscripts")}>
                  {t("Manuscripts")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("gazettes-and-gazetteers")}>
                  {t("Gazettes and Gazetteers")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("reports-and-proceedings")}>
                  {t("Reports and Proceedings")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("other-collections")}>
                  {t("Other-Collections")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("research-papers")}>
                  {t("Research Papers")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("archives")}>
                  {t("Archives")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-group">
          <div className="title-box">{t("Audio & Visual Repository")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("paintings")}>
                  {t("Paintings")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("photo-archives")}>
                  {t("Photo-Archives")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("images")}>
                  {t("Images")}
                </Link>
              </li>
              <li>
                <Link
                  to={handleMenubarOptionsurl("intangible-cultural-heritage")}
                >
                  {t("Intangible Cultural Heritage")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("audios")}>
                  {t("Audios")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("videos")}>
                  {t("Videos")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("museum-collections")}>
                  {t("Museum Collections")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <h2>{t("Outreach Orbit / ICP Interactive")}</h2>
        <div className="category-group">
          <div className="title-box">{t("Tools")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("flagship-events")}>
                  {t("Flagship Events")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("publications")}>
                  {t("Publications")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("outreach")}>
                  {t("Outreach")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-group">
          <div className="title-box">{t("Activities @ICP")}</div>
          <div className="list-box">
            <ul>
              <li>
                <Link to={handleMenubarOptionsurl("/play")}>
                  {t("Play @ ICP")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("before-after")}>
                  {t("Before & After")}
                </Link>
              </li>
              <li>
                <Link to={handleMenubarOptionsurl("explore-360")}>
                  {t("Explore in 360 degree")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBarOption;
