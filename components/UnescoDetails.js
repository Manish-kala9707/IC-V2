import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Share2, BookOpen, FileText } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap";
import Qrcode from "./Card/Qrcode";
import SocialShare from "./Card/SocialShare";
import Divider from "../image/SwirlDivider.png";
import { useTranslation } from "react-i18next";
function UnescoDetails({ detailData, setDetailData, search_results }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const [unescoDetails, setUnescoDetails] = useState(true);
  const [moreInfo, setMoreInfo] = useState(false);
  const { t } = useTranslation();
  let {
    title,
    type,
    field_unesco_data_thumbnail,
    field_from_unesco,
    field_more_information,
    field_unesco_image_gallery,
  } = detailData;

  console.log("detaildata ====", detailData);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const unescoShow = () => {
    setUnescoDetails(true);
    setMoreInfo(false);
  };
  const otherShow = () => {
    setUnescoDetails(false);
    setMoreInfo(true);
  };
  return (
    <>
      <Container fluid className="archive-header">
        <Row className="pt-2">
          <Col md={1} xs={2} className="arcicon text-left">
            <img
              src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/unseco.png`}
              alt={type}
              title={type}
            />
          </Col>
          <Col style={{ paddingTop: "50px", marginLeft: "132px" }}>
            <h1
              className="text-center"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <img
              src={Divider}
              alt="Caption Divider"
              className="text-center"
              style={{
                marginTop: "-17px",
                width: "90px",
                height: "15px",
                backgroundColor: "transparent",
              }}
            />
          </Col>

          <Col
            xs={4}
            md={3}
            className="arcqrcode pt-1 mt-0 pull-right text-right"
          >
            <a onClick={ArcShareShow}>
              {" "}
              <Share2 size={48} className="icon-stroke" strokeWidth={1} />{" "}
            </a>{" "}
            &nbsp;
            <a onClick={handleShow}>
              <FontAwesomeIcon icon={faQrcode} className="fa-thin" size="3x" />{" "}
            </a>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>QR Code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Qrcode value={window.location.href} />
              </Modal.Body>
            </Modal>
            <Modal show={Shareshow} onHide={handleShareClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SocialShare value={window.location.href} />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {field_unesco_image_gallery ? (
            <Carousel interval={2000}>
              {field_unesco_image_gallery &&
                field_unesco_image_gallery.split(",").map((data, index) => {
                  return (
                    <Carousel.Item interval={2000}>
                      <img
                        style={{
                          height: "450px",
                          width: "80%",
                          justifyContent: "center",
                          border: "2px solid black",
                          borderRadius: "13px",
                          padding: "0px",
                        }}
                        src={`http://icvtesting.nvli.in${data.trim()}`}
                      />
                      <Carousel.Caption>
                        <h3>{`${title}( image-${index + 1})`}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          ) : (
            <img
              src={`http://icvtesting.nvli.in/${field_unesco_data_thumbnail}`}
              style={{
                height: "450px",
                width: "80%",
                justifyContent: "center",
                border: "2px solid black",
                borderRadius: "13px",
                padding: "0px",
              }}
            />
          )}
        </Row>
        <Container
          style={{
            paddingTop: "10px",
            justifyContent: "centre",
            backgroundColor: "white",
            borderRadius: "13px",
          }}
        >
          <Row style={{ paddingTop: "10px" }}>
            <Col onClick={unescoShow}>
              <button
                style={
                  unescoDetails
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {t("From unesco")}
              </button>
            </Col>
            <Col onClick={otherShow}>
              <button
                style={
                  moreInfo ? { backgroundColor: "black", color: "white" } : {}
                }
              >
                {t("More Details")}
              </button>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "10px",
              justifyContent: "centre",
              marginRight: "0px",
            }}
          >
            {unescoDetails ? (
              <div
                style={{ textAlign: "justify", paddingLeft: "20px" }}
                dangerouslySetInnerHTML={{ __html: field_from_unesco }}
              />
            ) : (
              <div
                style={{ textAlign: "justify", paddingLeft: "20px" }}
                dangerouslySetInnerHTML={{ __html: field_more_information }}
              />
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default UnescoDetails;
