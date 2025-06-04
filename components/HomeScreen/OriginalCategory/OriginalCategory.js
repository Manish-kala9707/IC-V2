import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./OriginalCategory.css";
import BackgroundImage from "../../../image/HomepageLogo/Background/Background-Image-Black-Small.webp";
import Builtheritage from "../../../image/HomepageLogo/Non-Curated/Built Heritage-01.png";
import culturalExpression from "../../../image/HomepageLogo/Non-Curated/Cultural Expressions-01.png";
import Footprint from "../../../image/HomepageLogo/Non-Curated/Footprints of Freedom-01.png";
import LegendLegacies from "../../../image/HomepageLogo/Non-Curated/Legends and Legacies-01.png";
import panindia from "../../../image/HomepageLogo/Non-Curated/Pan India Explorations-01.png";
import { useTranslation } from "react-i18next";

const OriginalCategories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // Detect if Hindi version is active
  const isHindi = location.pathname.includes("lang=hi");
  const apiPrefix = isHindi ? "" : "";

  // State variables
  const [culturalExpressionItems, setCulturalExpressionItems] = useState([]);
  const [builtHeritageItems, setBuiltHeritageItems] = useState([]);
  const [footprintItems, setFootprintItems] = useState([]);
  const [legendItems, setLegendItems] = useState([]);
  const [panIndiaItems, setPanIndiaItems] = useState([]);

  // Fetcher function
  const fetchCategoryData = async (endpoint, setState) => {
    try {
      const res = await fetch(`https://icvtesting.nvli.in${apiPrefix}${endpoint}`);
      const data = await res.json();
      const mapped = data.results.map((item) => ({
        icon: `http://icvtesting.nvli.in${item.field_categor_icon}`,
        label: item.title.replace(/\s+/g, " ").replace("&amp;", "and"),
        url: item.title.toLowerCase().replace(/\s+/g, "-").replace("&amp;", "and") || "underconstruction",
      }));
      setState(mapped);
    } catch (err) {
      console.error(`Failed to fetch from ${endpoint}`, err);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchCategoryData("/rest-v1/cultural-expression/list", setCulturalExpressionItems);
    fetchCategoryData("/rest-v1/built-heritage/list", setBuiltHeritageItems);
    fetchCategoryData("/rest-v1/footprint-of-freedom/list", setFootprintItems);
    fetchCategoryData("/rest-v1/legend-and-legacies/list", setLegendItems);
    fetchCategoryData("/rest-v1/pan-india-explorations/list", setPanIndiaItems);
  }, [location.pathname]);

  const categories = [
    {
      title: "Cultural Expression",
      leftImage: culturalExpression,
      items: culturalExpressionItems,
    },
    {
      title: "Legend & Legacies",
      leftImage: LegendLegacies,
      items: legendItems,
    },
    {
      title: "Pan India Explorations",
      leftImage: panindia,
      items: panIndiaItems,
    },
    {
      title: "Built Heritage",
      leftImage: Builtheritage,
      items: builtHeritageItems,
    },
    {
      title: "Footprint of Freedom",
      leftImage: Footprint,
      items: footprintItems,
    },
  ];

  return (
    <Container className="original-categories my-5">
      <h4 className="mb-3">{t("Original Categories")}</h4>
      {categories.map((category, index) => (
        <div key={index} className="category-row position-relative">
          <img src={BackgroundImage} alt="" className="category-bg-image" />

          <div className="category-title-tile">
            <img src={category.leftImage} alt="" className="leftside-image" />
            <span className="category-title-text">{t(category.title)}</span>
          </div>

          <div className="category-icons-row position-relative">
            {category.items.map((item, i) => (
              <div
                key={i}
                className="category-tile d-flex flex-column align-items-center justify-content-center"
                onClick={() => {
                  const langPrefix = location.pathname.includes("lang=hi") ? "/lang=hi" : "";
                  navigate(`${langPrefix}/${item.url}`);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={item.icon} alt={item.label} className="heritage-icon" />
                <span className="icon-label-original mt-2 text-center">
                  {t(item.label)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default OriginalCategories;
