import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FortsOfIndia.css";
import "../../../node_modules/video-react/dist/video-react.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from "react-i18next";
import Vidicon from "../../image/amer-8 1.png";
import FortIndiaBanner from "../../image/hampi 1.png";
import FortIndia1 from "../forts/images/Discovering-Forts.png";
import FortIndia2 from "../forts/images/History.png";
import FortIndia3 from "../forts/images/Rare-Books.jpg";
import FortIndia4 from "../forts/images/Understanding-forts.png";
import FortIndia5 from "../../image/Janjira2.jpg";
import amerbanner from "../forts/images/amer_1.jpg";
import bidarbanner from "../forts/images/bidar.jpg";
import gwaloirbanner from "../forts/images/gwaloir.jpg";
import mehrangarhbanner from "../forts/images/mehrangarh.jpg";
import sindhudurgbanner from "../forts/images/sindhudurg.jpg";
import redbanner from "../forts/images/red.jpg";
import Divider from "../forts/images/FortsofIndia.png";

function FortsOfIndia() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavigate = (basePath) => {
    const langPrefix = location.pathname.includes("lang=hi") ? "/lang=hi" : "";
    navigate(`${langPrefix}${basePath}`);
  };
  const images = [
    {
      original: amerbanner,
      thumbnail: amerbanner,
      thumbnailLabel: "Fort A",
      description: "An ancient stronghold surrounded by nature.",
    },
    {
      original: bidarbanner,
      thumbnail: bidarbanner,
      thumbnailLabel: "Fort B",
      description: "Stone walls telling tales of ancient wars.",
    },
    {
      original: redbanner,
      thumbnail: redbanner,
      thumbnailLabel: "Fort C",
      description: "A majestic view of historic architecture.",
    },
    {
      original: sindhudurgbanner,
      thumbnail: sindhudurgbanner,
      thumbnailLabel: "Fort C",
      description: "A majestic view of historic architecture.",
    },
    {
      original: mehrangarhbanner,
      thumbnail: mehrangarhbanner,
      thumbnailLabel: "Fort C",
      description: "A majestic view of historic architecture.",
    },
    {
      original: gwaloirbanner,
      thumbnail: gwaloirbanner,
      thumbnailLabel: "Fort C",
      description: "A majestic view of historic architecture.",
    },
  ];
  return (
    <>
      {location.pathname.includes("forts-of-india") && (
        <>
          {" "}
          <Container className="archive-header">
            <Row>
              {" "}
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
                <h1 className="text-center">{t("Forts of India")}</h1>
                <div class="col pt-3">
                  <div class="line-with-dspace">
                    <div class="linedpsace"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}

      <Container className="fortindicover">
        <Row className="mt-4 p-5 fortcardbg rounded">
          <Col md={12}>
            <p>
              The Forts of India are some of the most awe-inspiring monuments
              found in the country. From the Himalayas to the peninsular tip,
              from the deserts to the lush valleys of North-East, forts adorn
              each and every corner of the landscape of the Indian subcontinent.
              This section aims to provide a comprehensive overview of these
              magnificent monuments that bear the stories of the political
              vicissitudes of our country.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          thumbnailPosition="right"
        />
      </Container>

      <Container fluid className="mt-4">
        <Row>
          <Col md={6}>
            {" "}
            <div class="card">
              <div class="card-header icp-bgnew">
                <h5>
                  Discover the <strong>Forts</strong> of India
                </h5>
              </div>
              <div class="card-body p-0">
                {" "}
                <div
                  className="heritage-card"
                  onClick={() =>
                    handleNavigate(
                      "/forts-of-india/discovering-the-forts-of-india"
                    )
                  }
                >
                  <img
                    src={FortIndia1}
                    className="img-responsive heritage-img "
                    alt="Cultural Heritage"
                  />
                  <div class="card-img-overlay   h-100">
                    <button
                      className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                      onClick={() =>
                        handleNavigate(
                          "/forts-of-india/discovering-the-forts-of-india"
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
          <Col md={6}>
            <Row>
              <Col md={6}>
                {" "}
                <div class="card">
                  <div class="card-header icp-bgnew">
                    <h5>History</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() => handleNavigate("/forts-of-india/history")}
                    >
                      <img
                        src={FortIndia2}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />
                      <div class="card-img-overlay   h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            handleNavigate("/forts-of-india/history")
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                {" "}
                <div class="card">
                  <div class="card-header icp-bgnew">
                    <h5>Rarebook</h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() =>
                        handleNavigate("/forts-of-india/rarebooks")
                      }
                    >
                      <img
                        src={FortIndia3}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />
                      <div class="card-img-overlay   h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            handleNavigate("/forts-of-india/rarebooks")
                          }
                        >
                          Explore{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={12} className="mt-2">
                {" "}
                <div class="card">
                  <div class="card-header icp-bgnew">
                    <h5>
                      Understanding the <strong>Forts</strong>
                    </h5>
                  </div>
                  <div class="card-body p-0">
                    {" "}
                    <div
                      className="heritage-card"
                      onClick={() =>
                        handleNavigate("/forts-of-india/understanding-forts")
                      }
                    >
                      <img
                        src={FortIndia4}
                        className="img-responsive heritage-img "
                        alt="Cultural Heritage"
                      />
                      <div class="card-img-overlay   h-100">
                        <button
                          className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2"
                          onClick={() =>
                            handleNavigate(
                              "/forts-of-india/understanding-forts"
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
      <Container
        className="freedom-fort-banner"
        style={{
          backgroundImage: `url(${FortIndia5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="freedom-fort-overlay text-center">
          <h2>Forts and the Freedom Struggle</h2>
          <p>
            The <span className="highlight">forts</span> of India have stood
            witness to significant political events of the country. This section
            is dedicated to <span className="highlight">forts</span> that have
            played a significant role in the freedom struggle of our country. It
            showcases stories and rare archival records linked to{" "}
            <span className="highlight">forts</span>
            that acted as sites of resistance and struggle against the British.
          </p>
          <button
            className="btn btn-warning"
            onClick={() =>
              handleNavigate("/forts-of-india/fortsandthefreedomstruggle")
            }
          >
            Read more
          </button>
        </div>
      </Container>

      <Container fluid>
        <Row className="fortcardbg">
          <Col md={6} className="offset-md-3 text-center">
            <h1>The Forts Of India: A Tour</h1>
            <p className="text-center">
              A Virtual Tour of the prominent Forts of India
            </p>
            <Player
              className="foiplayer"
              playsInline
              poster={Vidicon}
              src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/VirtualTour.mp4"
            >
              <BigPlayButton position="center" />
              <LoadingSpinner />
              <ControlBar autoHide={false} className="my-class" />
            </Player>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FortsOfIndia;
