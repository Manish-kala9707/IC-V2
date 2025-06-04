


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
// import { Col, Container, Row, Button } from "react-bootstrap";
// // import Offcanvas from "react-bootstrap/Offcanvas";
// // import React, { useState, useEffect, lazy, Suspense } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// // import CardDetails from "../../components/Card/CardDetails";
// // import { Filter, Search } from "react-feather";
// import Divider from "../../../image/SwirlDivider.png";
// import { useContext } from "react";
// import { useTranslation } from "react-i18next";

// import ErrorPage from "../../../components/Card/ErrorPage";
// import { ContextData } from "../../Store/FetchApiData";
// import CounterCard from "../../../components/Card/CounterCard";
// import Card from "../../../components/Card/Card";
// import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
// import Pagination2 from "../../../components/Pagination/Pagination2";


// const TextileTypesChild = () => {
//   const {
//     fetchedData,
//     title,
//     nid,
//     totalPages,
//     total_items,
//     items_per_page,
//     current_page,
//     pagename,
//     pageNumber,
//     filterSearchdata,
//     filterSearchdata2,
//     error,
//     response,
//   } = useContext(ContextData);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   return (
//     <>
//       {!response.ok ? (
//         <ErrorPage />
//       ) : (
//         <div className="App">
//           {location && !location?.pathname?.includes("title") && (
//             <Container className="archive-header">
//               <Row>
//                 <Col>
//                   {location.pathname.includes("weaving") && (
//                     <h1>Weaving</h1>
//                   )}
//                   {location.pathname.includes("embroidery") && <h1>Embroidery</h1>}
//                   {location.pathname.includes("painting") && (
//                     <h1>Painting</h1>
//                   )}
//                   {location.pathname.includes("dyeing") && <h1>Dyeing</h1>}
//                   {location.pathname.includes("printing") && <h1>Printing</h1>}
//                   <img
//                     src={Divider}
//                     alt="Caption Divider"
//                     style={{
//                       marginTop: "-17px",
//                       width: "90px",
//                       height: "15px",
//                       backgroundColor: "transparent",
//                     }}
//                   />
//                 </Col>
//               </Row>
//             </Container>
//           )}

//           {location && !location?.pathname?.includes("title") && (
//             <Container>
//               <Row>
//                 <Col lg={6} md={6}></Col>
//                 {/* <InternalSearchCard filterSearchdata={filterSearchdata} filterSearchdata2={filterSearchdata2} category={"other-collections"}/> */}
//                 <CounterCard
//                   pageNumber={pageNumber}
//                   total_items={total_items}
//                   items_per_page={items_per_page}
//                   t={t}
//                 />
//               </Row>
//             </Container>
//           )}
//           {location && location?.pathname?.includes("title") ? (
//             fetchedData && fetchedData.length > 0 ? (
//               fetchedData
//                 .filter((x) => x.nid == nid)
//                 .map((x) => {
//                   return (
//                     <TextileTypesChild key={x.nid} detailData={x} />
//                   );
//                 })
//             ) : (
//               <ShimmerCardDetails />
//             )
//           ) : (
//             <Container>
//               <Row>
//                 <div className="page-content">
//                   <Card
//                     page="/"
//                     search_results={fetchedData}
//                     response={response}
//                     items_per_page={items_per_page}
//                     total_items={total_items}
//                     className="page-content"
//                   />
//                 </div>
//               </Row>
//             </Container>
//           )}
//           {location && !location.pathname.includes("title") && (
//             <Pagination2 totalPages={totalPages} baseUrl="/videos" />
//           )}
//         </div>
//       )}
//     </>
//   );
// };
// export default TextileTypesChild;


// import React from "react";
// // import './FreedomArchive.css';
// import FICeleBan from "../../../image/FICeleBan.png";
// import { Col, Container, Row, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useContext } from "react";
// import { ContextData } from "../../Store/FetchApiData";
// import CounterCard from "../../../components/Card/CounterCard";
// import Card from "../../../components/Card/Card";
// import Pagination2 from "../../../components/Pagination/Pagination2";
// import Divider from "../../../image/SwirlDivider.png";
// import Slider1 from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import FICeleimg1 from "../../../image/celeimg1.png";
// import FICeleimg2 from "../../../image/celeimg2.png";
// import FICeleimg3 from "../../../image/celeimg3.png";
// import FICeleimg4 from "../../../image/celeimg4.png";
// import { useTranslation } from "react-i18next";

