import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SwrilDivider from "./SwrilDivider";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect,useContext } from "react";
import { ContextData } from "../pages/Store/FetchApiData";
const AllCategories = () => {
  const { fetchedData, title, nid, totalPages, total_items, location, pagename, pageNumber }=useContext(ContextData)

  console.log("fetcheddata",fetchedData)
   const {t}=useTranslation()
  const formatText = (text) => {
    if(location.pathname.includes("/hi")){
      return `hi/${text.toLowerCase().trim().replace(/\s+/g, "-").replace(/&amp;/g, "and")}`
    }
    else{
      return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/&amp;/g, "and");
    }
   
  };
  return (
    <>
      <Container fluid>
        
      </Container>
      <Container className="all-cate-header">
        <Row>
          <Col>
            <h1>{t("categories")}</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
      <Container className="page-contain ">
        <Row>
          {fetchedData && fetchedData.map((item, index) => (    
            <Col key={index} xs={2} className="p-1">
              <Link to={`/${formatText(item.title)}`} className="all-cate-data-card">
                <img src={`http://icvtesting.nvli.in/${item.field_item_image}`} alt={t(item.title)} className="data_card_img" />
                <span className="image-hover-text-title" dangerouslySetInnerHTML={{ __html: item.title }} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="all-cate-header">
        <Row>
          <Col>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllCategories;