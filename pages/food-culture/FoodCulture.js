import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardDetails from "../../components/Card/CardStoryDetails";
import { Filter, Search } from "react-feather";
import ErrorPage from "../../components/Card/ErrorPage";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import Card from "../../components/Card/Gallerycard";
import { useTranslation } from "react-i18next";

const FoodCulture = () => {
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
  } = useContext(ContextData);

  const location = useLocation();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const { t } = useTranslation();

  return (
    <Container>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <div className="App">
          {location && !location?.pathname?.includes("title") && (
            <Container className="archive-header">
              <Row>
                <Col>
                  <h1>{t("Food-and-culture")}</h1>
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
            </Container>
          )}
          <Container>
            <Row>
              <Glider
                hasArrows
                slidesToShow={4}
                slidesToScroll={1}
                hasDots
                duration={1.5}
              >
                <Card
                  page="/"
                  search_results={fetchedData}
                  response={response}
                  className="page-content"
                />
              </Glider>{" "}
            </Row>
          </Container>
        </div>
      )}
    </Container>
  );
};
export default FoodCulture;
