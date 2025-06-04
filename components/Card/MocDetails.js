import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer, Document, Page } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import Carousel from "react-bootstrap/Carousel";
import ManuICon from "../../image/manuscriptOrange.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import "bootstrap/dist/css/bootstrap.min.css";
const MocDetails = () => {
  const [showFirstData, setShowFirstData] = useState(false);
  const [showSecondData, setShowSecondData] = useState(false);
 
  const {
    fetchedData,
    nid,
    totalPages,
    total_items,
    items_per_page,
    current_page,
    pagename,
    pageNumber,
    filterSearchdata,
    filterSearchdata2,
    error,
    response,
  } = useContext(ContextData);
 

  const detailData = fetchedData.filter((data) => {
    return data.nid == nid;
  });
 console.log("detaildata",detailData)
  const detailobject = detailData.length > 0 && detailData[0];
  let {
    field_address,
    title,
    field_established,
    field_institution_head,
    field_introduction,
    field_hours,
    field_moc_organization_image,
    field_newspaper_clippings_link,
    field_other_collections_link,
    field_phone,
    field_photo_archive_data_link,
    field_rarebook_link,
    field_records_available_in,
    field_reports_proceedings_link,
    field_sl,
    field_state,
    field_catalogues_link,
    field_gazettes_data_link,
    field_total_collection_in_organi,
    field_video_data_link,
    field_website,
  } = detailobject;
 
  const imageUrls = field_sl
    ? field_sl.split(",").map((url) => url.trim())
    : [];
   
    console.log("detailobject", detailobject)
 
  console.log("imageUrls", imageUrls);
  console.log("fieldsl", field_sl);
  const handleFirstButtonClick = () => {
    setShowFirstData(true);
    setShowSecondData(false);
  };
 
  const handleSecondButtonClick = () => {
    setShowFirstData(false);
    setShowSecondData(true);
  };
  useEffect(() => {
    // Set showFirstData to true and showSecondData to false on initial component mount
    setShowFirstData(true);
    setShowSecondData(false);
  }, []);
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
 
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container fluid>
        {imageUrls.length > 0 && (
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={3000}
            fade
          >
            {imageUrls.map((url, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={`https://icvtesting.nvli.in//${url}`}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
      <Container>
        <Row>
          <Col xs={8} className="pt-5 moc">
            <h1 className="pb-3">{title} </h1>
            {field_introduction && (
              <p className="dctext">{field_introduction} </p>
            )}
 
            <Row className="pt-5">
              {field_rarebook_link && (
                <Col xs={2} className="p-0">
                  <a href=" " className="manuscript p-0 m-0">
                    <img
                      src={ManuICon}
                      alt=""
                      style={{ width: "78px", height: "78px" }}
                    />
                    <p>Rarebooks</p>
                  </a>
                </Col>
              )}
 
              {field_reports_proceedings_link && (
                <Col xs={2} className="p-0">
                  <a href=" ">
                    <img
                      src={ManuICon}
                      alt=""
                      style={{ width: "78px", height: "78px" }}
                    />
                    <p>Report</p>
                  </a>
                </Col>
              )}
 
              {field_photo_archive_data_link && (
                <Col xs={2} className="p-0">
                  <a href=" ">
                    <img
                      src={ManuICon}
                      alt=""
                      style={{ width: "78px", height: "78px" }}
                    />
                    \<p>Photo Archive</p>
                  </a>
                </Col>
              )}
 
              {field_other_collections_link && (
                <Col xs={2} className="p-0">
                  <a href=" ">
                    <img
                      src={ManuICon}
                      alt=""
                      style={{ width: "78px", height: "78px" }}
                    />
                    <p>Other Collections</p>
                  </a>
                </Col>
              )}
 
              {field_catalogues_link && (
                <Col xs={2} className="p-0">
                  <a href=" ">
                    <img
                      src={ManuICon}
                      alt=""
                      style={{ width: "78px", height: "78px" }}
                    />
                    <p>Catalogues</p>
                  </a>
                </Col>
              )}
 
              {field_gazettes_data_link && (
                <Col xs={2} className="p-0">
                  <a href=" ">
                    <img
                      src={ManuICon}
                      alt=""
                      style={{ width: "78px", height: "78px" }}
                    />
                    <p>Gazettes</p>
                  </a>
                </Col>
              )}
            </Row>
          </Col>
          <Col xs={4} className="pt-5">
            <h1 className="pb-3">Information </h1>
            <div className="mocinfobx">
              {" "}
              <p className="mocinfo">
                Address: {field_address} {field_state}
              </p>
              <p className="mocinfo">Established: {field_established}</p>
              <p className="mocinfo">
                Institution Head: {field_institution_head}
              </p>
              <p className="mocinfo">Hours: {field_hours}</p>
              <p className="mocinfo">Phone: {field_phone}</p>
              <p className="mocinfo1">Website: {field_website} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
 
export default MocDetails;
 
 