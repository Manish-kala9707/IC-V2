import React, { useState } from "react";
import { Container, Row, Col, Modal, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Share2 } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import Qrcode from "../../components/Card/Qrcode";
import SocialShare from "../../components/Card/SocialShare";
import "./ThreeDExplorationDetail.css";
import { useTranslation } from "react-i18next";

const ThreeDExplorationDetail = ({ detailData }) => {
    const {t}=useTranslation()
  const location = useLocation();
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCloseQR = () => setShowQR(false);
  const handleCloseShare = () => setShowShare(false);

  let {
    field_ic_video_streaming_url,
    title,
    field_introduction_for_virtual_w,
    field_history_for_virtual_walkth,
    field_architecture_for_virtual_w,
    field_chronicles_for_virtual_wal,
  } = detailData;

  return (
    <Container fluid>
      {/* Header Row */}
      <Row className="bg-light p-2 align-items-center threeDexplorationDetail-header">
        <Col xs={1} className="text-start">
          <FontAwesomeIcon
            onClick={() => navigate(-1)}
            icon={faArrowLeft}
            className="threeDexplorationDetail-back-icon"
          />
        </Col>
        <Col xs={9} className="threeDexplorationDetail-header-title text-center">
          {title}
        </Col>
        <Col xs={2} className="text-end threeDexplorationDetail-header-buttons">
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

      {/* Video */}
      <Row className="threeDexplorationDetail-video-container">
        <video
          src={field_ic_video_streaming_url}
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
        />
      </Row>

      {/* Introduction */}
      <Row className="p-4">
        <Col>
          <div
            dangerouslySetInnerHTML={{
              __html: field_introduction_for_virtual_w,
            }}
          />
        </Col>
      </Row>

      {/* Tabs */}
      <Row className="px-4 pb-5">
        <Col>
          <Tabs
            defaultActiveKey="history"
            id="threeDexplorationDetail-tabs"
            className="threeDexplorationDetail-tabs nav-tabs"
          >
            <Tab eventKey="history" title={t("History")}>
              <div className="threeDexplorationDetail-tab-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_history_for_virtual_walkth,
                  }}
                />
              </div>
            </Tab>
            <Tab eventKey="architecture" title={t("Architecture")}>
              <div className="threeDexplorationDetail-tab-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_architecture_for_virtual_w,
                  }}
                />
              </div>
            </Tab>
            <Tab eventKey="chronicles" title={t("Chronicles")}>
              <div className="threeDexplorationDetail-tab-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_chronicles_for_virtual_wal,
                  }}
                />
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {/* QR Modal */}
      <Modal show={showQR} onHide={handleCloseQR}>
        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Qrcode value={window.location.href} />
        </Modal.Body>
      </Modal>

      {/* Share Modal */}
      <Modal show={showShare} onHide={handleCloseShare}>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SocialShare value={window.location.href} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ThreeDExplorationDetail;
