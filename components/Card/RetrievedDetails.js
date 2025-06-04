
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Share2, BookOpen, FileText } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap";
import Qrcode from "../Card/Qrcode";
import SocialShare from "../Card/SocialShare";
import Divider from "../../image/SwirlDivider.png";
function RetrievedDetails({ detailData, setDetailData,search_results}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const [artifactDetail, setArtifactDetail] = useState(true);
  const [heisttale, setHeisttale] = useState(false);
  const [iconography, setIconoGraphy] = useState(false);
  let {
    title,
    body,
    field_type,
    field_thumbnail_image,
    field_heist_tale,
    field_iconography,
    field_ali,
    field_antiquity,
    field_date_year_when_stolen,
    field_date_of_retrieval,
    field_materials,
    field_mode_of_retrieval,
    field_place_of_origin,
    field_retrieved_from,
    field_source_by,
    field_material,
    field_states
  } = detailData;

  console.log("detaildata ====",detailData)
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const DetailsShow = () => {
    setArtifactDetail(true);
    setHeisttale(false);
    setIconoGraphy(false)
  };
  const heistShow = () => {
    setArtifactDetail(false);
    setHeisttale(true);
    setIconoGraphy(false)
  };
  const iconoGraphyShow = () => {
    setArtifactDetail(false);
    setHeisttale(false);
    setIconoGraphy(true)
  };
  return (
    <>
      <Container fluid className="archive-header">
        <Row className="pt-2">
          <Col md={1} xs={2} className="arcicon text-left">
            <img
              src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/Logo_30-07-2024-01-01.png`}
              title={title}
             
            />
          </Col>
          <Col style={{ paddingTop: "50px", marginLeft:"132px" }}>
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
      <Row >

      <Col lg={6}className="d-flex justify-content-center">
            <img
              src={`http://icvtesting.nvli.in/${field_thumbnail_image}`}
             style={{width:"100%",height:"100%",objectFit:"contain",maxHeight:"500px",}}
            />
        </Col>
       {!location.pathname.includes("reclaimed-relics") && <Col
          style={{
            paddingTop: "10px",
            justifyContent: "centre",
            backgroundColor: "white",
            borderRadius: "13px",
            maxHeight:"500px",
            overflowY:"auto"
          }}
        >
          <Row style={{ paddingTop: "10px" }}>
            <Col onClick={DetailsShow}>
              <button
                style={
                    artifactDetail
                    ? { backgroundColor: "blue", color: "white" }
                    : {}
                }
              >
               Artifact Details
              </button>
            </Col>
            <Col onClick={heistShow}>
              <button
                style={
                    heisttale ? { backgroundColor: "blue", color: "white" } : {}
                }
              >
                Heist Tale
              </button>
            </Col>
            <Col onClick={iconoGraphyShow}>
              <button
                style={
                  iconography ? { backgroundColor: "blue", color: "white" } : {}
                }
              >
                Iconography
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
            {heisttale &&
              <div
                style={{ textAlign: "justify",paddingLeft: "20px"}}
                dangerouslySetInnerHTML={{ __html:field_heist_tale}}
              />
            }
            {artifactDetail &&
              <div style={{ textAlign: "justify",paddingLeft: "20px"}}>
                <p className="dctext">
                    {" "}
                    <span className="bold"> Type:</span>{" "}
                    {field_type}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Material:</span>{" "}
                    {field_materials}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Antiquity:</span>{" "}
                    {field_antiquity}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Place of origin:</span>{" "}
                    {field_place_of_origin}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Date(year) when stolen:</span>{" "}
                    {field_date_year_when_stolen}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Date(year) when Retrieval:</span>{" "}
                    {field_date_of_retrieval}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Retrieved from:</span>{" "}
                    {field_retrieved_from}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Mode of Retrival:</span>{" "}
                    {field_mode_of_retrieval}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> Present Location:</span>{" "}
                    {field_type}{" "}
                  </p>
              </div>
            }
            {iconography &&
              <div
                style={{ textAlign: "justify",paddingLeft: "20px"}}
                dangerouslySetInnerHTML={{ __html:field_iconography}}
              />
            }

           
          </Row>
        </Col>}
        {
              location.pathname.includes("reclaimed-relics") &&
              <Col lg={6}
          style={{
            paddingTop: "10px",
            justifyContent: "centre",
            backgroundColor: "white",
            borderRadius: "13px",
          }}
        >
           <Row style={{ textAlign: "justify",paddingLeft: "20px"}}>
                <p className="dctext">
                    {" "}
                    <span className="bold"> Material:</span>{" "}
                    {field_material}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold"> State/Region:</span>{" "}
                    {field_states}{" "}
                  </p>

                  <p className="dctext">
                    {" "}
                    <span className="bold"> Antiquity:</span>{" "}
                    {field_antiquity}{" "}
                  </p>
                  <p className="dctext">
                    {" "}
                    <span className="bold">Date/Year of retrival:</span>{" "}
                    {field_date_of_retrieval}{" "}
                  </p>
                 
                  <p className="dctext">
                    {" "}
                    <span className="bold">Retrieved From:</span>{" "}
                    {field_retrieved_from}{" "}
                  </p>
            </Row>
            <Row >
            <span className="bold">Description:</span>{" "}
            <p style={{maxHeight:"300px", overflowY:"auto",paddingRight:"20px"}} dangerouslySetInnerHTML={{ __html: body }}></p>
            </Row>
                   
              
              </Col>


            }
        
      </Row>
        
        
      </Container>
    </>
  );
}

export default RetrievedDetails;
