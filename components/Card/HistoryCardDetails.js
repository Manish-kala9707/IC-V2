import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StateMap from '../../pages/HistoricCitiesOfIndia/StatesMap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
const HistoryCardDetails = ({ detailData}) => {

const navigate=useNavigate()
  return (
    
    <Container>
      <Row>
        <Col sm={12} lg={12} xl={12} style={{height:"100%"}}>
           <StateMap /> 
        </Col>
        <Col  sm={12} lg={12} xl={12} >
          <Row>
            <h3>Introduction</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: detailData.field_marker_introduction,
              }}
            />
          </Row>
          <Row>
            <h3>History</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: detailData.field_historic_cities_history,
              }}
            />
          </Row>

          <Row>
            <h3>City Tales</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: detailData.field_historic_cities_city_tales,
              }}
            />
          </Row>
        </Col>

      </Row>
      <Row>
        <Col lg={8}>
        <h5>City Capsules</h5>
        <Link to={`/historic-cities-of-india/${detailData.title.toLowerCase().replaceAll(" ","")}/Historic-cities-freedom-movementA`}>
        <Row style={{height:"30px",backgroundColor:"purple",width:"100%",marginLeft:"1px",marginBottom:"5px",display:"flex",justifyContent:"center"}}>Focus:Freedom and the struggle</Row>
        </Link>
        <Row>
        <Col ><Link to={`/historic-cities-of-india/${detailData.title.toLowerCase().replaceAll(" ","")}-read`}><img className='img-responsive' src={`http://icvtesting.nvli.in${detailData.field_hc_city_capsule_images.split(",")[0].trim()}`}></img> </Link></Col>
        <Col> <Link to={`/historic-cities-of-india/${detailData.title.toLowerCase().replaceAll(" ","")}-see`}><img className='img-responsive' src={`http://icvtesting.nvli.in${detailData.field_hc_city_capsule_images && detailData.field_hc_city_capsule_images.split(",")[1].trim()}`}></img> </Link></Col>
        <Col> <Link to={`/historic-cities-of-india/${detailData.title.toLowerCase().replaceAll(" ","")}-glimpse`}><img className='img-responsive' src={`http://icvtesting.nvli.in${detailData.field_hc_city_capsule_images.split(",")[2].trim()}`}></img></Link></Col>
        </Row>
        </Col>
        <Col lg={4} style={{marginTop:"15px"}}>
        <Row> <h5>Glimpses of city</h5></Row>
        <Row>
        <Link> <img
            src={`http://icvtesting.nvli.in${ detailData.field_hc_city_capsule_images && detailData.field_hc_city_capsule_images
              .split(",")[3]
              .trim()}`}
          style={{height:"150px"}}
          ></img></Link>
        </Row>
       
         
        </Col>  
      </Row>
    </Container>
  );
};

export default HistoryCardDetails;
