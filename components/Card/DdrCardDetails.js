
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import { Tooltip } from "react-bootstrap";
import ArcQR from "../../image/QR 1.png";
import ArcShare from "../../image/share-2.png";
import SocialShare from "./SocialShare";
import Carousel from 'react-bootstrap/Carousel';
import Qrcode from "./Qrcode";
import { useLocation,useNavigate } from "react-router-dom";
function DdrCardDetails({ detailData, setDetailData }) {
    //console.log("detailData")
const location=useLocation()
  const navigate=useNavigate()
  let {title,nid,field_thumnail_images} = detailData;
  
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={1} className="arcqrcode">
            <a variant="primary" onClick={handleShow}>
              <img src={ArcQR} alt="Archive Icon" className="qricon" />
            </a>
            <Col xs={1} className="arcqrcode">
           <a variant="primary" onClick={handleShow}>
              <img src={ArcQR} alt="Archive Icon" className="qricon" />
            </a>
           <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
              <Modal.Title>QR Code</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           <Qrcode value={window.location.href} />
             </Modal.Body>
         </Modal>       </Col>
          </Col>
          <Col xs={1} className="arcqrcode">
            <a variant="secondary" onClick={ArcShareShow}>
              <img src={ArcShare} alt="Archive Icon" className="qricon" />
            </a>
            <Modal show={Shareshow} onHide={handleShareClose}>
              <Modal.Header closeButton>
               <Modal.Title>Share</Modal.Title>
             </Modal.Header>
             <Modal.Body>
           <SocialShare value={window.location.href} />
             </Modal.Body>
           </Modal>
          </Col>

          <Col xs={1}>
            <div onClick={() => navigate(-1)} className="btn btn-info">
              back
            </div>
          </Col>
        </Row>
        <Row>
            
        <img
          className="d-block w-100"
          src={`https://wzcc.nvli.in/${field_thumnail_images}`}
          
        />
        {title}
        </Row>
      </Container>

      
      
    
    </div>
  );
}

export default DdrCardDetails;