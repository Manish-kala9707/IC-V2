// import React from 'react'
// import { Col,Row,Container} from 'react-bootstrap'
// import { SVGMap } from "react-svg-map";
// import India from "@svg-maps/india";
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useLocation, useNavigate } from 'react-router-dom';
// import TextilesStateDetails from './TextilesStateDetails';
// const TextilesState = () => {
//   const [hoveredLocation, setHoveredLocation] = useState(null);
//   const navigate=useNavigate()
//   const location=useLocation();
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//       const [stateName, setStateName] = useState("");
//     const { t } = useTranslation();
//       const onLocationClick = (event) => {
//         const newStateName = event.target.getAttribute("name");
     
//         setStateName(newStateName);
//         navigate(
//           `${location.pathname}/state=${newStateName}`
//         );
//       };
//       const repositoryClick = () => {
//         navigate(`textiles-and-fabrics-of-india/Textiles-and-fabrics-of-indian-state`);
//       };
     
//       const [index, setIndex] = useState(0);
//       const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//       };
     
//       const onLocationMouseOver = (event) => {
//         setHoveredLocation(event.target.getAttribute("name"));
//         setMousePosition({
//           x: event.clientX,
//           y: event.clientY,
//         });
//       };
//       const onLocationMouseOut = () => {
//         setHoveredLocation(null);
//       };
//   return (
//     <Container>
//         <Row>
//          { !location.pathname.includes("state=") && <Col lg={6}>
//             <SVGMap
//               map={India}
//               onLocationClick={onLocationClick}
//               onLocationMouseOver={onLocationMouseOver}
//               onLocationMouseOut={onLocationMouseOut}
//             />
 
//             {hoveredLocation && (
//               <div
//                 style={{
//                   position: "fixed", // Ensure it stays at the mouse position
//                   top: `${mousePosition.y + 5}px`, // Offset to avoid overlap
//                   left: `${mousePosition.x + 7}px`,
//                   background: "#fff",
//                   color: "#000",
//                   padding: "5px 10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "5px",
//                   boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//                   zIndex: 1000,
//                   pointerEvents: "none", // Prevents interaction blocking
//                   fontSize: "14px",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {hoveredLocation}
//               </div>
//             )}
 
//           </Col>}
//           { location.pathname.includes("state=") && <Col lg={6}>
//               <TextilesStateDetails/>
//           </Col>}
//           </Row>
//     </Container>
//   )
// }

// export default TextilesState



