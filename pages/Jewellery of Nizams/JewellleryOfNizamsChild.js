
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import CardDetails from "../../components/Card/CardDetails";
import { Filter, Search } from 'react-feather';
import Divider from "../../image/SwirlDivider.png"; 
import { useContext } from "react";
import { ContextData } from "../Store/FetchApiData"
import Pagination2 from "../../components/Pagination/Pagination2";
import CounterCard from "../../components/Card/CounterCard";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import Card from "../../components/Card/Card";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import { useTranslation } from "react-i18next";
import ErrorPage from "../../components/Card/ErrorPage";
const JewellleryOfNizamsChild = () => {
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
     response
   } = useContext(ContextData);
const location=useLocation()
  const navigate=useNavigate()
 const {t}=useTranslation()
  return (
    <>
    { !response.ok?(<ErrorPage />):( <div className="App">
        {location && !location?.pathname?.includes("title") && <Container  className="archive-header">
          <Row>
            <Col> 
              {location.pathname.includes("history") && <h1>History</h1>}
              {location.pathname.includes("economy") && <h1>Economy</h1>}
              {location.pathname.includes("jewels") && <h1>Jewels</h1>}
              {location.pathname.includes("princesses") && <h1>Princesses</h1>}
              {location.pathname.includes("society") && <h1>Society</h1>}
              <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
            </Col>
          </Row>
        </Container>}
  
        {location && !location?.pathname?.includes("title") &&
          <Container >
            <Row >
              <Col lg={6} md={6}></Col>
            {/* <InternalSearchCard filterSearchdata={filterSearchdata} filterSearchdata2={filterSearchdata2} category={"other-collections"}/> */}
            <CounterCard pageNumber= {pageNumber} total_items={total_items} items_per_page= {items_per_page}  t={t}/>
            </Row>
        </Container>
        }
        {location && location?.pathname?.includes("title") ? (
          fetchedData && fetchedData.length > 0 ?(fetchedData
            .filter((x) => x.nid == nid)
            .map((x) => {
              return <CardStoryDetails key={x.nid} detailData={x}  />;
            })):(<ShimmerCardDetails/>)
        )  : (
          <Container ><Row>
            <div  className="page-content">              
                  <Card page="/" search_results={fetchedData}  response={response} items_per_page={items_per_page} total_items={total_items} className="page-content" /> 
            </div></Row>
          </Container>
        )}
        {location && !location.pathname.includes("title") && <Pagination2 totalPages={totalPages} baseUrl="/videos" />}
      </div>)
    }
   </>
  );
};
export default JewellleryOfNizamsChild;


 

 







