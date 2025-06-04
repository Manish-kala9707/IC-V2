import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import ImagesDetails from "../../VisualRepository/ImagesDetails";
const PaintingCollections = () => {
  const navigate = useNavigate();
  return (
    
    <Container fluid>
      <Row>
        <Col className="mb-4 text-center">
          <h1>Painting Collections</h1>
        </Col>
      </Row>
<Row>
  <Col lg={6}>
   <div class="card">
    <div class="card-header icp-bgnew"><h5>Painting PortFolios</h5></div>
    <div class="card-body  p-0"> <div
          lg={6}
          onClick={() => {
            navigate("/paintings/portfoliopaintings");
          }}
        >
          <img
            className="img-responsive"
            src="https://icvtesting.nvli.in/system/files/styles/image_grid_style/private/paintingsimage/Screenshot%202020-12-03%20at%205.52.05%20PM.png?itok=xQUUqjxQ"
            alt="ads"
          /></div>
  </div>
  </div>
  </Col>

   <Col lg={6}>
   <div class="card">
    <div class="card-header icp-bgnew"><h5>Museum Paintings</h5></div>
    <div class="card-body p-0"> <div
          onClick={() => {
            navigate("/paintings/museum-paintings");
          }}
        >
          <img
            className="img-responsive"
            src="https://icvtesting.nvli.in/system/files/styles/image_grid_style/private/paintingsimage/Screenshot%202020-12-07%20at%202.39.38%20PM.png?itok=yYy6xYwk"
            alt="asas"
          /></div>
  </div>
  </div>
  </Col>
</Row>
      
    </Container>
  );
};

export default PaintingCollections;
