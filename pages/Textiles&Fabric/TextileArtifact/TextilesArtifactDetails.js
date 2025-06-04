import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const TextilesArtifactDetails = ({ detailData }) => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img
            className="img-responsive"
            src={`http://icvtesting.nvli.in${detailData.field_textile_category_image}`}
          ></img>
        </Col>
        <Col lg={6}>
          <p className="dctext">
            {" "}
            <span className="bold"> Period:</span>{" "}
            {detailData.field_date_period}{" "}
          </p>
          <p className="dctext">
            {" "}
            <span className="bold"> Dimension:</span>{" "}
            {detailData.field_artefacts_dimension}{" "}
          </p>
          <p className="dctext">
            {" "}
            <span className="bold"> Source:</span>{" "}
            {detailData.field_artefacts_source}{" "}
          </p>
          {/* <p className="dctext">
                    {" "}
                    <span className="bold"> Description:</span>{" "}
                    {detailData.field_artefacts_description}{" "}
                  </p> */}

          <div className="dctext">
            <span className="bold">Description:</span>{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: detailData.field_artefacts_description,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TextilesArtifactDetails;
