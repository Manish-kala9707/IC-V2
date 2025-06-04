import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../../image/SwirlDivider.png";
import "@google/model-viewer";
import * as PANOLENS from "panolens";
import { color } from "framer-motion";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

const AjantaCardDetails = ({ detailData }) => {
  let {
    title,
    field_cave_type,
    field_periods,
    field_elements,
    field_patron,
    field_floorplan,
    field_cave_interior,
    field_cave_exterior_image,
  } = detailData;

  const floorplanUrl = field_floorplan?.match(/href="([^"]+)"/)?.[1] || null;
  const interiorImageUrl = field_cave_interior?.match(/src="([^"]+)"/)?.[1]
  const exteriorImageUrl = field_cave_exterior_image?.match(/src="([^"]+)"/)?.[1] 

  return (
    <Container fluid className="archive-header">
      <Row>
        <Col>
          <h4>{title}</h4>
          <img
            src={Divider}
            alt="Caption Divider"
            style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }}
          />
        </Col>
      </Row>

 
      <Row style={{backgroundColor:"rgba(44, 44, 44, 0.5)"}}>
        <Col lg={6} style={{display:"flex",justifyContent:"center",  backgroundColor: "#2C2C2C", borderRadius:"10px"}}>
          {floorplanUrl && (
         <model-viewer
         src={`http://icvtesting.nvli.in${floorplanUrl}`}
         alt="3D Model"
         camera-controls
         auto-rotate
         ar
         shadow-intensity="1"
         exposure="1"
         environment-image="neutral"
         poster="loading.jpg"
         style={{
           width: "100%",
           height: "400px",
           color: "red",
           display: "flex",
           justifyContent: "center",
           alignItems: "center", 
           borderRadius:"10px" ,
           
         }}
       >
       </model-viewer>
       
          )}
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h6>Cave Type</h6>
          <p dangerouslySetInnerHTML={{ __html: field_cave_type }}></p>
          <h5>Period</h5>
          <p dangerouslySetInnerHTML={{ __html: field_periods }}></p>
          {field_patron && (
            <>
              <h5>Patron</h5>
              <p dangerouslySetInnerHTML={{ __html: field_patron }}></p>
            </>
          )}
          {field_elements && (
            <>
              <h5>Element</h5>
              <p dangerouslySetInnerHTML={{ __html: field_elements }}></p>
            </>
          )}
        </Col>
      </Row>

     
       <Row style={{backgroundColor: "#F5F5DC"}}>
        <Col lg={6} md={6} sm={12} style={{ backgroundColor: "#2C2C2C"}}>
        <h4>Interior view</h4>
        <ReactPhotoSphereViewer
        src={`http://icvtesting.nvli.in${interiorImageUrl}`}
        height={"50vh"}
        width="80%"
      ></ReactPhotoSphereViewer>
        </Col>
        <Col lg={6} md={6} sm={12} style={{ backgroundColor: "#2C2C2C"}}>
        <h4>Exterior view</h4>
        <ReactPhotoSphereViewer
        src={`http://icvtesting.nvli.in${exteriorImageUrl}`}
        height={"50vh"}
        width="80%"
      ></ReactPhotoSphereViewer>
        </Col>
         
      </Row> 

    
     
    </Container>
  );
};

export default AjantaCardDetails;