// import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
// import ErrorPage from "../../../components/Card/ErrorPage";
// import { useLocation } from "react-router-dom";
// function TextileTypesChild() {
//   const {
//     fetchedData,
//     title,
//     nid,
//     totalPages,
//     total_items,
//     items_per_page,
//     current_page,
//     pagename,
//     pageNumber,
//     filterSearchdata,
//     filterSearchdata2,
//     error,
//     response,
//   } = useContext(ContextData);
//   const { t } = useTranslation();
//   const location=useLocation()
//   return (
//     <>
//       {!response.ok ? (
//         <ErrorPage response={response} />
//       ) : (
//         <div className="App">
//           {location && !location?.pathname?.includes("title") && (
//             <>
//               <Container className="ficelenat-header">
//                 <Row>
//                   <Col>
//                   {location.pathname.includes("weaving") && <h1>Weaving</h1> }
//                   {location.pathname.includes("embroidery") && <h1>Embroidery</h1> }
//                   {location.pathname.includes("painting") && <h1>Painting</h1> }
//                   {location.pathname.includes("dyeing") && <h1>Dyeing</h1> }
//                   {location.pathname.includes("printing") && <h1>Printing</h1> }
//                     {/* <SwrilDivider /> */}
//                   </Col>
//                 </Row>
//               </Container>
//               <Container className="ficelenat-cover">
//                 <Row className="justify-content-md-center">
//                   <Col>
//                     {location.pathname.includes("weaving") && location.pathname.includes("lang=hi") ? (
//                       <p>
//                         बुनाई से तात्पर्य वस्त्र और कपड़े बनाने के लिए धागे को आपस में जोड़ने की प्रक्रिया से है। ऊर्ध्वाधर धागे को ताना कहा जाता है, जबकि क्षैतिज धागे को बाना कहा जाता है। ताना और बाना आमतौर पर करघे का उपयोग करके निश्चित पैटर्न में बुना जाता है। लेस लगाने के विभिन्न तरीकों से विभिन्न प्रकार की बुनाई होती है। समकोण पर ताना और बाना को एक सरल क्रॉस-क्रॉसिंग को सादा-बुनाई कहा जाता है। ट्विल-बुनाई में, ताना और बाना को एक साथ जोड़कर एक विशिष्ट विकर्ण पैटर्न बनाया जाता है, जबकि साटन-बुनाई तकनीक में चार या अधिक ताना धागे बाने के ऊपर तैरते हैं। भारत में विभिन्न स्थानों के कारीगरों के पास सादे और रंगे हुए धागे बुनने की अपनी अनूठी शैली है, जिससे कई तरह के विशिष्ट वस्त्र और कपड़े बनते हैं।
//                       </p>
//                     ) : (
//                       <p>
//                          Weaving refers to the process of interlacing yarn to produce textiles and fabrics. The vertical thread is called the warp, while the horizontal thread is referred to as the weft. Warp and weft are usually laced in fixed patterns using a loom. The different ways of lacing results in varied types of weaves. A simple criss-crossing of the warp and the weft at right angles is called plain-weave. In twill-weave, the warp and weft are laced together to form a typical diagonal pattern, while four or more warp yarns are floated over the weft in the satin-weave technique. In India artisans from different places have their unique styles of weaving plain and dyed yarns, leading to a range of distinguished textiles and fabrics.
//                       </p>
//                     )}
//                     {location.pathname.includes("embroidery") && location.pathname.includes("lang=hi") ?
//                 (<p>यह एक प्राचीन भारतीय कला है जिसमें धागे, मोती, मनके, कलम और सेक्विन जैसी सामग्रियों से कपड़े को सजाने की प्रक्रिया शामिल है। पारंपरिक कढ़ाई में इस्तेमाल किए जाने वाले कपड़े और सजावट की सामग्री हर क्षेत्र में अलग-अलग होती है।</p>     
//                 ) : (
//                 <p>An ancient Indian art involving the process of decorating fabric with materials like threads, pearls, beads, quills and sequins. The fabrics and decorating material used in traditional embroidery vary from region to region. </p>)}
//                   </Col>
//                 </Row>
//               </Container>
//             </>
//           )}

