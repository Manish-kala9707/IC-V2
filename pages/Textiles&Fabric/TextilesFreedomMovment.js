
import React, { useState, useEffect, lazy, Suspense,useRef} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import Divider from "../../image/SwirlDivider.png"; 
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData"
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import { Col, Container, Row, Button,Tabs, Tab } from "react-bootstrap";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";

import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
const TextilesFreedomMovment = () => {
const [key, setKey] = useState("0");
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


  const{t}=useTranslation()

console.log("fethed",fetchedData)
  return (
    <>
    { !response.ok?(<ErrorPage response={response} />):( <div className="App">
        {location && !location?.pathname?.includes("title") && <Container  className="archive-header">
          <Row>
              <Tabs
                     id="pan-india-tabs"
                     activeKey={key}
                     onSelect={(k) => setKey(k)}
                     className="mb-3"
                   >
                     {fetchedData.map((item, index) => (
                       <Tab eventKey={index.toString()} title={item.title} key={index}>
                         <div dangerouslySetInnerHTML={{ __html: item.field_textile_paragrap }} />
                         <video
                      src={item.field_feb_video.match(/href="([^"]*)"/)[1]}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                        display: "flex",
                        width: "60%",
                        borderRadius: "8px",
                        height: "50%",
                        justifyContent: "center",
                        position: "relative",
                        left: "20%",
                        border: "2px solid white",
                      }}
                    />
                       </Tab>
                     ))}
                   </Tabs>
          </Row>
        </Container>}
      </div>)
    }
   </>
  );
};
export default TextilesFreedomMovment;
 


