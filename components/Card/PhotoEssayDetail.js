import React, { useState, useRef } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Share2 } from "react-feather";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialShare from "./SocialShare";
import Divider from "../../image/SwirlDivider.png";
import Qrcode from "./Qrcode";
import { useLocation, useNavigate } from "react-router-dom";
import "yet-another-react-lightbox/styles.css";

function PhotoEssayDetail({ detailData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, field_photo_essay_thumbnail, body, type, field_photo_essay_type } = detailData;
  const [show, setShow] = useState(false);
  const [shareShow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const arcShareShow = () => setShareShow(true);

  const domainName = "http://icvtesting.nvli.in";

  const updateFieldCuisineContent = (htmlContent) => {
    if (!htmlContent) return "";
    return htmlContent.replace(/src="\/(.*?)"/g, `src="${domainName}/$1"`);
  };

  return (
    <div>
      <Container fluid className="archive-header">
        <Row className="pt-2">
          <Col md={1} xs={2} className="arcicon text-left">
            <img
              src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/${location.pathname.split("/")[1]}.png`}
              alt={type}
              title={type}
              className="img-responsive"
            />
          </Col>
          <Col md={8} xs={6} className="arctitle">
            {/* Title column can have title if needed */}
          </Col>
          <Col xs={4} md={3} className="arcqrcode pt-1 mt-0 pull-right text-right">
            <a onClick={arcShareShow}>
              <Share2 size={48} className="icon-stroke" strokeWidth={1} />
            </a>
            &nbsp;
            <a onClick={handleShow}>
              <FontAwesomeIcon icon={faQrcode} className="fa-thin" size="3x" />
            </a>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>QR Code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Qrcode value={window.location.href} />
              </Modal.Body>
            </Modal>

            <Modal show={shareShow} onHide={handleShareClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SocialShare value={window.location.href} />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1 className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
            <img
              src={Divider}
              alt="Caption Divider"
              className="text-center"
              style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {field_photo_essay_type === "flipbook" && (
            <>
              <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
              <meta content="width=device-width,initial-scale=1" name="viewport" />
              <link href="/themes/nvli/css/style1.css" rel="stylesheet" type="text/css" />
              <script src="https://indianculture.gov.in/themes/nvli/js/jquery.js"></script>
              <script src="https://indianculture.gov.in/themes/nvli/js/turn.js"></script>
              <script src="https://indianculture.gov.in/themes/nvli/js/jquery.fullsccreen.js"></script>
              <script src="https://indianculture.gov.in/themes/nvli/js/jquery.address-1.6.min.js"></script>
              <script src="https://indianculture.gov.in/themes/nvli/js/wait.js"></script>
              <script src="https://indianculture.gov.in/themes/nvli/js/onload.js"></script>

              <style>
                {`
                  html, body {
                    margin: 0;
                    padding: 0;
                    overflow: auto !important;
                  }
                `}
              </style>

              <div style={{ width: "100%", margin: "0 auto" }}>
                <div id="fb5-ajax">
                  <div data-current="book5" className="fb5" id="fb5">
                    <div className="fb5-preloader">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} id={`wBall_${index + 1}`} className="wBall">
                          <div className="wInnerBall"></div>
                        </div>
                      ))}
                    </div>
                    <div className="fb5-bcg-book"></div>
                    <div id="fb5-container-book">
                      <a className="fb5-nav-arrow prev"></a>
                      <a className="fb5-nav-arrow next"></a>
                      <section id="fb5-deeplinking">
                        <ul></ul>
                      </section>
                      <section id="fb5-about"></section>
                      <div
                        id="fb5-book"
                        dangerouslySetInnerHTML={{
                          __html: updateFieldCuisineContent(body),
                        }}
                      ></div>
                      <div>
                        <p style={{ color: "#fff", textAlign: "right", padding: "10px" }}>
                         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <script>
                  {`
                    jQuery('#fb5').data('config', {
                      "page_width": "600",
                      "page_height": "460",
                      "tooltip_visible": "true",
                      "toolbar_visible": "true",
                      "gotopage_width": "30",
                      "deeplinking_enabled": "true",
                      "rtl": "false",
                      "full_area": "false",
                      "lazy_loading_thumbs": "false",
                      "lazy_loading_pages": "false"
                    });
                  `}
                </script>
              </div>
            </>
          )}
        </Row>

        <Row>
          <Col className="text-center">
            <img
              src={Divider}
              alt="Caption Divider"
              style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PhotoEssayDetail;
