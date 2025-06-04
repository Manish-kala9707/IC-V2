import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Divider from "../forts/images/FortsofIndia.png";
import { ContextData } from "../../pages/Store/FetchApiData";
import ErrorPage from "../../components/Card/ErrorPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import SocialShare from "../../components/Card/SocialShare";
import { Share2  } from "react-feather";
import Qrcode from "../../components/Card/Qrcode"; 
import { faQrcode, faArrowLeft } from '@fortawesome/free-solid-svg-icons';  
const FeatureForts = () => {
   const [showShare, setShowShare] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [Shareshow, setShareShow] = useState(false);
    const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { fetchedData, response } = useContext(ContextData);
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [selectedSliderImage, setSelectedSliderImage] = useState(null);

  const handleOpenModal = (imageUrl) => {
    setSelectedSliderImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSliderImage(null);
  };

  return (
    <>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <div className="App">
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
          <Container className="archive-header">
           <Row>     <Col md={6} className="offset-md-3">
                                <img
                                  src={Divider}
                                  alt="Caption Divider"
                                  className="icon"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    marginRight: "10px",
                                    objectFit: "contain",
                                    marginBottom: "15px",
                                  }} />
                                <h1 className="text-center">{t("Feature Forts")}</h1>
                                <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                              </Col></Row>

            {fetchedData && fetchedData.length > 0 ? (
              fetchedData.map((data, index) => (
                <Row key={index} style={{ marginTop: "20px", backgroundColor:"white",borderRadius:"10px" }}>
                  <Col lg={6} md={6} sm={12}>
                    <img
                      className="img-responsive"
                      src={`http://icvtesting.nvli.in${data.field_uf_features_image}`}
                      alt="Feature Fort"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h3>{data.title}</h3>
                    <p>{data.field_understanding_forts_descri}</p>
                    <button
                      className="btn btn-warning mt-3"
                      onClick={() => handleOpenModal(`http://icvtesting.nvli.in${data.field_forts_of_india_slider}`)}
                    >
                      Click to unravel and view the feature
                    </button>
                  </Col>
                </Row>
              ))
            ) : (
              <p>No feature forts available.</p>
            )}
          </Container>

          {/* Modal Showing field_forts_of_india_slider */}
          <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              {selectedSliderImage && (
                <img
                  src={selectedSliderImage}
                  alt="Feature Fort Slider"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              )}
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default FeatureForts;
