import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pagination2 from "../../components/Pagination/Pagination2";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import { ContextData } from "../../pages/Store/FetchApiData";

const PhotoEssayFlipbook = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  if (!images || images.length === 0) return null;

  const changeIndex = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeIndex(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeIndex(prevIndex);
  };

  return (
    <div className="photo-essay-flipbook-container">
      <img
        src={images[currentIndex]}
        alt={`Flipbook image ${currentIndex + 1}`}
        className={`photo-essay-flipbook-image ${fade ? "" : "photo-essay-fade-out"}`}
      />
      <div className="photo-essay-flipbook-buttons">
        <button className="photo-essay-flipbook-button" onClick={goPrev}>
          Previous
        </button>
        <span className="photo-essay-flipbook-counter">
          {currentIndex + 1} / {images.length}
        </span>
        <button className="photo-essay-flipbook-button" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const PhotoEssay = () => {
  const domainName = "http://icvtesting.nvli.in";
  const location = useLocation();
  const { t } = useTranslation();

  const {
    fetchedData,
    nid,
    totalPages,
    total_items,
    items_per_page,
    pageNumber,
    response,
  } = useContext(ContextData);

  // Ref for script-injection container
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find and run script tags
    const scripts = container.querySelectorAll("script");

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      if (oldScript.src) {
        newScript.src = oldScript.src;
        newScript.async = true;
      } else {
        newScript.textContent = oldScript.textContent;
      }

      document.body.appendChild(newScript);
      oldScript.remove(); // Optional: clean up
    });
  }, [fetchedData, nid]);

  // Parse flipbook images from comma-separated string
  const parseFlipbookImages = (str) => {
    if (!str) return [];
    return str
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean)
      .map((url) => (url.startsWith("http") ? url : domainName + url));
  };

  return (
    <>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <div className="photo-essay-app">
          {location && !location?.pathname?.includes("title") && (
            <Container className="photo-essay-archive-header">
              <Row>
                <Col>
                  <h1>Photo-Essay</h1>
                 
                </Col>
              </Row>
            </Container>
          )}

          {location && !location?.pathname?.includes("title") && (
            <Container>
              <Row>
                <Col lg={6} md={6}></Col>
                <CounterCard
                  pageNumber={pageNumber}
                  total_items={total_items}
                  items_per_page={items_per_page}
                  t={t}
                />
              </Row>
            </Container>
          )}

          {location && location?.pathname?.includes("title") ? (
            fetchedData && fetchedData.length > 0 ? (
              fetchedData
                .filter((x) => x.nid == nid)
                .map((x) => {
                  const images = parseFlipbookImages(x.field_photo_eassays_flipbook_ima);
                  return <PhotoEssayFlipbook key={x.nid} images={images} />;
                })
            ) : (
              <ShimmerCardDetails />
            )
          ) : (
            <Container>
              <Row>
                <div className="page-content">
                  <Card
                    page="/"
                    search_results={fetchedData}
                    response={response}
                    className="photo-essay-page-content"
                  />
                </div>
              </Row>
            </Container>
          )}

          {location && !location.pathname.includes("title") && (
            <Pagination2 totalPages={totalPages} baseUrl="/videos" />
          )}
        </div>
      )}
    </>
  );
};

export default PhotoEssay;
