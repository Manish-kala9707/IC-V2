import React, { useEffect, useState } from "react";
import { Container, Row, Col,OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Curated.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
 
const Curated = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [textualItems, setTextualItems] = useState([]);
  const [visualItems, setVisualItems] = useState([]);
  const { t } = useTranslation();
 
  const langPrefix = location.pathname.includes("lang=hi") ? "/lang=hi" : "";
 
  useEffect(() => {
    const fetchTextualRepo = async () => {
      try {
        const res = await fetch("https://icvtesting.nvli.in/rest-v1/textual-repository/list");
        const data = await res.json();
        const mapped = data.results.map((item) => ({
          image: `http://icvtesting.nvli.in${item.field_categor_icon}`,
          title: item.title,
          url: item.title.toLowerCase().replace(/\s+/g, "-"),
        }));
        setTextualItems(mapped);
      } catch (err) {
        console.error("Error fetching textual items:", err);
      }
    };
 
    const fetchVisualRepo = async () => {
      try {
        const res = await fetch("https://icvtesting.nvli.in/rest-v1/visual-repository/list");
        const data = await res.json();
        const mapped = data.results.map((item) => ({
          image: `http://icvtesting.nvli.in${item.field_categor_icon}`,
          title: item.title.replace(/\s+/g, "-").replace("&amp;", "and"),
          url: item.title.toLowerCase().replace(/\s+/g, "-").replace("&amp;", "and"),
        }));
        setVisualItems(mapped);
      } catch (err) {
        console.error("Error fetching visual items:", err);
      }
    };
 
    fetchTextualRepo();
    fetchVisualRepo();
  }, []);
 
  const handleRedirect = (title, url) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("indian national bibliography")) {
      window.open("https://inb.nvli.in/cgi-bin/koha/opac-search.pl?advsearch=1&idx=kw&limit=branch%3ACRL&sort_by=relevance&do=Search", "_blank");
    } else if (titleLower.includes("union catalogue")) {
      window.open("https://librarycatalogue.nvli.in/", "_blank");
    } else {
      navigate(`${langPrefix}/${url}`);
    }
  };
 
  return (
    <Container fluid className="Curated">
      {/* Textual Repository */}
      <Row>
        <Col xs={12} lg={12} md={6}>
          <h4 className="mb-4">{t("Curated Categories")}</h4>
        </Col>
      </Row>
 
      <Row className="Curated-Row m-1">
        <Col xs={12} lg={3} md={6}>
          <div className="category-main">
            <span className="category-title">{t("Textual Repository")}</span>
          </div>
        </Col>
        <Col xs={12} className="Curated-Col">
          <div className="tile-wrapper">
            {textualItems.map((item, index) => (
              <div
                key={index}
                className="icon-tile"
                onClick={() => handleRedirect(item.title, item.url)}
              >
                <OverlayTrigger
  placement="bottom"
  overlay={<Tooltip id="tooltip-bottom">{t(item.title)}</Tooltip>}
>
  <div style={{ display: 'inline-block', cursor: 'pointer' }}>
    <img src={item.image} alt={t(item.title)} />
    <div className="icon-title-curated">{t(item.title)}</div>
  </div>
</OverlayTrigger>
              </div>
            ))}
          </div>
        </Col>
      </Row>
 
      {/* Visual Repository */}
      <Row className="Curated-Row m-1 mt-4">
        <Col xs={12} lg={3} md={6}>
          <div className="category-main">
            <span className="category-title">{t("Audio & Visual Repository")}</span>
          </div>
        </Col>
        <Col xs={12} className="Curated-Col">
          <div className="tile-wrapper">
            {visualItems.map((item, index) => (
              <div
                key={index}
                className="icon-tile"
                onClick={() => handleRedirect(item.title, item.url)}
              >
               <OverlayTrigger
  placement="bottom"
  overlay={<Tooltip id="tooltip-bottom">{t(item.title)}</Tooltip>}
>
  <div style={{ display: 'inline-block', cursor: 'pointer' }}>
    <img src={item.image} alt={t(item.title)} />
    <div className="icon-title-curated">{t(item.title)}</div>
  </div>
</OverlayTrigger>
 
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
 
export default Curated;
 