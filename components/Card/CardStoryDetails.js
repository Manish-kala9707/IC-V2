import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ArcQR from "../../image/QR 1.png";
import { Share2, BookOpen, FileText } from "react-feather";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import SocialShare from "./SocialShare";
import Carousel from "react-bootstrap/Carousel";
import Divider from "../../image/SwirlDivider.png";
import Qrcode from "./Qrcode";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowLeft } from "react-feather";
import Image from "react-bootstrap/Image";
function CardStoryDetails({ detailData, setDetailData }) {
  const location = useLocation();
  const navigate = useNavigate();
  let {
    title,
    field_snippets_thumbnail,
    field_snippets_writeups,
    type,
    body,
    field_ich_videos,
    field_ich_image_files,
    field_states_uts_,
    field_district,
    field_ddr_category,
    field_thumnail_images,
    field_cuisine_content,
    field_choose_ich_category,
    field_ich_state,
    field_ich_description,
    field_forts_videos_streaming_lin,
    field_instrument_image,
    field_photo_essay_thumbnail,
    field_instrument_first_descripti,
    field_instrument_material,
    field_instrument_type,
    field_musical_instrument_state,
    field_story_short_descp,
    field_story_part_2,
    field_instrument_description,
    field_pdf_digital_file,
    field_timeless_image_gallery,
    field_timeless_trends_category,
    field_about_the_image,
    field_highlight,
    field_organization,
    field_timestrends_history,
    field_ich_html_writeup,
  } = detailData;

  const imageUrls = [
    ...(field_thumnail_images
      ? field_thumnail_images.split(",").map((url) => url.trim())
      : []),
    // ...(field_snippets_thumbnail ? field_snippets_thumbnail.split(',').map(url => url.trim()) : []),
    ...(field_ich_image_files
      ? field_ich_image_files.split(",").map((url) => url.trim())
      : []),
  ];
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const fullscreenRef = React.useRef(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [timelessImageNumber, setTimelessImageNumber] = useState(0);
  const domainName = "http://icvtesting.nvli.in";

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxIsOpen(true);
  };
  const backButton = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };
  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  // Function to dynamically prepend domain to image sources in field_cuisine_content
  const updateFieldCuisineContent = (htmlContent) => {
    if (!htmlContent) return "";

    // Use regex to find all image src attributes and prepend the domain name
    return htmlContent.replace(/src="\/(.*?)"/g, `src="${domainName}/$1"`);
  };

  return (
    <>
      <Row>
        <Col md={6} xs={6} lg={6}>
          <ArrowLeft
            className="backtoprevious"
            onClick={backButton}
            size={30}
          />
        </Col>
        <Col
          lg={6}
          xs={6}
          md={6}
          className="d-flex justify-content-end align-items-center pe-4"
        >
          <a onClick={ArcShareShow} className="me-3 cursor-pointer">
            <Share2 size={33} className="icon-stroke" strokeWidth={1} />
          </a>
          <a onClick={handleShow} className="cursor-pointer">
            <FontAwesomeIcon icon={faQrcode} className="fa-thin" size="2x" />
          </a>

          {/* QR Code Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>QR Code</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Qrcode value={window.location.href} />
            </Modal.Body>
          </Modal>

          {/* Share Modal */}
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

      {field_ich_videos && (
        <div style={{ marginTop: "0px", backgroundColor: "#000" }}>
          <Container className="p-0">
            <Row>
              {field_ich_image_files ? (
                <>
                  <Col xs={12} md={6}>
                    {field_ich_image_files && (
                      <img
                        src={field_ich_image_files}
                        className="img-reponsive"
                        style={{ display: "none" }}
                      ></img>
                    )}
                    {imageUrls && imageUrls.length === 1 ? (
                      <img
                        className="d-block w-100 img-responsive"
                        src={`http://icvtesting.nvli.in${imageUrls[0]
                          .split(".")
                          .slice(0, -1)
                          .join(".")}.webp`}
                        alt={title}
                        title={title}
                        onClick={() => openLightbox(0)}
                        onError={(e) => {
                          e.target.src = `http://icvtesting.nvli.in${imageUrls[0]}`; // Fallback to original image if WebP fails to load
                        }}
                      />
                    ) : (
                      <Carousel showArrows={true}>
                        {imageUrls &&
                          imageUrls.map((url, idx) => (
                            <Carousel.Item
                              key={idx}
                              onClick={() => openLightbox(idx)}
                            >
                              <img
                                className="d-block w-100 img-responsive"
                                src={`http://icvtesting.nvli.in${url
                                  .split(".")
                                  .slice(0, -1)
                                  .join(".")}.webp`}
                                alt={title}
                                onError={(e) => {
                                  e.target.src = `http://icvtesting.nvli.in${url}`; // Fallback to original image if WebP fails to load
                                }}
                              />
                            </Carousel.Item>
                          ))}
                      </Carousel>
                    )}
                    {lightboxIsOpen && (
                      <Lightbox
                        open={lightboxIsOpen}
                        plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
                        close={closeLightbox}
                        slides={imageUrls.map((url) => ({
                          src: `http://icvtesting.nvli.in${url}`,
                          alt: title,
                          // Add width, height, and srcSet properties if needed
                        }))}
                        currentIndex={selectedImageIndex}
                      />
                    )}
                  </Col>
                  <Col xs={12} md={6} className="p-0">
                    <ReactPlayer
                      style={{ margin: "0 auto", backgroundColor: "#000" }}
                      url={field_ich_videos}
                      controls={true}
                    />
                  </Col>
                </>
              ) : (
                <Col xs={12} className="p-0">
                  <ReactPlayer
                    style={{ margin: "0 auto", backgroundColor: "#000" }}
                    url={field_ich_videos}
                    controls={true}
                  />
                </Col>
              )}
            </Row>
          </Container>
        </div>
      )}
      {field_ich_html_writeup && field_ich_html_writeup ? (
        <Col md={12} className="pb-5 text-justify">
          <div
            dangerouslySetInnerHTML={{
              __html: updateFieldCuisineContent(field_ich_html_writeup),
            }}
            className="unescotxt"
          ></div>
        </Col>
      ) : (
        <Col md={12} className=""></Col>
      )}

      {!location.pathname.includes("forts-of-india") &&
        field_forts_videos_streaming_lin && (
          <Container fluid>
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="p-0">
                <ReactPlayer
                  style={{ margin: "0 auto", backgroundColor: "#000" }}
                  url={field_forts_videos_streaming_lin}
                  controls={true}
                />
              </Col>
            </Row>{" "}
          </Container>
        )}

      {location.pathname.includes("discovering-the-forts-of-india") &&
        field_forts_videos_streaming_lin && (
          <Container fluid>
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="p-0">
                <ReactPlayer
                  style={{ margin: "0 auto", backgroundColor: "#000" }}
                  url={
                    field_forts_videos_streaming_lin.match(
                      /<source\s+[^>]*src=["']([^"']+)["']/i
                    )[1]
                  }
                  controls={true}
                />
              </Col>
            </Row>{" "}
          </Container>
        )}
      <Container fluid className="archive-header">
        <Row className="pt-2">
          <Col md={8} xs={6} className="arctitle"></Col>
        </Row>
      </Container>
      <Container className="archive-header">
        {!location.pathname.includes("food-and-culture") &&
        !location.pathname.includes("books") &&
        !location.pathname.includes("photoessay") &&
        !location.pathname.includes("history") &&
        location.pathname.includes("timeless") ? (
          <Row>
            <Col lg={4}>
              <Row>
                <img
                  className=" img-responsive"
                  src={`http://icvtesting.nvli.in${field_timeless_image_gallery
                    .split(",")
                    [timelessImageNumber].replaceAll(" ", "")}`}
                ></img>
              </Row>
              <Row
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "flex-start",
                  marginTop: "10px",
                }}
              >
                {field_timeless_image_gallery.split(",").length > 2 &&
                  field_timeless_image_gallery.split(",").map((data, index) => {
                    return (
                      <img
                        onClick={() => setTimelessImageNumber(index)}
                        style={{
                          height: "70px",
                          width: "70px",
                          cursor: "pointer",
                        }}
                        src={`http://icvtesting.nvli.in${data.replaceAll(
                          " ",
                          ""
                        )}`}
                      />
                    );
                  })}
              </Row>
            </Col>
            <Col
              lg={8}
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <Row>
                <h1 className="text-center">Highlights</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_highlight,
                  }}
                  className="unescotxt"
                ></div>
              </Row>
              <Row>
                <h1 className="text-center">About the Image</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_about_the_image,
                  }}
                  className="unescotxt"
                ></div>
              </Row>
              <Row>
                <h1 className="text-center">where to find it?</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_organization,
                  }}
                  className="unescotxt"
                ></div>
              </Row>
            </Col>
          </Row>
        ) : (
          ""
        )}

        {location.pathname.includes("food-and-culture") && (
          <div
            dangerouslySetInnerHTML={{
              __html: updateFieldCuisineContent(field_cuisine_content),
            }}
            className="unescotxt"
          ></div>
        )}
      </Container>

      <Container>
        <Row>
          <Col>
            {field_choose_ich_category && (
              <>
                <p className="dctext pb-1">
                  {" "}
                  <span className="bold"> Domain:</span>{" "}
                  {field_choose_ich_category}{" "}
                </p>
                <hr />
              </>
            )}
            {field_ich_state && (
              <>
                <p className="dctext pb-1">
                  {" "}
                  <span className="bold"> State:</span> {field_ich_state}{" "}
                </p>
                <hr />
              </>
            )}
            {field_ich_description && (
              <>
                <b className="pb-2">Description</b>
                <div
                  dangerouslySetInnerHTML={{
                    __html: updateFieldCuisineContent(field_ich_description),
                  }}
                  className="unescotxt"
                ></div>
              </>
            )}

            {location.pathname.includes("timeless-trends/") &&
              field_timestrends_history && (
                <>
                  <b className="pb-2">Description</b>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: field_timestrends_history,
                    }}
                    className="unescotxt"
                  ></div>
                </>
              )}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {!location.pathname.includes("snippets") &&
          field_snippets_writeups ? (
            <Col md={12} className="pb-5 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: updateFieldCuisineContent(field_snippets_writeups),
                }}
                className="unescotxt"
              ></div>
            </Col>
          ) : (
            <Col md={12} className=""></Col>
          )}

          {location.pathname.includes("snippets") && field_snippets_writeups ? (
            <Col md={12} className="pb-5 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: updateFieldCuisineContent(field_snippets_writeups),
                }}
                className="unescotxt"
              ></div>
            </Col>
          ) : (
            <Col md={12} className=""></Col>
          )}

          {location.pathname.includes("stories") && field_story_part_2 ? (
            <div dangerouslySetInnerHTML={{ __html: field_story_part_2 }} />
          ) : (
            <Col md={12} className=""></Col>
          )}
          {location.pathname.includes("gazettes-and-gazetteers") &&
          field_pdf_digital_file ? (
            <div dangerouslySetInnerHTML={{ __html: field_pdf_digital_file }} />
          ) : (
            <Col md={12} className=""></Col>
          )}

          {[
            "Personality",
            "Traditions &amp; Art Forms",
            "Events",
            "DDR Story",
          ].includes(field_ddr_category) && (
            <div className="col-md-6 offset-md-3 btn-group pb-5">
              <button type="button" className="btn btn-info">
                <b>Category:</b> {field_ddr_category}
              </button>
              <button type="button" className="btn btn-warning">
                <b>District:</b> {field_district}
              </button>
              <button type="button" className="btn btn-info">
                <b>State:</b> {field_states_uts_}
              </button>
            </div>
          )}

          {body ? (
            <Col md={12} className="pb-5 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: updateFieldCuisineContent(body),
                }}
                className="unescotxt"
              ></div>
            </Col>
          ) : (
            <Col md={12} className=""></Col>
          )}
          {location.pathname.includes("musical-instruments-of-india") && (
            <>
              <Row>
                <div
                  dangerouslySetInnerHTML={{
                    __html: field_instrument_first_descripti,
                  }}
                  className="unescotxt"
                ></div>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <img
                    className=" img-responsive"
                    src={`http://icvtesting.nvli.in${field_instrument_image}`}
                  ></img>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  {field_instrument_description}
                </Col>
              </Row>

              <Row>
                <p className="dctext">
                  <span className="bold">State:</span>{" "}
                  {field_musical_instrument_state}
                </p>
                <p className="dctext">
                  <span className="bold">Material:</span>{" "}
                  {field_instrument_material}
                </p>
              </Row>
            </>
          )}
          {/* 
          {field_cuisine_content ? (
            <Col md={12} className="pb-5 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: updateFieldCuisineContent(field_cuisine_content),
                }}
                className="unescotxt"
              ></div>
            </Col>
          ) : (
            <Col md={12} className=""></Col>
          )} */}
        </Row>

        {/* <Row>
          <Col className="text-center">
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
        </Row> */}
      </Container>
    </>
  );
}

export default CardStoryDetails;
