import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DublinCoreCard from "../../components/Card/DublinCoreCard";
import { Share2, BookOpen, FileText } from "react-feather";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import SocialShare from "../../components/Card/SocialShare";
import Qrcode from "../../components/Card/Qrcode";
import { Modal } from "react-bootstrap";
import { faQrcode, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { useLocation, useNavigate } from "react-router-dom";
 
const VideosDetails = ({ detailData }) => {
  const location = useLocation(); 
   const navigate = useNavigate();
  const [showShare, setShowShare] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  
  let {
    field_timeline_video_url,
    field_video_streaming_url: rawVideoUrls,
    field_painting_portfolio_thumbna,
    body,
    title,
    field_dc_date_issued,
    field_dc_description_abstract,
    field_dc_language_iso,
    field_pdf_digital_file,
    field_dc_type,
    field_dc_format_extent,
    field_parent_library_name,
    field_dc_description,
    field_dc_description_sponsorship,
    field_dc_format_mimetype,
    field_dc_date_available,
    field_dc_date_accessioned,
    field_type_of_content,
    field_ic_video_streaming_url,
    field_ich_videos,
    field_dc_publisher,
    field_dc_relation_ispartofseries,
    field_dc_format_duration,
    field_dc_contributor,
    field_dc_format_source,
    field_forts_videos_streaming_lin,
    field_dc_source,
    field_dc_subject,
    field_dc_alternativetitle,
    field_dc_contributor_author,
    field_dc_coverage_temporal,
    field_dc_identifier_accessionnum,
    field_dc_identifier_other,
    field_flip_book_link,
    field_parent_dspace_community_na,
    field_digital_image_file,
    field_ich_state,
    field_ich_description,
    field_textile_streaming_video_,
    field_artisian_video,
    field_textile_content_image,
    field_ic_video_streaming_url_1,
  } = detailData;
 
  const videoList = rawVideoUrls
    ? rawVideoUrls.split(",").map((url) => url.trim())
    : [];
 
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
 
  return (
    <><Container fluid>
      {videoList.length > 1 && (
        <Row className="mb-3 justify-content-center">
          {videoList.map((video, index) => (
            <Col key={index} xs="auto">
              <button
                onClick={() => setSelectedVideoIndex(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: selectedVideoIndex === index ? "#007bff" : "#6c757d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                V - {index + 1}
              </button>
            </Col>
          ))}
        </Row>
      )}



      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          padding: "30px",
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            src={videoList[selectedVideoIndex]}
            controls
            controlsList="nodownload"
           
            onContextMenu={(e) => e.preventDefault()}
            style={{
              display: "flex",
              width: "80%",
              borderRadius: "8px",
              height: "70vh",
              justifyContent: "center",
              border: "2px solid white",
            }} />
        </Col>
      </Row>

    </Container><Container fluid>
        <Row className="bg-light p-1 mb-3">
          <Col md={10} xs={6}>
            <button className="btn btn-dark rounded-circle p-2" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '30px' }} />
            </button>
          </Col>
          <Col md={2} xs={6} className="text-end">
            <button onClick={() => setShareShow(true)} className="btn btn-warning p-1 me-2 text-dark">
              <Share2 size={40} strokeWidth={1} />
            </button>
            <button onClick={() => setShow(true)} className="btn btn-warning">
              <FontAwesomeIcon icon={faQrcode} size="2x" />
            </button>
          </Col>
        </Row>
      </Container><Container fluid>
        <Row className="metadata justify-content-center mt-4">
          <Col className="metadata-col" xs={12} md={10} lg={10}>
            <h5 className="metadata-heading mb-3">{title}</h5>

            {field_dc_subject?.trim() && (
              <p className="dctext">
                <span className="bold">Keywords:</span>{" "}
                {field_dc_subject && field_dc_subject.replaceAll("\r\n", ", ")
                  .replaceAll("&#039;s", "")
                  .replaceAll("&#039;", "")
                  .replaceAll("&quot;I", "")
                  .replaceAll("&quot;", "")}
              </p>
            )}

            {field_dc_contributor_author && (
              <p className="dctext">
                <span className="bold">Author:</span>{" "}
                {field_dc_contributor_author.replaceAll("\r\n", ", ")
                  .replaceAll("&#039;s", "")
                  .replaceAll("&#039;", "")
                  .replaceAll("&quot;I", "")
                  .replaceAll("&quot;", "")}
              </p>
            )}

            {field_dc_date_issued && (
              <p className="dctext">
                <span className="bold">Issue Date:</span> {field_dc_date_issued
                  .replaceAll("&#039;s", "")
                  .replaceAll("&#039;", "")
                  .replaceAll("&quot;I", "")
                  .replaceAll("&quot;", "")}
              </p>
            )}

            {field_dc_publisher?.trim() && (
              <>
                <p className="dctext">
                  <span className="bold">Source:</span> {field_dc_publisher.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "")}
                </p>
                <p className="dctext">
                  <span className="bold">Publisher:</span> {field_dc_publisher.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "")}
                </p>
              </>
            )}

            {location.pathname.includes("archives") &&
              field_dc_description_abstract && (
                <p className="dctext">
                  <span className="bold">Description:</span>{" "}
                  {field_dc_description_abstract.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "")}
                </p>
              )}

            {location.pathname.includes("archives") && (
              <p className="dctext">
                <span className="bold">Received from:</span>{" "}
                {field_parent_library_name.replaceAll("\r\n", ", ")
                  .replaceAll("&#039;s", "")
                  .replaceAll("&#039;", "")
                  .replaceAll("&quot;I", "")
                  .replaceAll("&quot;", "") || field_parent_dspace_community_na.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "")}
              </p>
            )}

            {field_dc_type && (
              <p className="dctext">
                <span className="bold">Type:</span> {field_dc_type.replaceAll("\r\n", ", ")
                  .replaceAll("&#039;s", "")
                  .replaceAll("&#039;", "")
                  .replaceAll("&quot;I", "")
                  .replaceAll("&quot;", "")}
              </p>
            )}
          </Col>
        </Row>

        <Row>
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
              <>
                {/* <div>{window.location.href}</div> */}
                <SocialShare value={window.location.href} />
              </>
            </Modal.Body>
          </Modal>
        </Row>
        <Row>
          <DublinCoreCard detailData={detailData} />
        </Row>
      </Container></>
  );
};
 
export default VideosDetails;
 
 