
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense,useRef} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import CardDetails from "../../components/Card/CardDetails";
import Divider from "../forts/images/FortsofIndia.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData"
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
const DiscoveringForts = () => {
const location=useLocation()
  const navigate=useNavigate()
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
  const{ t}=useTranslation()

  return (
    <>
    { !response.ok?(<ErrorPage />):( <div className="App">
        {location && !location?.pathname?.includes("title") &&   <>   <Container className="archive-header">
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
                      <h1 className="text-center">{t("Discovering the Forts of India")}</h1>
                      <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                    </Col></Row>
                  </Container></>}
  
        {location && !location?.pathname?.includes("title") &&
           <><Container fluid className="mb-2">
            <Row >
              <Col md={12} className="mt-4 ">
              <div className="fortcardbg rounded p-5 ">
                <p>
                  Every fort of India is unique in terms of its history, architectural style and thereby its place in the political and cultural heritage of our country. This section aims to offer comprehensive accounts of individual forts situated in different parts of the subcontinent. The list of forts of India is as vast and divergent as the country itself. This section hopes to gradually showcase this vast treasure of architectural wonders.
                </p></div>
              </Col>
            </Row>
          </Container><Container fluid>
              <Row className="fortssearchrow pr-2">
                <Col lg={6} md={6}></Col>
                <CounterCard pageNumber={pageNumber} total_items={total_items} items_per_page={items_per_page} t={t} />
              </Row>
            </Container></>
        }
        {location && location?.pathname?.includes("title") ? (
          fetchedData && fetchedData.length > 0 ?(fetchedData
            .filter((x) => x.nid == nid)
            .map((x) => {
              return <CardStoryDetails key={x.nid} detailData={x}  />;
            })):(<ShimmerCardDetails/>)
        ) : (
          <Container fluid><Row>
            <div  className="page-content">              
                  <Card page="/" search_results={fetchedData}  response={response} className="page-content" /> 
            </div></Row>
          </Container>
        )}
        {location && !location.pathname.includes("title") && <Pagination2 totalPages={totalPages} baseUrl="/videos" />}
      </div>)
    }
   </>
  );
};
export default DiscoveringForts;
 



 
