
 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Chapchar from "../../image/NorthEast/Chapchar.jpg";
import Ima from "../../image/NorthEast/Ima.jpg";
import kachari from "../../image/NorthEast/kachari.jpg";
import Kaziranga from "../../image/NorthEast/Kaziranga.jpg";
import tawang from "../../image/NorthEast/tawang.jpg";
import Tsomgo from "../../image/NorthEast/Tsomgo.jpg";
import Ujjayanta from "../../image/NorthEast/Ujjayanta.jpg";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
 
import { Filter, Search } from "react-feather";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap";
import ErrorPage from "../../components/Card/ErrorPage";
import { useTranslation } from "react-i18next";
const NorthEastArchive = () => {
  const {
    fetchedData,
    title,
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
    field_ic_video_streaming_url,
  } = useContext(ContextData);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = (section) => {
    console.log(`Navigating to: ${section}`);
    // You can add any other logic for handling the click event here, e.g., navigate to another page
    // navigate(`/new-page/${section}`);
  };
 
   
  return (
    <div className="App">
      {location && !location?.pathname?.includes("title") && (
        <Container className="archive-header">
          <Row
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              height: "450px",
            }}
          >
            <Carousel style={{ height: "100%" }} slide={false}>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={Chapchar}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={Ima}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={Tsomgo}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={Ujjayanta}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={Kaziranga}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={kachari}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-responsive"
                  text="First slide"
                  src={tawang}
                  style={{ borderRadius: "10px" }}
                />
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row>
            <Col>
              <h1>{t("North East Archive")}</h1>
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
          </Row>
          <Row>
            <div>
              <p>
                The North-Eastern region of India is often called the ‘Paradise
                of India’. The enthralling and vibrant states of the North-East
                house within themselves rich history, culture, and heritage.
                <br />
                The Seven Sisters — Arunachal Pradesh, Assam, Manipur,
                Meghalaya, Mizoram, Nagaland, Tripura — along with their brother
                state, Sikkim, each have their own tales to tell. From
                jaw-dropping sceneries to astonishing rituals and traditions,
                North-East India is a place worth exploring.
                <br />
                Discover the untamed and enchanted region of North-East India
                through a virtual expedition. Each state offers a collection of
                rare photos, videos, books, and much more. We welcome you to
                explore the wild and mysterious North-East India and uncover its
                hidden gems.
              </p>
              <p>
                <strong>Note:</strong> This section is a compilation of all
                resources on North-East India, available on the Indian Culture
                portal.
              </p>
            </div>
          </Row>
          <Row>
            <Col lg={6}>
            <video
                      src="http://icvtesting.nvli.in/system/files/nvli_videos/TetseoSisters_burn-in_1920x1080_x264.mp4"
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                        display: "flex",
                        width: "60%",
                        borderRadius: "8px",
                        height: "100%",
                        justifyContent: "center",
                        position: "relative",
                        left: "20%",
                        border: "2px solid white",
                      }}
                    />
            </Col>
            <Col lg={6}>
            <video
                      src="https://videoserver.nvli.in/nvli/SNA/AnOctaveInHarmony.mp4"
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                        display: "flex",
                        width: "60%",
                        borderRadius: "8px",
                        height: "100%",
                        justifyContent: "center",
                        position: "relative",
                        left: "20%",
                        border: "2px solid white",
                      }}
                    />
            </Col>
          </Row>
 
          <Row>
              <Col>
                <div className="col-md-12" id="storyarea">
                  <div className="row mt-4">
                    <div className="col-md-5 mb-2 offset-md-1">
                      <a
                        href="north-east-archive/culture-heritage"
                        className="btn btn-warning col-md-12 text-center"
                        onClick={() => handleClick('Culture & Heritage')}
                      >
                        <h3 className="mb-0 text-white">Culture &amp; Heritage</h3>
                      </a>
                    </div>
                    <div className="col-md-5 mb-2">
                      <a
                        href="north-east-archive/capital-cities-north-east-india"
                        className="btn btn-danger col-md-12 text-center txt-white"
                        tabIndex="-1"
                        onClick={() => handleClick('Capital Cities of North East India')}
                      >
                        <h3 className="mb-0">Capital Cities of North East India</h3>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 mt-0 mb-2 offset-md-1">
                      <a
                        href="north-east-archive/books-north-east-india"
                        className="btn btn-success col-md-12 text-center"
                        onClick={() => handleClick('Books on North-East India')}
                      >
                        <h3 className="mb-0">Books on North-East India</h3>
                      </a>
                    </div>
                    <div className="col-md-5 mt-0 mb-2">
                      <a
                        href="north-east-archive/tales-from-the-hinterland"
                        className="btn btn-info col-md-12 text-center"
                        onClick={() => handleClick('Tales from the Hinterland')}
                      >
                        <h3 className="mb-0">Tales from the Hinterland</h3>
                      </a>
                    </div>
                  </div>
                </div>
               
              </Col>
            </Row>
 
            {/* <Row>
              <div className="col-md-12 pt-4 mt-1">
                  <h1>Remembering the Unsung Heroes of North-East India</h1>
 
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
                <Col>
                  <div className="col-md-6">
                    <p>
                      North-East India played a huge role in India’s struggle for freedom. This section is dedicated to the unsung heroes from the region and their undying valour and endeavour, that lead India to its independence.
                    </p>
                    <p className="text-center">
                      <a href="/north-east-archive/unsung-heroes" className="btn btn-info text-center">Start Here</a>
                    </p>
                  </div>
                  </Col>
                  <Col>
                  <div className="col-md-6">
                    <div className="databox p-0">
                      <div className="banner-img1">
                        <img src="http://icvtesting.nvli.in/system/files/snippetsImages/ezgif.com-webp-to-jpg.jpg" className="img-responsive" alt="Unsung Heroes Banner" />
                      </div>
                    </div>
                  </div>
                  </Col>
              </div>
 
            </Row> */}
 
      <div className="container">
            <div className="row">
              <div className="col-md-12 pt-4 mt-1" id="storyarea">
                <h1>Remembering the Unsung Heroes of North-East India</h1>
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
              </div>
             
             
              <div className="col-md-6">
                <p>
                  North-East India played a huge role in India’s struggle for freedom. This section is dedicated to the unsung heroes from the region and their undying valour and endeavour, that lead India to its independence.
                </p>
                <p className="text-center">
                  <a href="/north-east-archive/unsung-heroes" className="btn btn-info text-center">Start Here</a>
                </p>
              </div>
 
              <div className="col-md-6">
                <div className="databox p-0">
                  <div className="banner-img1">
                    <img src="http://icvtesting.nvli.in/system/files/snippetsImages/ezgif.com-webp-to-jpg.jpg" className="img-responsive" alt="Unsung Heroes Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
             
        </Container>
       
      )}
     
    </div>
  );
};
 
export default NorthEastArchive;
 
 