//           {location && !location?.pathname?.includes("title") && (
//             <Container>
//               <Row>
//                 <Col lg={6} md={6}></Col>
//                 <CounterCard
//                   pageNumber={pageNumber}
//                   total_items={total_items}
//                   items_per_page={items_per_page}
//                   t={t}
//                 />
//               </Row>
//             </Container>
//           )}
//           {location && location?.pathname?.includes("title") ? (
//             fetchedData && fetchedData.length > 0 ? (
//               fetchedData
//                 .filter((x) => x.nid == nid)
//                 .map((x) => {
//                   return <TextileTypesChild key={x.nid} detailData={x} />;
//                 })
//             ) : (
//               <ShimmerCardDetails />
//             )
//           ) : (
//             <Container>
//               <Row>
//                 <div className="page-content">
//                   <Card
//                     page="/"
//                     search_results={fetchedData}
//                     response={response}
//                     className="page-content"
//                   />
//                 </div>
//               </Row>
//             </Container>
//           )}
//           {location && !location.pathname.includes("title") && (
//             <Pagination2 totalPages={totalPages} baseUrl="/videos" />
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// export default TextileTypesChild;



// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
// import { Col, Container, Row, Button } from "react-bootstrap";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Divider from "../../../image/SwirlDivider.png";
// import { useContext, useState } from "react";
// import { useTranslation } from "react-i18next";

// import ErrorPage from "../../../components/Card/ErrorPage";
// import { ContextData } from "../../Store/FetchApiData";
// import CounterCard from "../../../components/Card/CounterCard";
// import Card from "../../../components/Card/Card";
// import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
// import Pagination2 from "../../../components/Pagination/Pagination2";

// const TextileTypesChild = () => {
//   const {
//     fetchedData,
//     title,
//     nid,
//     totalPages,
//     total_items,
//     items_per_page,
//     current_page,
//     pagename,
//     pageNumber,
//     filterSearchdata,
//     filterSearchdata2,
//     error,
//     response,
//   } = useContext(ContextData);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const [selectedTextile, setSelectedTextile] = useState(null);

//   // Filter the fetchedData by nid to display the selected textile details
//   const handleItemClick = (item) => {
//     setSelectedTextile(item);
//   };

//   // Helper function to extract valid images (remove empty or whitespace images)
//   const getValidImages = (imageString) => {
//     return imageString
//       ? imageString
//           .split(',')
//           .map((img) => img.trim()) // Trim each image URL
//           .filter((img) => img !== '') // Filter out any empty image URLs
//       : [];
//   };

//   return (
//     <>
//       {!response.ok ? (
//         <ErrorPage />
//       ) : (
//         <div className="App">
//           {/* Display header for categories */}
//           {location && !location?.pathname?.includes("title") && (
//             <Container className="archive-header">
//               <Row>
//                 <Col>
//                   {location.pathname.includes("weaving") && (
//                     <h1>Weaving</h1>
//                   )}
//                   {location.pathname.includes("embroidery") && (
//                     <h1>Embroidery</h1>
//                   )}
//                   {location.pathname.includes("painting") && (
//                     <h1>Painting</h1>
//                   )}
//                   {location.pathname.includes("dyeing") && (
//                     <h1>Dyeing</h1>
//                   )}
//                   {location.pathname.includes("printing") && (
//                     <h1>Printing</h1>
//                   )}
//                   <img
//                     src={Divider}
//                     alt="Caption Divider"
//                     style={{
//                       marginTop: "-17px",
//                       width: "90px",
//                       height: "15px",
//                       backgroundColor: "transparent",
//                     }}
//                   />
//                 </Col>
//               </Row>
//             </Container>
//           )}

//           {/* If textile is selected, show the detailed content */}
//           {selectedTextile ? (
//             <Container>
//               {/* Row for images */}
//               <Row>
//                 {getValidImages(selectedTextile.field_textile_category_image).map(
//                   (img, idx) => (
//                     <Col md={4} key={idx}>
//                       <img
//                         src={`http://icvtesting.nvli.in${img}`}
//                         alt={`Textile Image ${idx}`}
//                         style={{
//                           width: '100%',
//                           height: 'auto',
//                           objectFit: 'cover',
//                         }}
//                       />
//                     </Col>
//                   )
//                 )}
//               </Row>

