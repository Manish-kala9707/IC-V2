
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
import BookList from "../TextualRepository/TextualRepositoryCard/BookList";
import TextualRepositoryDetails from "../TextualRepository/TextualRepositoryDetails";
const Rarebooks = () => {
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
        {location && !location?.pathname?.includes("title") &&     <>   <Container className="archive-header">
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
                      <h1 className="text-center">{t("Rare Book on Forts")}</h1>
                      <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                    </Col></Row>
                  </Container>
                   <Container fluid className="fortindicover">
                          <Row >
                            <Col md={12} ><div className="mt-2 p-5 fortcardbg rounded">
                              <p>
                                 Rare books are repositories of knowledge of our past. In this section, we have identified and brought together some rare texts from our vast archive that provide exclusive insight into the forts of our country. These books range from primary records from the colonial times to works by indigenous scholars on the history, art and architecture of forts.

                              </p></div>
                            </Col>
                          </Row>
                        </Container>
                  </>}
        {location && !location?.pathname?.includes("title") &&
          <Container fluid>
           <Row className="fortssearchrow pr-2">
              <Col lg={6} md={6}></Col>
            <CounterCard pageNumber= {pageNumber} total_items={total_items} items_per_page= {items_per_page}  t={t}/>
            </Row>
        </Container>
        }
        {location && location?.pathname?.includes("title") ? (
          fetchedData && fetchedData.length > 0 && fetchedData
            .filter((x) => x.nid == nid)
            .map((x) => {
              return <TextualRepositoryDetails key={x.nid} detailData={x} />;
            })
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
export default Rarebooks;
 


