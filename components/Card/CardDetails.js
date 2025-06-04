import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import MyBook from "./Mybook";
import Qrcode from "./Qrcode";
import SocialShare from "./SocialShare";
import { Share2, BookOpen, FileText } from "react-feather";
import { faFilePdf, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLocation, useNavigate } from "react-router-dom";
import DocIcon from "../../image/icon/document-text.svg";
import SolidDocIcon from "../../image/icon/document-text_Solid.svg";
import BookIcon from "../../image/icon/book-open.svg";
import SolidBookIcon from "../../image/icon/book-open_Solid.svg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import ShimmerCardDetails from "./ShimmerCardDetails";
import DublinCoreCard from "./DublinCoreCard";
import PdfFlipbookCard from "./PdfFlipbookCard";
const CardDetails = ({
  detailData,
  response,
  fetchedData,
  setDetailData,
  updatePageNumber,
}) => {
  const location = useLocation();
  let navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const [showFirstData, setShowFirstData] = useState(false);
  const [showSecondData, setShowSecondData] = useState(false);

  const handleFirstButtonClick = () => {
    setShowFirstData(true);
    setShowSecondData(false);
  };

  const handleSecondButtonClick = () => {
    setShowFirstData(false);
    setShowSecondData(true);
  };
  useEffect(() => {
    
    setShowFirstData(true);
    setShowSecondData(false);
  }, []);

  let arr = Array(5).fill(undefined);

  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  let { nid } = useParams();
  let {
    field_timeline_video_url,
    field_video_streaming_url,
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
    field_ich_html_writeup,
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


   
 
  let PartsPdfarr =field_pdf_digital_file && field_pdf_digital_file
    ? detailData.field_pdf_digital_file.split(",")
    : [];

  const [link, setLink] = useState();
  const imageFiles = field_digital_image_file && field_digital_image_file
    ? field_digital_image_file.split(",")
    : [];

  useEffect(() => {
    // Set default link to the first image or file on mount
    if (imageFiles.length > 0) {
      setLink(imageFiles[0].trim());
    }
  }, [imageFiles]);

  const updateFieldCuisineContent = (htmlContent) => {
    if (!htmlContent) return "";
  
    // Use regex to find all image src attributes and prepend the domain name
    return htmlContent.replace(/src="\/(.*?)"/g, `src="${domainName}/$1"`);
  }
  return (
    <>
    {detailData ? (
      <>
        <PdfFlipbookCard
          field_pdf_digital_file={field_pdf_digital_file}
          showFirstData={showFirstData}
          showSecondData={showFirstData}
        />
        {showSecondData && (
          <MyBook file={`http://icvtesting.nvli.in${field_pdf_digital_file}`} />
        )}

        <Container fluid>
          { !location.pathname.includes("flagship-events/international-museum-expo") && field_video_streaming_url && (
            <Row style={{ marginTop: "0px", background: "black" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_video_streaming_url}
                    controls
                    controlsList="nodownload" // Prevent download option
                    disablePictureInPicture // Disable Picture-in-Picture mode
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}

          {field_ic_video_streaming_url && !location.pathname.includes("flagship-events/international-museum-expo")  && !location.pathname.includes("historic-cities-of-india") && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_ic_video_streaming_url}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}
          {field_ic_video_streaming_url && !location.pathname.includes("historic-cities-of-india") && location.pathname.includes("flagship-events/international-museum-expo") && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_ic_video_streaming_url.match(/<source[^>]+src=["']([^"']+)["']/)[1]}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}

          {field_forts_videos_streaming_lin && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_forts_videos_streaming_lin}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}
           {location.pathname.includes("historic-cities-of-india") && field_ic_video_streaming_url_1 && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_ic_video_streaming_url_1.match(/href="([^"]+\.mp4)"/)[0].match(/href="([^"]+)"/)[1]}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}
          {field_textile_streaming_video_ && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_textile_streaming_video_}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}

          {field_ich_videos && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_ich_videos}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}
          {field_timeline_video_url && (
            <Row style={{ marginTop: "0px", backgroundColor: "#000" }}>
              <Col xs={12} className="arcicon">
                <div>
                  <video
                    src={field_ich_videos}
                    controls
                    controlsList="nodownload" // Prevent download option
                    disablePictureInPicture // Disable Picture-in-Picture mode
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
                    style={{
                      display: "flex",
                      width: "60%",
                      borderRadius: "8px",
                      height: "50%",
                      justifyContent: "center",
                      position: "relative",
                      left: "20%",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}


          {location.pathname.includes("Artisans") && (
            <>
              <Row style={{ paddingTop: "20px" }}>
                <Col xs={12} lg={8} >
                    <video
                      src={field_artisian_video}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                        display: "flex",
                        width: "100%",
                        borderRadius: "8px",
                        height: "100%",
                        justifyContent: "center",
                        position: "relative",
                        border: "2px solid white",
                      }}
                    />
                </Col>
               
                  <Col
                    lg={4}
                    dangerouslySetInnerHTML={{ __html: body }}
                  ></Col>
               
              </Row>
              <Row lg={12}>
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 2000, disableOnInteraction: false }}
                      modules={[Navigation, Pagination, Autoplay]}
                    >
                      {field_textile_content_image
                        .split(",")
                        .map((data, index) => (
                          <SwiperSlide key={index} style={{width:"20%"}}>
                            <Image
                              style={{ height: "60%", width: "98%" }}
                              src={`http://icvtesting.nvli.in${data.trim()}`}
                              alt={`Image ${index + 1}`}
                            />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </Row>
            </>
          )}
          <Row className="pt-2">
            {location.pathname.includes("manuscripts") &&
              !field_pdf_digital_file && (
                <Carousel>
                  {field_digital_image_file &&
                    field_digital_image_file.split(",").map((data, index) => {
                      return (
                        <Carousel.Item>
                          <Image
                            style={{ height: "500px", width: "100%" }}
                            src={`http://icvtesting.nvli.in${data.trim()}`}
                          />
                          <Carousel.Caption>
                            <h3>{`${title}( image-${index + 1})`}</h3>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })}
                </Carousel>
              )}

            {!location.pathname.includes("diversity") && location.pathname.includes("images") &&
              !field_pdf_digital_file && (
                <Carousel>
                  {field_digital_image_file &&
                    field_digital_image_file.split(",").map((data, index) => {
                      return (
                        <Carousel.Item>
                          <Image
                            style={{ height: "500px", width: "90%" }}
                            src={`http://icvtesting.nvli.in${data.trim()}`}
                          />
                          <Carousel.Caption>
                            <h3>{`${title}( image-${index + 1})`}</h3>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })}
                </Carousel>
              )}
            {location.pathname.includes("museum-collections") && (
              <Carousel>
                {field_digital_image_file &&
                  field_digital_image_file.split(",").map((data, index) => {
                    return (
                      <Carousel.Item>
                        <Image
                          style={{ height: "500px", width: "100%" }}
                          src={`http://icvtesting.nvli.in${data.trim()}`}
                        />
                        <Carousel.Caption>
                          <h3>{`${title}( image-${index + 1})`}</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
            )}

            {location.pathname.includes("photo-archives") && (
              field_digital_image_file.split(",").length>1?(<Carousel>
                {field_digital_image_file &&
                  field_digital_image_file.split(",").map((data, index) => {
                    return (
                      <Carousel.Item>
                        <Image
                          style={{ height: "500px", width: "100%" }}
                          src={`http://icvtesting.nvli.in${data.trim()}`}
                        />
                        <Carousel.Caption>
                          <h3>{`${title}( image-${index + 1})`}</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
              </Carousel>):( <img
                style={{ height: "500px", width: "100%" }}
                src={`http://icvtesting.nvli.in${field_digital_image_file}`}
              ></img>)
             
            )}
            {!location.pathname.includes("glimpse") && location.pathname.includes("historic-cities-of-india") && (
              <img
                style={{ height: "500px", width: "100%" }}
                src={`http://icvtesting.nvli.in${field_digital_image_file}`}
              ></img>
            )}

          {location.pathname.includes("freedom") && location.pathname.includes("museum") && (
              <img
                style={{ height: "500px", width: "100%" }}
                className="img-responsive"
                src={`http://icvtesting.nvli.in${field_digital_image_file}`}
              ></img>
            )}
            {location.pathname.includes("freedom") && location.pathname.includes("newspaper") && (
              <img
                style={{ height: "500px", width: "100%" }}
                className="img-responsive"
                src={`http://icvtesting.nvli.in${field_digital_image_file}`}
              ></img>
            )}

            {location.pathname.includes(
              "painting-collections/museum-paintings"
            ) && (
              <img
                style={{ height: "500px", width: "100%" }}
                src={`http://icvtesting.nvli.in${field_digital_image_file}`}
              ></img>
            )}
            {location.pathname.includes("food-images-of-diversity") && (
              <img
                style={{ height: "500px", width: "100%" }}
                src={`http://icvtesting.nvli.in${field_digital_image_file}`}
              ></img>
            )}
            {location.pathname.includes("paintings/portfoliopaintings") && (
              <img
                style={{ height: "500px", width: "100%" }}
                src={`http://icvtesting.nvli.in${field_painting_portfolio_thumbna}`}
              ></img>
            )}


            {/* icons for detail page */}

            <Row>
            {/* <Col lg={6} md={1} xs={2} className="arcicon">
              {!location.pathname.includes("audios") &&
              !location.pathname.includes("manuscripts") &&
              !location.pathname.includes("photo-archives") &&
              !location.pathname.includes("virtual-walkthrough") &&
              !location.pathname.includes("historic-cities-of-india") ? (
                location.pathname.includes("lang=hi") ? (
                  <img
                    src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/${
                      location.pathname.split("/")[2]
                    }.png`}
                    alt={field_type_of_content}
                    title={field_type_of_content}
                    className="img-responsive"
                  />
                ) : (
                  <img
                    src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/${
                      location.pathname.split("/")[1]
                    }.png`}
                    alt={field_type_of_content}
                    title={field_type_of_content}
                    className="img-responsive"
                  />
                )
              ) : (
                ""
              )}
              {location.pathname.includes("audios") ? (
                <img
                  src="http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/AudioBlue_0.png"
                  alt={field_type_of_content}
                  title={field_type_of_content}
                  className="img-responsive"
                />
              ) : (
                ""
              )}
               {location.pathname.includes("historic-cities-of-india") ? (
                <img
                  src="http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/HistoricCities_0.png"
                  alt={field_type_of_content}
                  title={field_type_of_content}
                  className="img-responsive"
                />
              ) : (
                ""
              )}
              {location.pathname.includes("manuscripts") ? (
                <img
                  src="http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/manuscriptOrange.png"
                  alt={field_type_of_content}
                  title={field_type_of_content}
                  className="img-responsive"
                />
              ) : (
                ""
              )}

              {location.pathname.includes("photo-archives") ? (
                <img
                  src="http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/imagesOrange_3.png"
                  alt={field_type_of_content}
                  title={field_type_of_content}
                  className="img-responsive"
                />
              ) : (
                ""
              )}
               {location.pathname.includes("virtual-walkthrough") ? (
                <img
                  src="http://icvtesting.nvli.in/system/files/FortsofIndia/walkthrough.jpg"
                  alt={field_type_of_content}
                  title={field_type_of_content}
                  className="img-responsive"
                />
              ) : (
                ""
              )}
            </Col> */}
            <Col
            lg={6}
              xs={4}
              md={3}
              className="arcqrcode pt-1 mt-0 pull-right text-right"
            >
              <Row>
                <Col>
                <div className="fa-thin-2" onClick={handleFirstButtonClick}>
                    {showFirstData ? (
                      <img
                        src={SolidDocIcon}
                        className="fa-thin"
                        style={{height:"30%"}}
                      ></img>
                    ) : (
                      <img src={DocIcon}  style={{height:"30% !important" }} ></img>
                    )}
                  </div>{" "}
                  &nbsp;</Col>
                <Col>
                  
                <div className="fa-thin-2" onClick={handleSecondButtonClick}>
                    {showSecondData ? (
                      <img  style={{height:"30%"}} src={SolidBookIcon}></img>
                    ) : (
                      <img className="fa-thin"  style={{height:"30%"}} src={BookIcon}></img>
                    )}
                  </div>{" "}
                  &nbsp;</Col>
                <Col>
                <a onClick={ArcShareShow}>
                {" "}
                <Share2 size={25} className="fa-thin" strokeWidth={1} />{" "}
              </a>{" "}
              &nbsp;</Col>
                <Col>
                <a onClick={handleShow}>
                <FontAwesomeIcon
                  icon={faQrcode}
                  className="fa-thin"
                  style={{ fontSize: "25px" }}
                />{" "}
              </a></Col>
              </Row>
              
            </Col>
            </Row>
            
          

            

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
        </Container>
        <Container fluid>
          <Row style={{ marginTop: "20px" }}>
            <Col xs={1}></Col>
            <Col xs={10} className="arctitle">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <hr />
            </Col>
            <Col xs={1}></Col>
          </Row>

          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              {field_dc_subject &&
                field_dc_subject !== null &&
                field_dc_subject !== "" && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Keywords:</span>{" "}
                    {field_dc_subject.replaceAll("\r\n", ",")}{" "}
                  </p>
                )}

              {location.pathname.includes("photo-archives") &&
                field_dc_type &&
                field_dc_type !== null &&
                field_dc_type !== "" && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Keywords:</span>{" "}
                    {field_dc_type.replaceAll("\r\n", ",")}{" "}
                  </p>
                )}
              {field_dc_contributor_author && (
                <p className="dctext">
                  {" "}
                  <span className="bold"> Author:</span>{" "}
                  {field_dc_contributor_author}{" "}
                </p>
              )}
              {field_dc_date_issued && (
                <p className="dctext">
                  {" "}
                  <span className="bold"> Issue Date:</span>{" "}
                  {field_dc_date_issued}{" "}
                </p>
              )}

              {field_dc_publisher &&
                field_dc_publisher !== null &&
                field_dc_publisher !== "" && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Source:</span>{" "}
                    {field_dc_publisher}{" "}
                  </p>
                )}
              {field_dc_publisher && (
                <p className="dctext">
                  {" "}
                  <span className="bold"> Publisher:</span>{" "}
                  {field_dc_publisher}{" "}
                </p>
              )}

              {location.pathname.includes("intangible-cultural-heritage") && (
                <div>
                  <p className="dctext">
                    {location.pathname.includes("oral") && (
                      <>
                        <span className="bold">Domain:</span>{" "}
                        {"Oral-traditions-and-expressions"}
                      </>
                    )}
                    {location.pathname.includes("performing") && (
                      <>
                        <span className="bold">Domain:</span>{" "}
                        {"Performing arts"}
                      </>
                    )}
                    {location.pathname.includes("Knowledge") && (
                      <>
                        <span className="bold">Domain:</span>{" "}
                        {
                          "knowledge and practices concerning nature and the universe"
                        }
                      </>
                    )}
                    {location.pathname.includes(
                      "traditional-craftsmanship"
                    ) && (
                      <>
                        <span className="bold">Domain:</span>{" "}
                        {"Traditional craftsmanship"}
                      </>
                    )}
                    {location.pathname.includes("social-practices") && (
                      <>
                        <span className="bold">Domain:</span>{" "}
                        {"Social practices rituals and festive events"}
                      </>
                    )}
                  </p>
                  <p className="dctext">
                    <span className="bold">State:</span> {field_ich_state}
                  </p>
                  <div className="dctext">
                    <span className="bold">Description:</span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: field_ich_description,
                      }}
                    />
                  </div>
                </div>
              )}

              {!location.pathname.includes("archives") &&
                field_dc_description && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Description:</span>{" "}
                    {field_dc_description}{" "}
                  </p>
                )}
              {location.pathname.includes("archives") &&
                field_dc_description_abstract && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Description:</span>{" "}
                    {field_dc_description_abstract}{" "}
                  </p>
                )}
              {location.pathname.includes("archives") &&
                field_parent_library_name && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Received from:</span>{" "}
                    {field_parent_library_name}{" "}
                  </p>
                )}
              {location.pathname.includes("archives") &&
                !field_parent_library_name &&
                field_parent_dspace_community_na && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Received from:</span>{" "}
                    {field_parent_dspace_community_na}{" "}
                  </p>
                )}
              {field_dc_type && (
                <p className="dctext">
                  {" "}
                  <span className="bold"> Type:</span> {field_dc_type}{" "}
                </p>
              )}
              {!location.pathname.includes("archives") &&
                field_parent_library_name && (
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Received from:</span>{" "}
                    {field_parent_library_name}{" "}
                  </p>
                )}
            </Col>
            <Col xs={1}></Col>
            <Col></Col>
          </Row>
        </Container>

        {/**************************partwise*********************/}

        {PartsPdfarr.length > 1 && (
          <div className="bg-partwise p-3">
            <Container className="mt-5">
              {/* Display Partwise Image or PDF */}

              <Row>
                <Col md={12}>
                  <h2 className="text-center">{t("Part Wise PDF")}</h2>
                </Col>
                <Col md={12}>
                  <div className="glider-contain">
                    <div className="glider hide-scrollbar page-content">
                      {imageFiles &&
                        imageFiles.map((image, index) => (
                          <>
                            <div
                              className="news-card"
                              key={index}
                              onClick={() => setLink(image.trim())}
                            >
                              <img
                                variant="top images"
                                className="news-card__image"
                                src={
                                  field_digital_image_file
                                    ? "http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/placeholder.png"
                                    : `http://icvtesting.nvli.in${field_digital_image_file
                                        .split(",")[0]
                                        .trim()}`
                                }
                                alt={title}
                              />

                              <div className="news-card__text-wrapper">
                                <div className="news-card__details-wrapper">
                                  <p>Part {index + 1}</p>
                                  <a
                                    href="#"
                                    className="news-card__read-more"
                                  >
                                    View{" "}
                                    <i className="fa fa-long-arrow-alt-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>{" "}
                          </>
                        ))}

                      {PartsPdfarr &&
                        PartsPdfarr.map((image, index) => (
                          <>
                            <div
                              className="news-card"
                              key={index}
                              onClick={() => setLink(image.trim())}
                            >
                              <img
                                variant="top images"
                                className="news-card__image"
                                src={
                                  "http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/placeholder.png"
                                }
                                alt={title}
                              />

                              <div className="news-card__text-wrapper">
                                <div className="news-card__details-wrapper">
                                  <p>Part {index + 1}</p>
                                  <a
                                    href="#"
                                    className="news-card__read-more"
                                  >
                                    View{" "}
                                    <i className="fa fa-long-arrow-alt-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>{" "}
                          </>
                        ))}
                    </div>
                    {imageFiles.length > 1 && (
                      <>
                        <span
                          role="button"
                          aria-label="Previous"
                          className="glider-prev"
                        >
                          <FontAwesomeIcon
                            icon={faChevronLeft}
                            style={{ marginLeft: "14px" }}
                          />
                        </span>
                        <span
                          role="button"
                          aria-label="Next"
                          className="glider-next"
                        >
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            style={{ marginLeft: "14px" }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {!location.pathname.includes("/tales-of-forts") &&
          !location.pathname.includes("intangible-cultural-heritage") && !location.pathname.includes("virtual-walkthrough") && (
            <DublinCoreCard detailData={detailData} />
          )}
      </>
    ) : (
      <ShimmerCardDetails />
    )}
  </>
  );
};

export default CardDetails;
