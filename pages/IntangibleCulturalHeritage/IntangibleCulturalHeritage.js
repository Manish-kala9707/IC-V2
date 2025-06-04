import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import image1 from "../../image/intangible culture heritage/DevendraSharma_SultanaDaku_0.jpg";
import image2 from "../../image/intangible culture heritage/Screen Shot 2020-05-13 at 11.06.22 AM_0.png";
import image3 from "../../image/intangible culture heritage/kumbhimage.jpeg";
import image4 from "../../image/intangible culture heritage/pottery-166798_1920_0.jpg";
import image5 from "../../image/intangible culture heritage/download_0.jpeg";
import Divider from "../../image/intangible culture heritage/Intangible-Cultural-Heritage-Black.webp";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const IntangibleCulturalHeritage = () => {
  const { fetchedData } = useContext(ContextData);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="archive-header">
        <Row>
          <Col md={6} className="offset-md-3">
            <img
              src={Divider}
              alt="Caption Divider"
              className="icon"
              style={{
                width: "80px",
                height: "80px",
                marginRight: "10px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h1>{t("Intangible Cultural Heritage")}</h1>
            <div class="col pt-3">
              <div class="line-with-dspace">
                <div class="linedpsace"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row>
          <Col lg={7}>
            <Row className="g-3">
              <Col lg={12}>
                <div class="card">
                  <div class="card-header icp-bgnew">
                    <h5>{t("Knowledge & practices concerning nature")}</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() =>
                        navigate(
                          "/intangible-cultural-heritage/knowledge-and-practices-concerning-nature-and-the-universe"
                        )
                      }
                    >
                      <img
                        src={image3}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />
                      <div class="card-img-overlay   h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            navigate(
                              "/intangible-cultural-heritage/knowledge-and-practices-concerning-nature-and-the-universe"
                            )
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div class="card">
                  <div class="card-header icp-bgnew">
                    <h5>{t("Performing arts")}</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() =>
                        navigate(
                          "/intangible-cultural-heritage/performing-arts"
                        )
                      }
                    >
                      <img
                        src={image1}
                        className="img-responsive heritage-img "
                        alt="Performing arts"
                      />
                      <div class="card-img-overlay h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            navigate(
                              "/intangible-cultural-heritage/performing-arts"
                            )
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div class="card">
                  <div class="card-header icp-bgnew">
                    <h5>{t("Traditional craftmanship")}</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="h-100 heritage-card"
                      onClick={() =>
                        navigate(
                          "/intangible-cultural-heritage/traditional-craftsmanship"
                        )
                      }
                    >
                      <img
                        src={image5}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />
                      <div class="card-img-overlay   h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            navigate(
                              "/intangible-cultural-heritage/traditional-craftsmanship"
                            )
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <Row>
              <Col lg={12}>
                <div class="card h-100">
                  <div class="card-header icp-bgnew">
                    <h5>{t("Oral tradition & expression")}</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() =>
                        navigate(
                          "/intangible-cultural-heritage/oral-traditions-and-expressions"
                        )
                      }
                    >
                      <img
                        src={image2}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />{" "}
                      <div class="card-img-overlay h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            navigate(
                              "/intangible-cultural-heritage/oral-traditions-and-expressions"
                            )
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={12} className="mt-3">
                <div class="card h-100">
                  <div class="card-header icp-bgnew">
                    <h5>{t("Social practices,rituals & festive events")}</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() =>
                        navigate(
                          "/intangible-cultural-heritage/social-practices-rituals-and-festive-events"
                        )
                      }
                    >
                      <img
                        src={image4}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />{" "}
                      <div class="card-img-overlay h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            navigate(
                              "/intangible-cultural-heritage/social-practices-rituals-and-festive-events"
                            )
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntangibleCulturalHeritage;