//               {/* Row for title and body */}
//               <Row className="mt-4">
//                 <Col>
//                   <h2>{selectedTextile.title}</h2>
//                   <p>{selectedTextile.body}</p>
//                 </Col>
//               </Row>
//             </Container>
//           ) : (
//             // Show content if no textile is selected, e.g., the list of textile types
//             <>
//               {location && !location.pathname.includes("title") && (
//                 <Container>
//                   <Row>
//                     <Col lg={6} md={6}></Col>
//                     <CounterCard
//                       pageNumber={pageNumber}
//                       total_items={total_items}
//                       items_per_page={items_per_page}
//                       t={t}
//                     />
//                   </Row>
//                 </Container>
//               )}

//               {location && location?.pathname?.includes("title") ? (
//                 fetchedData && fetchedData.length > 0 ? (
//                   fetchedData
//                     .filter((x) => x.nid === nid)
//                     .map((x) => (
//                       <TextileTypesChild key={x.nid} detailData={x} />
//                     ))
//                 ) : (
//                   <ShimmerCardDetails />
//                 )
//               ) : (
//                 <Container>
//                   <Row>
//                     <div className="page-content">
//                       <Card
//                         page="/"
//                         search_results={fetchedData}
//                         response={response}
//                         items_per_page={items_per_page}
//                         total_items={total_items}
//                         className="page-content"
//                       />
//                     </div>
//                   </Row>
//                 </Container>
//               )}
//               {location && !location.pathname.includes("title") && (
//                 <Pagination2 totalPages={totalPages} baseUrl="/videos" />
//               )}
//             </>
//           )}

//           {/* If no textile is selected, display the list of items as clickable carousels */}
//           <Container>
//             <Row>
//               {fetchedData.map((item, index) => {
//                 const validImages = getValidImages(item.field_textile_category_image);
//                 return validImages.length > 0 ? (
//                   <Col md={4} key={index}>
//                     <div
//                       onClick={() => handleItemClick(item)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <h5>{item.title}</h5>
//                       <p>{item.body}</p>
//                       <img
//                         src={`http://icvtesting.nvli.in${validImages[0]}`}
//                         alt={`Textile Type ${index}`}
//                         style={{
//                           width: '100%',
//                           height: 'auto',
//                           objectFit: 'cover',
//                         }}
//                       />
//                     </div>
//                   </Col>
//                 ) : null;
//               })}
//             </Row>
//           </Container>
//         </div>
//       )}
//     </>
//   );
// };

