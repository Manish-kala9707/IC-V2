import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Modal, Image } from "react-bootstrap";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Share2 } from "react-feather";

import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import PdfFlipbookCard from "../../components/Card/PdfFlipbookCard";
import MyBook from "../../components/Card/Mybook";
import Qrcode from "../../components/Card/Qrcode";
import SocialShare from "../../components/Card/SocialShare";
import DublinCoreCard from "../../components/Card/DublinCoreCard";

import DocIcon from "../../image/icon/document-text.svg";
import SolidDocIcon from "../../image/icon/document-text_Solid.svg";
import BookIcon from "../../image/icon/book-open.svg";
import SolidBookIcon from "../../image/icon/book-open_Solid.svg";

import "./TextualRepositoryDetails.css";

const TextualRepositoryDetails = ({ detailData }) => {
  const location = useLocation();

  const [showFirstData, setShowFirstData] = useState(true);
  const [showSecondData, setShowSecondData] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (imageList.length > 0) {
      setSelectedImage(imageList[0]);
    }
  }, [detailData]);

  const handleFirstButtonClick = () => {
    setShowFirstData(true);
    setShowSecondData(false);
  };

  const handleSecondButtonClick = () => {
    setShowFirstData(false);
    setShowSecondData(true);
  };

  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);
  const handleShowShare = () => setShowShare(true);
  const handleCloseShare = () => setShowShare(false);

  if (!detailData) return <ShimmerCardDetails />;

  const {
    field_pdf_digital_file,
    field_digital_image_file,
    title,
    field_dc_subject,
    field_dc_contributor_author,
    field_dc_date_issued,
    field_dc_publisher,
    field_dc_description_abstract,
    field_dc_type,
    field_parent_library_name,
    field_parent_dspace_community_na,
  } = detailData;

  const imageList = field_digital_image_file
    ? field_digital_image_file
        .split(",")
        .map((data) => `http://icvtesting.nvli.in${data.trim()}`)
    : [];

  return (
    <div>
      <PdfFlipbookCard
        field_pdf_digital_file={field_pdf_digital_file}
        showFirstData={showFirstData}
        showSecondData={showSecondData}
      />

      {showSecondData && field_pdf_digital_file && (
        <MyBook file={`http://icvtesting.nvli.in${field_pdf_digital_file}`} />
      )}

      {location.pathname.includes("manuscripts") && !field_pdf_digital_file && (
        <Row style={{ marginLeft: "20px", marginRight: "0px" }}>
          <Row className="main-class d-flex flex-wrap">
            <Col lg={6} md={12}>
              <Image
                className="image-display"
                src={selectedImage}
                alt="Selected"
                fluid
              />
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <h4>{title}</h4>
              </div>
            </Col>

            <Col className="thumbnail-column" lg={6} md={12}>
              {imageList.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(imgUrl)}
                  style={{
                    height: "80px",
                    cursor: "pointer",
                    border:
                      selectedImage === imgUrl
                        ? "2px solid #007bff"
                        : "1px solid #ccc",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Col>
          </Row>
        </Row>
      )}

      {/* View Switcher + Share & QR */}
      <Container fluid>
        <Row className="align-items-center mt-3">
          <Col
            xs={6}
            className="d-flex align-items-center justify-content-start gap-3"
          >
            {field_pdf_digital_file && (
              <>
                <a
                  onClick={handleFirstButtonClick}
                  style={{
                    backgroundColor: showFirstData ? "#F7C113" : "transparent",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={showFirstData ? SolidDocIcon : DocIcon}
                    className="icon-img"
                    alt="Document View"
                  />
                </a>
                <a
                  onClick={handleSecondButtonClick}
                  style={{
                    backgroundColor: showSecondData
                      ? "#F7C113"
                      : "transparent",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={showSecondData ? SolidBookIcon : BookIcon}
                    className="icon-img"
                    alt="Book View"
                  />
                </a>
              </>
            )}
          </Col>

          <Col
            xs={6}
            className="d-flex align-items-center justify-content-end gap-3"
          >
            <a onClick={handleShowShare}>
              <Share2 size={25} className="icon-img" strokeWidth={1} />
            </a>
            <a onClick={handleShowQR}>
              <FontAwesomeIcon
                icon={faQrcode}
                className="icon-img"
                style={{ fontSize: "25px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>

      {/* Metadata */}
      <Container fluid>
        <Row className="metadata justify-content-center mt-4">
          <Col className="metadata-col" xs={12} md={10}>
            <h5 className="metadata-heading mb-3">
              {title?.replace(/&#039;s|&#039;|&quot;I|&quot;/g, "")}
            </h5>

            {field_dc_subject?.trim() && (
              <p className="dctext">
                <span className="bold">Keywords:</span>{" "}
                {field_dc_subject
                  .replace(/\r\n/g, ", ")
                  .replace(/&#039;s|&#039;|&quot;I|&quot;/g, "")}
              </p>
            )}

            {field_dc_contributor_author && (
              <p className="dctext">
                <span className="bold">Author:</span>{" "}
                {field_dc_contributor_author.replace(
                  /&#039;s|&#039;|&quot;I|&quot;/g,
                  ""
                )}
              </p>
            )}

            {field_dc_date_issued && (
              <p className="dctext">
                <span className="bold">Issue Date:</span>{" "}
                {field_dc_date_issued.replace(/&#039;s|&#039;|&quot;I|&quot;/g, "")}
              </p>
            )}

            {field_dc_publisher?.trim() && (
              <>
                <p className="dctext">
                  <span className="bold">Source:</span>{" "}
                  {field_dc_publisher.replace(/&#039;s|&#039;|&quot;I|&quot;/g, "")}
                </p>
                <p className="dctext">
                  <span className="bold">Publisher:</span>{" "}
                  {field_dc_publisher.replace(/&#039;s|&#039;|&quot;I|&quot;/g, "")}
                </p>
              </>
            )}

            {location.pathname.includes("archives") &&
              field_dc_description_abstract && (
                <p className="dctext">
                  <span className="bold">Description:</span>{" "}
                  {field_dc_description_abstract.replace(
                    /&#039;s|&#039;|&quot;I|&quot;/g,
                    ""
                  )}
                </p>
              )}

            {location.pathname.includes("archives") && (
              <p className="dctext">
                <span className="bold">Received from:</span>{" "}
                {(field_parent_library_name ||
                  field_parent_dspace_community_na)?.replace(
                  /&#039;s|&#039;|&quot;I|&quot;/g,
                  ""
                )}
              </p>
            )}

            {field_dc_type && (
              <p className="dctext">
                <span className="bold">Type:</span>{" "}
                {field_dc_type.replace(/&#039;s|&#039;|&quot;I|&quot;/g, "")}
              </p>
            )}
          </Col>
        </Row>

        <Row>
          <DublinCoreCard detailData={detailData} />
        </Row>
      </Container>

      {/* QR Code Modal */}
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
    </div>
  );
};

export default TextualRepositoryDetails;
