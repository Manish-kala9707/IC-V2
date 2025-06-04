import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Play from "../../../image/HomepageLogo/Activity/Play-@-ICP.webp";
import Before from "../../../image/HomepageLogo/Activity/Before-&-After.webp";
import threesixtydegree from "../../../image/HomepageLogo/Activity/Explore-in-360-degree-01.webp";

import "./Activity.css";

const activities = [
  {
    title: "Play @ ICP",
    img: Play,
  },
  {
    title: "Before & After",
    img: Before,
  },
  {
    title: "Explore in 360 degree",
    img: threesixtydegree,
  },
];

const Activity = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const langPrefix = location.pathname.includes("lang=hi") ? "/lang=hi" : "";

  const handleExploreClick = (title) => {
    // Convert title to URL-friendly slug
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    navigate(`${langPrefix}/${slug}`);
  };

  return (
    <Container className="Activity-container my-5">
      <h5 className="mb-4 ml-3">{t("Activities @ICP")}</h5>
      <Row className="Activity-row">
        {activities.map((activity, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="activity-card p-0 border rounded shadow-sm h-100">
              <div className="activity-header d-flex justify-content-between align-items-center px-3 py-2">
                <span className="activity-title">{t(activity.title)}</span>
              </div>              
                <div className="activitycard-box half-height">
                         <img
                src={activity.img}
                alt={activity.title}
               className="activitycard-img w-100" 
                style={{ height: "auto", objectFit: "cover" }}
              />
                          <div className="activitycard-content"> 
                            <Button
                  className="explore-btn"
                  variant="primary"
                  size="sm"
                  onClick={() => handleExploreClick(activity.title)}
                >
                  {t("Explore")}
                </Button>
                          </div>
                        </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Activity;