// export default TextileTypesChild;


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ErrorPage from "../../../components/Card/ErrorPage";
import { ContextData } from "../../Store/FetchApiData";
import CounterCard from "../../../components/Card/CounterCard";
import Card from "../../../components/Card/Card";
import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
import Pagination2 from "../../../components/Pagination/Pagination2";
import Divider from "../../../image/SwirlDivider.png";
import { useLocation } from "react-router-dom";
import './TextileTypesChild.css';
const TextileTypesChild = () => {
  const {
    fetchedData,
    totalPages,
    total_items,
    items_per_page,
    pageNumber,
    response,
  } = useContext(ContextData);

  const { t } = useTranslation();
  const location=useLocation();

  const [selectedTextile, setSelectedTextile] = useState(null);

  // Helper function to extract valid images (remove empty or whitespace images)
  const getValidImages = (imageString) => {
    return imageString
      ? imageString
          .split(",")
          .map((img) => img.trim()) // Trim each image URL
          .filter((img) => img !== "") // Filter out any empty image URLs
      : [];
  };

  // Handle click on carousel item to show selected textile details
//   const handleCarouselClick = (item) => {
//     setSelectedTextile(item);
//     console.log("Clicked Carousel:", item); // You can add any other logic here (e.g., navigating to a different page or showing a modal)
//   };

//   return (
//     <>
//       {!response.ok ? (
//         <ErrorPage />
//       ) : (
//         <div className="App">
//           {/* Display header for categories */}
//           <Container className="archive-header">
//             <Row>
//               <Col>
//               {location.pathname.includes("weaving") && (
//                     <h1>Weaving</h1>
//                   )}
//                   {location.pathname.includes("embroidery") && (
//                     <h1>Embroidery</h1>
//                   )}
//                   {location.pathname.includes("painting") && (
//                     <h1>Painting</h1>
//                   )}
//                   {location.pathname.includes("dyeing") && (
//                     <h1>Dyeing</h1>
//                   )}
//                   {location.pathname.includes("printing") && (
//                     <h1>Printing</h1>
//                   )}
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

//           {/* If textile is selected, show the detailed content */}
//           {/* 
//           ( */}
//             {/* // If no textile is selected, show the list of textile types as carousel */}
            
//             <Container>
//               <Row>
//                 {fetchedData.map((item, index) => {
//                   const validImages = getValidImages(item.field_textile_category_image);
//                   if (validImages.length > 0) {
//                     return (
//                       <Col md={4} key={index}>
//                         <div
//                         //   onClick={() => handleCarouselClick(item)}
//                         //   style={{ cursor: "pointer" }}
//                         >
//                           <Carousel>
//                             {/* Carousel for images of the textile */}
//                             {validImages.map((img, idx) => (
//                               <Carousel.Item key={idx}>
//                                 <div className="image-wrapper">
//                                   <Image
//                                     src={`http://icvtesting.nvli.in${img}`}
//                                     alt={`Textile Type ${idx}`}
//                                     style={{
//                                       height: "400px",
//                                       width: "100%",
//                                       objectFit: "cover",
//                                     }}
//                                     rounded
//                                   />
//                                 </div>
                                
//                               </Carousel.Item>
//                             ))}
//                           </Carousel>
//                         </div>
//                       </Col>
//                     );
//                   }
//                   return null; // Return null if no valid images exist
//                 })}
//               </Row>
//               <Carousel.Caption>
//                                   <Row>
//                                     <Col>
//                                     <h5>{item.title}</h5>
//                                   <h2>{item.field_type_state}</h2>
//                                   {/* <p>{item.body}</p> */}
//                                   <h6>{item.body}</h6>
//                                     </Col>
//                                   </Row>
//                                 </Carousel.Caption>
//             </Container>
          

//           {/* Pagination */}
//           <Pagination2 totalPages={totalPages} baseUrl="/videos" />
//         </div>
//       )}
//     </>
//   );
// };

// export default TextileTypesChild;


return (
    <>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <div className="App">
          {/* Display header for categories */}
          <Container className="archive-header">
            <Row>
              <Col>
                {location.pathname.includes("Weaving") && <h1>Weaving</h1>}
                {location.pathname.includes("Embroidery") && <h1>Embroidery</h1>}
                {location.pathname.includes("Painting") && <h1>Painting</h1>}
                {location.pathname.includes("Dyeing") && <h1>Dyeing</h1>}
                {location.pathname.includes("Printing") && <h1>Printing</h1>}
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
  
          {/* If textile is selected, show the detailed content */}
          <Container>
            <Row>
              {fetchedData.map((item, index) => {
                const validImages = getValidImages(item.field_textile_category_image);
                if (validImages.length > 0) {
                  return (
                    <Col md={4} key={index}>
                      <div>
                        <Carousel>
                          {/* Carousel for images of the textile */}
                          {validImages.map((img, idx) => (
                            <Carousel.Item key={idx}>
                              <div className="image-wrapper">
                                <Image
                                  src={`http://icvtesting.nvli.in${img}`}
                                  alt={`Textile Type ${idx}`}
                                  style={{
                                    height: "400px",
                                    width: "100%",
                                    objectFit: "cover",
                                  }}
                                  rounded
                                />
                              </div>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                        {/* Content displayed below the carousel in the next row */}
                        <div className="body">
                        <Row className="mt-3">
                          <Col>
                          <div>
                          <div dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div dangerouslySetInnerHTML={{ __html: item.field_type_state }} />
                            {/* <h4>{item.title}</h4> */}
                            {/* <h5>{item.field_type_state}</h5> */}
                            {/* <h6>{item.body}</h6> */}
                            <div dangerouslySetInnerHTML={{ __html: item.body }} />
                            </div>
                          </Col>
                        </Row></div>
                      </div>
                    </Col>
                  );
                }
                return null; // Return null if no valid images exist
              })}
            </Row>
          </Container>
  
          {/* Pagination */}
          <Pagination2 totalPages={totalPages} baseUrl="/videos" />
        </div>
      )}
    </>
  );
}

  export default TextileTypesChild;
  