import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import {Tooltip } from 'react-bootstrap';
import ArcQR from "../../image/QR 1.png";
import ArcShare from "../../image/share-2.png";
import Divider from "../../image/SwirlDivider.png";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player';
import fortsicon from "../../image/icon/FortsofIndia.png";
import SocialShare from "./SocialShare";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
function CardStoryDetails({ detailData, setDetailData }) {
  
  let { title, body, field_story_part_2,field_video_url ,field_forts_of_india_slider,field_uf_features_image,field_understanding_forts_descri,field_pdf_digital_file} = detailData;
 console.log(body)

  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const [FortsFeature, setFortsFeatuShow] = useState(false);
const location=useLocation()
  const navigate=useNavigate()
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  const FortsFeatuShow = () => setFortsFeatuShow(true);
  const FortsFeatuClose = () => setFortsFeatuShow(false);
  return (
    <><div>
       {field_forts_of_india_slider && (
        <Container fluid>
          <img className="d-block w-100" src={`https://wzcc.nvli.in${field_forts_of_india_slider}`} />
        </Container>
      )}

      <Container fluid>
        <Row style={{ marginTop: "20px" }}>
        <Col xs={1} className="arcqrcode">        
        <img src={fortsicon} alt="Forts Icon" className="qricon" />
          </Col>
          <Col xs={8} className="arcqrcode"> 
          </Col>
          <Col xs={1} className="arcqrcode">
            <a variant="primary" onClick={handleShow}>
              <img src={ArcQR} alt="Archive Icon" className="qricon" />
            </a>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>QR Code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <QRCode value={detailData} />
              </Modal.Body>
            </Modal>
          </Col>
          <Col xs={1} className="arcqrcode">
            <a variant="secondary" onClick={ArcShareShow}>
              <img src={ArcShare} alt="Archive Icon" className="qricon" />
            </a>
            <Modal show={Shareshow} onHide={handleShareClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share</Modal.Title>
              </Modal.Header>
              <Modal.Body><SocialShare value={window.location.href} /></Modal.Body>
            </Modal>
          </Col>

          <Col xs={1}>
            <div onClick={() => navigate(-1)} className="btn btn-info">
              back
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center pt-5">
            <h1 className="fortstext" dangerouslySetInnerHTML={{ __html: title }} />
            <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />

          </Col>
        </Row>
      </Container>

      <>
        {field_video_url && (
          <Container>
            <Player playsInline src={field_video_url}>
              <BigPlayButton position="center" />
              <LoadingSpinner />
              <ControlBar autoHide={false} className="my-class" />
            </Player>
          </Container>
        )}
      </>

      <Container className="text-center">
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
        <div dangerouslySetInnerHTML={{ __html: field_understanding_forts_descri }}></div>
        <div dangerouslySetInnerHTML={{ __html: field_story_part_2 }}></div>
        <div dangerouslySetInnerHTML={{ __html:field_pdf_digital_file }}></div>
        {/* <Modal dangerouslySetInnerHTML={{ __html: body }} show={show}> */}

        {/* </Modal> */}

        
        {field_uf_features_image && (
        <button onClick={FortsFeatuShow} className="mt-5 p-2 text-center">UNRAVEL A FACT</button>
      )}

      </Container>
    </div><Modal show={FortsFeature} onHide={FortsFeatuClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img src={`https://wzcc.nvli.in${field_uf_features_image}`} className="img-responsive d-block w-100" /> </Modal.Body>
      </Modal></>
    
  );
}

export default CardStoryDetails;