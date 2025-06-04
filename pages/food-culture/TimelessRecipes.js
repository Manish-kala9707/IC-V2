import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardDetails from "../../components/Card/CardDetails";
import { Filter, Search } from "react-feather";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import Card from "../../components/Card/CricleCard";
import { useTranslation } from "react-i18next";
const TimelessRecipes = () => {
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
                  <h1>{t("Timeless-Recipes")}</h1>
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
              <div className="page-content">
                <Card
                  page="/"
                  search_results={fetchedData}
                  response={response}
                  className="page-content"
                />
              </div>
            </Row>
          </Container>
        </div>
      )}
    </Container>
  );
};
export default TimelessRecipes;
