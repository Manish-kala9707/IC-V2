import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ArcQR from "../../image/QR 1.png";
import ArcShare from "../../image/share-2.png";
import SocialShare from "./SocialShare";
import Carousel from "react-bootstrap/Carousel";
import Divider from "../../image/SwirlDivider.png";
import ReactPlayer from "react-player/lazy";
import Qrcode from "./Qrcode";
import { useLocation, useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Share2 } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const domainName = "http://icvtesting.nvli.in";
function UnescoCardDetails({ detailData, setDetailData }) {
  console.log("detailData", detailData);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  let {
    title,
    nid,
    field_unesco_data_thumbnail_1,
    field_unesco_image_gallery,
    field_unesc,
    field_choose_unesco_category,
    field_from_unesco,
    field_type_of_content,
    field_more_information,
    field_unesco_data_thumbnail,
    field_ic_video_streaming_url,
  } = detailData;
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const updateFieldCuisineContent = (htmlContent) => {
    if (!htmlContent) return "";
    return htmlContent.replace(/src="\/(.*?)"/g, `src="${domainName}/$1"`);
  };
  const fullscreenRef = React.useRef(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };
  return (
    <div>
      <Container fluid className="p-0 bg-black">
        <Row>
          {field_unesc && (
            <Col md={8} className="offset-2">
              <Carousel data-bs-theme="dark">
                {field_unesc.split(",").map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={`http://icvtesting.nvli.in${image.trim()}`}
                      alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption>
                      <h5>{title}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          )}
        </Row>
      </Container>

      <Container fluid className="archive-header">
        <Row className="pt-2">
          <Col xs={1} className="arcicon">
            {/* <img src={`../../images/icon/${field_type_of_content}.png`} alt={field_type_of_content} title={field_type_of_content}   /> */}
            <img
              src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/${
                location.pathname.split("/")[1]
              }.png`}
              alt={field_type_of_content}
              title={field_type_of_content}
              className="img-responsive"
            />
          </Col>
          <Col xs={9} className="arctitle"></Col>

          <Col
            xs={1}
            className="arcqrcode pt-3 mt-0 pull-right fabox pr-0"
          ></Col>
          <Col xs={1} className="arcqrcode pt-3 mt-0 pull-right">
            <a onClick={ArcShareShow}>
              {" "}
              <Share2 size={48} className="icon-stroke" strokeWidth={1} />{" "}
            </a>{" "}
            &nbsp;
            <a onClick={handleShow}>
              <FontAwesomeIcon icon={faQrcode} className="fa-thin" size="3x" />{" "}
            </a>
          </Col>
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
                <SocialShare value={window.location.href} />
              </>
            </Modal.Body>
          </Modal>
        </Row>

        <Row>
          <Col>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <img
              src={Divider}
              alt="Caption Divider"
              style={{
                marginTop: "-17px",
                width: "90px",
                height: "15px",
                backgroundColor: "transparent",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className="pb-5 text-justify">
            {field_from_unesco && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: updateFieldCuisineContent(field_from_unesco),
                  }}
                  className="unescotxt"
                ></div>
              </>
            )}
          </Col>
          <Col md={12}>
            {field_more_information && (
              <>
                <h2 className="unescoheading pb-5">{t("More Information")}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: updateFieldCuisineContent(field_more_information),
                  }}
                  className="unescotxt"
                ></div>
              </>
            )}
          </Col>

          <Col md={12}>
            {field_ic_video_streaming_url && (
              <ReactPlayer
                style={{ margin: "0 auto", backgroundColor: "#000" }}
                url={field_ic_video_streaming_url}
                controls={true}
              />
            )}
          </Col>
        </Row>
      </Container>

      <Container>
        {field_unesco_image_gallery && (
          <Row>
            <h2 className="unescoheading pb-5">{t("Gallery")}</h2>
            {field_unesco_image_gallery.split(",").map((image, index) => (
              <Col md={3} className="p-2" key={index}>
                <img
                  className="d-block w-100"
                  src={`http://icvtesting.nvli.in${image.trim()}`}
                  onClick={() => openLightbox(0)}
                  alt={`Slide ${index + 1}`}
                />
                <h5></h5>
              </Col>
            ))}
          </Row>
        )}
        {lightboxIsOpen && (
          <Lightbox
            open={lightboxIsOpen}
            plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
            close={closeLightbox}
            slides={field_unesco_image_gallery
              .split(",")
              .map((image, index) => ({
                src: `http://icvtesting.nvli.in${image.trim()}`,
                alt: title,
                // Optionally add width, height, or srcSet if needed
              }))}
            currentIndex={selectedImageIndex}
          />
        )}
      </Container>
    </div>
  );
}

export default UnescoCardDetails;
