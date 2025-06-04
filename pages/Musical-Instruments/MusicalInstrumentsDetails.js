import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Share2 } from "react-feather";
import { faQrcode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import Qrcode from "../../components/Card/Qrcode";
import SocialShare from "../../components/Card/SocialShare";
import { useTranslation } from "react-i18next";

function MusicalInstrumentsDetails({ detailData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);

  const {
    title,
    field_instrument_image_1,
    field_instrument_first_descripti,
    field_instrument_description,
    field_audio_link,
    field_musical_instrument_state,
    field_instrument_material,
    field_instrument_image,
    field_pdf_digital_file,
  } = detailData;

  const parser = new DOMParser();

  const descriptionDoc = parser.parseFromString(
    field_instrument_description || "",
    "text/html"
  );
  const descriptions = Array.from(descriptionDoc.querySelectorAll("li")).map(
    (li) => li.textContent.trim()
  );

  const imagesDoc = parser.parseFromString(
    field_instrument_image_1 || "",
    "text/html"
  );
  const imageElements = Array.from(imagesDoc.querySelectorAll("img"));
  const images = imageElements.map((img) => ({
    src: img.getAttribute("src").trim(),
    alt: img.getAttribute("alt") || "Instrument Image",
  }));

  const materialonDoc = parser.parseFromString(
    field_instrument_material || "",
    "text/html"
  );
  const material = Array.from(materialonDoc.querySelectorAll("li")).map((li) =>
    li.textContent.trim()
  );

  const audioDoc = parser.parseFromString(field_audio_link || "", "text/html");
  const audioUrl = audioDoc.querySelector("a")?.getAttribute("href") || "";

  const combinedArray = descriptions.map((desc, index) => ({
    detail: desc,
    src: images[index] ? images[index].src : "",
    alt: images[index] ? images[index].alt : "Instrument Image",
    material: material[index] || "",
  }));

  const [showQR, setShowQR] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCloseQR = () => setShowQR(false);
  const handleCloseShare = () => setShowShare(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row>
          <h4>{title}</h4>
        </Row>
        <Row mb={3}>
          <Col xs={6} lg={6} md={6} className="text-start">
            <FontAwesomeIcon
              onClick={() => navigate(-1)}
              icon={faArrowLeft}
              className="threeDexplorationDetail-back-icon"
            />
          </Col>

          <Col
            xs={6}
            lg={6}
            md={6}
            className="text-end threeDexplorationDetail-header-buttons"
          >
            <button
              onClick={() => setShowShare(true)}
              className="btn btn-warning p-1 me-1 text-dark threeDexplorationDetail-header-button"
            >
              <Share2 size={20} strokeWidth={1} />
            </button>
            <button
              onClick={() => setShowQR(true)}
              className="btn btn-warning p-1 threeDexplorationDetail-header-button"
            >
              <FontAwesomeIcon icon={faQrcode} size="lg" />
            </button>
          </Col>
        </Row>

        <Row
          dangerouslySetInnerHTML={{
            __html: field_instrument_first_descripti,
          }}
        ></Row>

        {combinedArray.map((data, idx) => (
          <>
            {" "}
            <Row>
               <Col>type:{data.material}</Col>
              <Col>
                Material: {data.material}
              </Col>
              <Col>
              Found in:{data.field_musical_instrument_state}
              </Col>
            </Row>
            <Row
              key={idx}
              style={{
                backgroundColor: "#F7C113",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <Col lg={4} style={{ paddingLeft: "0px" }}>
                <img
                  className="img-responsive"
                  style={{
                    border: "2px solid grey",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  src={`http://icvtesting.nvli.in${data.src}`}
                  alt={data.alt}
                />
              </Col>
              <Col lg={8}>
                <Row>
                  <Col>
                    <Row>
                      <h5>
                        <b>{data.alt.replace("-", " in")}</b>
                      </h5>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <p>{data.detail}</p>
                </Row>

                {/* Audio Player - shown only if audioUrl exists */}
                {audioUrl && (
                  <Row className="p-2">
                    <audio controls style={{ width: "100%" }}>
                      <source src={audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </Row>
                )}
              </Col>
            </Row>
          </>
        ))}
      </Container>

      {/* Modals */}
      <Container>
        <Modal show={showQR} onHide={handleCloseQR}>
          <Modal.Header closeButton>
            <Modal.Title>QR Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Qrcode value={window.location.href} />
          </Modal.Body>
        </Modal>

        <Modal show={showShare} onHide={handleCloseShare}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SocialShare value={window.location.href} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default MusicalInstrumentsDetails;
