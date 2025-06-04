import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Trending.css";

const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);
  const location = useLocation();

  // Determine language-specific API URL
  const isHindi = location.pathname.includes("lang=hi");
  const apiUrl = isHindi
    ? "https://icvtesting.nvli.in/hi/rest-v1/trending-section"
    : "https://icvtesting.nvli.in/rest-v1/trending-section";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setTrendingData(data.results[0]);
        }
      })
      .catch((error) => console.error("Error fetching trending data:", error));
  }, [apiUrl]);

  if (!trendingData) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  const extractImgSrc = (htmlString) => {
    const match = htmlString.match(/src="([^"]+)"/);
    return match ? `https://icvtesting.nvli.in${match[1]}` : "";
  };

  return (
    <Container className="trending-section">
      <h4 className="mb-3 trending-heading">{isHindi ? "क्या आप जानते हैं" : "Did You Know"}</h4>
      <Row className="trending-card">
        <Col md={4} className="trending-image-col">
          <img
            src={extractImgSrc(trendingData.field_trending_image)}
            alt={trendingData.title}
            className="Madhubani-image"
          />
        </Col>
        <Col md={8}>
          <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
            <h6>{trendingData.title}</h6>
            <p>{trendingData.body}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
