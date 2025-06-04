// import React, { useState, useEffect } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// const JewelleryOfNizams = () => {
//     const [fetchedData, setFetchedData] = useState()
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://apitesting.nvli.in/rest-v1/jewellery-of-the-nizams')
//                 const jsonresponse = await response.json();
//                 const data = jsonresponse?.rows?.search_results
//                 setFetchedData(data);
//             } catch (error) {
//                 console.error("Error fetching unescodata:", error);
//             }
//         };

//         fetchData();
//     }, [])
//     return (
//         <div>
//             {/* {fetchedData && fetchedData.map((x,id)=>{
//              return <Carousel  key={id}data-bs-theme="dark">
//              <Carousel.Item>
//                  <img
//                      className="d-block w-100"
//                      src={x.field_jewellery_thumbnail}
//                      alt="First slide"
//                  />
//                  <Carousel.Caption>
//                      <h5>First slide label</h5>
//                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                  </Carousel.Caption>
//              </Carousel.Item>
//              </Carousel>   
//             }
        
//             )} */}
            
//             <h3>Jewellery of the Nizams</h3>
//             <Col className="col-md-8 p-0">         
//              <Row className="forts-wrapper">
//             {fetchedData && fetchedData.map((item,currentIndex)=>{
            
//                 return (
//                   <Col key={currentIndex} className={`forts-card ${currentIndex === 0 || currentIndex === 3 ? '' : 'wide'}`}>     
//                     <Link to={item.title.replace(/\s+/g, "").toLowerCase()} className="forts-card__card-link"> 
//                       <img src={`http://icvtesting.nvli.in${item.field_jewellery_thumbnail}`} alt={item.title} className="forts-card__image" />
//                       <div className="forts-card__text-wrapper">
//                         <h2 className="forts-card__title">{item.title}</h2>               
//                       </div>
//                     </Link>         
//                   </Col>
//                 );
               
//             })}
//             </Row>
//             </Col>
        
//         </div>
//     )
// }

// export default JewelleryOfNizams

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
import { ContextData } from "../../pages/Store/FetchApiData"
import Pagination2 from "../../components/Pagination/Pagination2";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import Card from "../../components/Card/CricleCard";
const JewelleryOfNizams = () => {
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
  return (
<>
     { !response.ok?(<ErrorPage />):( <div className="App">
        {location && !location?.pathname?.includes("title") && <Container  className="archive-header">
          <Row>
            <Col>
              <h1>Jewellery of the Nizams</h1>
              <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
            </Col>
          </Row>
        </Container>}
        <Container ><Row>
            <div  className="page-content">              
                  <Card page="/" search_results={fetchedData}  response={response}  className="page-content" /> 
            </div></Row>
          </Container>
        
       
      </div>)
    }
    </>

  );
};
export default JewelleryOfNizams;

