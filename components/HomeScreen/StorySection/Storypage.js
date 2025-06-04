import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./StoryPage.css";
import stories from "../../../image/HomepageLogo/StoriesSection/Stories-tab-Small.png";
import photoessay from "../../../image/HomepageLogo/StoriesSection/Photo-Essays-Thumbnail.webp";
import snippets from "../../../image/HomepageLogo/StoriesSection/Red-Panda_11-04-2025.webp";
import Retrieved from "../../../image/HomepageLogo/StoriesSection/Retrieved-Artefacts-Background_11-04-2025.webp";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Storypage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if Hindi is active
  const langPrefix = location.pathname.includes("lang=hi") ? "/lang=hi" : "";

  return (
    <Container className="artifacts-section my-5">
      <Row className="homestory">
        <Col md={6} className="mb-3 left-col">
          <Row className="half-height">
            <Col>
              <div className="artifact-card">
                <img src={stories} alt="Stories" className="artifact-img" />
                <div className="artifact-content">
                  <h6 className="fw-bold">{t("Stories")}</h6>
                  <Button className="explore-btn" onClick={() => navigate(`${langPrefix}/stories`)}>
                    {t("Explore")}
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="artifact-card">
                <img src={snippets} alt="Snippets" className="artifact-img" />
                <div className="artifact-content">
                  <h6 className="fw-bold">{t("Snippets")}</h6>
                  <Button className="explore-btn" onClick={() => navigate(`${langPrefix}/snippets`)}>
                    {t("Explore")}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="half-height mt-2">
            <Col>
              <div className="artifact-card">
                <img src={photoessay} alt="Photo Essay" className="artifact-img" />
                <div className="artifact-content">
                  <h6 className="fw-bold">{t("Photo Essay")}</h6>
                  <Button className="explore-btn" onClick={() => navigate(`${langPrefix}/photo-essays`)}>
                    {t("Explore")}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={6} className="mb-3 right-col">
          <div className="artifact-card-retrived full-height">
            <img src={Retrieved} alt="Retrieved Artifact" className="artifact-img" />
            <div className="artifact-content">
              <h6 className="fw-bold">{t("Retrieved Artefact")}</h6>
              <Button className="explore-btn" onClick={() => navigate(`${langPrefix}/retrieved-artefacts-of-india`)}>
                {t("Explore")}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Storypage;
