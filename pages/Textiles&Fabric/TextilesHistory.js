

 
import { Col, Container, Row, Button, Tabs, Tab } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Divider from "../../image/SwirlDivider.png";
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData"
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
 
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import "./TextilesHistory.css"
const TextilesHistory = () => {
  const location = useLocation()
  const [key, setKey] = useState("0");
  const navigate = useNavigate()
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
 
 
  const { t } = useTranslation()
 
  console.log("fethed", fetchedData)
  return (
    <>
      {!response.ok ? (<ErrorPage response={response} />) : (<div className="App">
        {location && !location?.pathname?.includes("title") && <Container className="archive-header">
          <Tabs
            id="pan-india-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {fetchedData.map((item, index) => (
              <Tab
                eventKey={index.toString()}
                title={item.title}
                key={index}
              >
                <div dangerouslySetInnerHTML={{ __html: item.body }} />
              </Tab>
            ))}
          </Tabs>
        </Container>}
 
 
      </div>)
      }
    </>
  );
};
export default TextilesHistory;
 
 
 
 
 