import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect, lazy, Suspense,useRef} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import CardDetails from "../../../components/Card/CardDetails";
import Divider from "../../../image/SwirlDivider.png"; 
import { useContext } from "react";
import { ContextData } from "../../../pages/Store/FetchApiData"
import Pagination2 from "../../../components/Pagination/Pagination2";
import InternalSearchCard from "../../../components/Card/InternalSearchCard";
import CounterCard from "../../../components/Card/CounterCard";
import Card from "../../../components/Card/Card";
import ErrorPage from "../../../components/Card/ErrorPage";
import TextilesStateDetails from "./TextilesStateDetails";
import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
const TextilesState = () => {
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


  return (
    <>
    { !response.ok?(<ErrorPage response={response} />):( <div className="App">
        {location && !location?.pathname?.includes("title") && <Container  className="archive-header">
          <Row>
            <Col>
              <h1>{t("Textiles and fabrics of indian state")}</h1>
              <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
            </Col>
          </Row>
        </Container>}
  
        {location && !location?.pathname?.includes("title") &&
          <Container >
            <Row>
           <Col lg={6}></Col>
            <CounterCard pageNumber= {pageNumber} total_items={total_items} items_per_page= {items_per_page}  t={t}/>
            </Row>
        </Container>
        }
        {location && location?.pathname?.includes("title") ? (
          fetchedData && fetchedData.length > 0 ?(fetchedData
            .filter((x) => x.nid == nid)
            .map((x) => {
              return <TextilesStateDetails key={x.nid} detailData={x}  />;
            })):(<ShimmerCardDetails/>)
        ) : (
          <Container ><Row>
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
export default TextilesState;
 








// import React, { useState, useContext, useEffect } from "react";
// import { Col, Row, Container } from "react-bootstrap";
// import { SVGMap } from "react-svg-map";
// import India from "@svg-maps/india";
// import { useTranslation } from "react-i18next";
// import { ContextData } from "../../../pages/Store/FetchApiData";
// import ErrorPage from "../../../components/Card/ErrorPage";
// import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
// import TextilesStateDetails from "./TextilesStateDetails";
// import Divider from "../../../image/SwirlDivider.png";
// import { useNavigate } from "react-router-dom";

// const TextilesState = () => {
//   const { t } = useTranslation();
//   const navigate=useNavigate();
//   const { fetchedData, response } = useContext(ContextData);
//   const [selectedState, setSelectedState] = useState(null);
//   const [hoveredLocation, setHoveredLocation] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Filter textile data based on selected state
//   // const filteredStateData = fetchedData?.filter(
//   //   (item) =>
//   //     item?.field_state?.toLowerCase().trim() === selectedState?.toLowerCase().trim()
//   // );

//    const repositoryClick = () => {
//         navigate(`/textiles-and-fabrics-of-india/Textiles-and-fabrics-of-indian-state/*`);
//       };

//   const onLocationClick = (event) => {
//     const clickedState = event.target.getAttribute("name");
//     setSelectedState(clickedState);
//   };

//   const onLocationMouseOver = (event) => {
//     setHoveredLocation(event.target.getAttribute("name"));
//     setMousePosition({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   };

//   const onLocationMouseOut = () => {
//     setHoveredLocation(null);
//   };

//   console.log("fetchedData at states", fetchedData)
//   // console.log("filteredStateData at states", filteredStateData)

//   return (
//     <>
//       {!response.ok ? (
//         <ErrorPage response={response} />
//       ) : (
//         <div className="App">
//           <Container className="archive-header">
//             <Row>
//               <Col>
//                 <h1>{t("Textiles and fabrics of indian state")}</h1>
//                 <img
//                   src={Divider}
//                   alt="Caption Divider"
//                   style={{
//                     marginTop: "-17px",
//                     width: "90px",
//                     height: "15px",
//                     backgroundColor: "transparent",
//                   }}
//                 />
//               </Col>
//             </Row>
//           </Container>

//           <Container>
//             <Row>
//               <Col lg={6}>
//                 <SVGMap
//                   map={India}
//                   onLocationClick={onLocationClick}
//                   onLocationMouseOver={onLocationMouseOver}
//                   onLocationMouseOut={onLocationMouseOut}
//                 />
//                 {hoveredLocation && (
//                   <div
//                     style={{
//                       position: "fixed",
//                       top: `${mousePosition.y + 5}px`,
//                       left: `${mousePosition.x + 7}px`,
//                       background: "#fff",
//                       color: "#000",
//                       padding: "5px 10px",
//                       border: "1px solid #ccc",
//                       borderRadius: "5px",
//                       boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//                       zIndex: 1000,
//                       pointerEvents: "none",
//                       fontSize: "14px",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {hoveredLocation}
//                   </div>
//                 )}
//               </Col>

//               <Col lg={6}>
//                 {selectedState ? (
//                   fetchedData && fetchedData.length > 0 ? (
//                     fetchedData.map((item) => (
//                       <TextilesStateDetails
//                         key={item.nid}
//                         detailData={item}
//                       />
//                     ))
//                   ) : (
//                     <p>{t("No data available for this state.")}</p>
//                   )
//                 ) : (
//                   <p>{t("Click on a state to view textile details.")}</p>
//                 )}
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       )}
//     </>
//   );
// };

// export default TextilesState;
