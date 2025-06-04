import React, { useRef, useState, useContext } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import DublinCoreCard from "../../components/Card/DublinCoreCard";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextData } from "../Store/FetchApiData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImagesDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Share2 } from 'react-feather';
import { faQrcode, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Qrcode from "./Qrcode";
import SocialShare from "./SocialShare";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css"; 

const ImagesDetails = ({ detailData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fetchedData } = useContext(ContextData);

  const {
    title,
    field_dc_date_issued,
    field_dc_description_abstract,
    field_dc_language_iso,
    field_pdf_digital_file,
    field_dc_type,
    field_dc_description,
    field_dc_format_extent,
    field_parent_library_name,
    field_dc_publisher,
    field_dc_subject,
    field_dc_alternativetitle,
    field_dc_contributor_author,
    field_parent_dspace_community_na,
    field_digital_image_file,
    field_painting_writeups,
    field_paintings_image,
  } = detailData;

 const images = (field_digital_image_file || "")
  .split(",")
  .map((img) => img.trim())
  .filter((img) => img); // removes empty strings

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);

  const domainName = "http://icvtesting.nvli.in";
  const fullImageUrls = images.map((img) => `${domainName}${img}`);

  const updateFieldCuisineContent = (htmlContent) => {
    if (!htmlContent) return "";
    return htmlContent.replace(/src=\"\/(.*?)\"/g, `src=\"${domainName}/$1\"`);
  };

  return (
    <>
      <Container fluid>
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
      </Container>

      <Container fluid>
        <Row>
          
              {images.length > 0 &&  (
                <><Col md={6} sm={12}>
            <div className="card bg-dark text-dark h-100">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => setNav1(slider)}
                    arrows={false}
                    fade={true}
                    afterChange={(current) => setPhotoIndex(current)}
                  >
                    {images.map((img, index) => (
                      <div key={index}>
                        <Image
                          onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                          }}
                          style={{
                            height: "400px",
                            width: "100%",
                            objectFit: "contain",
                            marginTop: "5px",
                            cursor: "zoom-in",
                          }}
                          src={`${domainName}${img}`}
                          alt={`Image ${index + 1}`}
                        />
                        <p style={{ textAlign: "center", marginTop: "10px" }}>
                          <strong>{`${(title || "").replaceAll("&quot;", "").replaceAll("&#039;", "'").trim()} (Image ${index + 1})`}</strong>
                        </p>
                      </div>
                    ))}
                  </Slider>

                  {images.length > 1 && (
                    <Slider
                      asNavFor={nav1}
                      ref={(slider) => setNav2(slider)}
                      slidesToShow={Math.min(6, images.length)}
                      swipeToSlide
                      focusOnSelect
                      arrows
                      className="mt-3"
                    >
                      {images.map((img, index) => (
                        <div key={index} style={{ padding: "5px" }}>
                          <img
                            src={`${domainName}${img}`}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "contain",
                              borderRadius: "5px",
                              border: "2px solid #ddd",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setPhotoIndex(index);
                              setIsOpen(true);
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  )}</div>
          </Col>
                </>
              )}
            

          {location.pathname.includes("portfolio") && field_painting_writeups ? (
            <Col md={12} sm={12}>
              <div className="card bg-light p-2 h-100">
                <div className="mt-4">
                  <div
                    className="dctext"
                    style={{ marginLeft: "4px" }}
                    dangerouslySetInnerHTML={{
                      __html: updateFieldCuisineContent(field_painting_writeups),
                    }}
                  />
                </div>
              </div>
            </Col>
          ) : (
            <Col md={6} sm={12}>
              <div className="card bg-light p-2 h-100">
                <Row className="card bg-icpcolor shadow text-white m-1 row">
                  <h5 className="p-1 m-0">{(title || "").replaceAll("&#039;", `'`).replaceAll("&quot;", "").trim()}</h5>
                </Row>

                {field_dc_subject?.trim() && (
                  <p
                    className="dctext"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="bold">Keywords:</span> ${field_dc_subject?.replaceAll("\r\n", ", ") || ""}`,
                    }}
                  />
                )}

                {field_dc_contributor_author && (
                  <p className="dctext"><span className="bold">Author:</span> {field_dc_contributor_author}</p>
                )}

                {field_dc_date_issued && (
                  <p className="dctext"><span className="bold">Issue Date:</span> {field_dc_date_issued}</p>
                )}

                {field_dc_publisher?.trim() && (
                  <>
                    <p className="dctext"><span className="bold">Source:</span> {field_dc_publisher}</p>
                    <p className="dctext"><span className="bold">Publisher:</span> {field_dc_publisher}</p>
                  </>
                )}

                {location.pathname.includes("museum-collections") && field_dc_description && (
                  <p className="dctext"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="bold">Description:</span> ${field_dc_description || ""}`,
                    }}
                  />
                )}

                {location.pathname.includes("archives") && field_dc_description_abstract && (
                  <p className="dctext"><span className="bold">Description:</span> {field_dc_description_abstract}</p>
                )}

                {location.pathname.includes("images") && field_dc_description && (
                  <p className="dctext"><span className="bold">Description:</span> {field_dc_description}</p>
                )}

                {(location.pathname.includes("museum-collections") ||
                  location.pathname.includes("archives") ||
                  location.pathname.includes("images")) && (
                  <p className="dctext">
                    <span className="bold">Received from:</span>{" "}
                    {field_parent_library_name || field_parent_dspace_community_na}
                  </p>
                )}

                {field_dc_type && (
                  <p className="dctext"><span className="bold">Type:</span> {field_dc_type}</p>
                )}
              </div>
            </Col>
          )}
        </Row>

        <Row>
          <DublinCoreCard detailData={detailData} />
        </Row>
      </Container>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={fullImageUrls.map((src) => ({ src }))}
        index={photoIndex}
        plugins={[Zoom]}
         zoom={{
    maxZoomPixelRatio: 3,
    zoomInMultiplier: 2,
    doubleTapDelay: 300,
    doubleClickDelay: 300,
    wheelZoomDistanceFactor: 100,
  }}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
      />

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Qrcode value={window.location.href} />
        </Modal.Body>
      </Modal>

      <Modal show={Shareshow} onHide={() => setShareShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SocialShare value={window.location.href} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImagesDetails;
