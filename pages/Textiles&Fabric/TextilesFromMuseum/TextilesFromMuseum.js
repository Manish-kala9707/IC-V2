// // import React, { useEffect, useState } from 'react';
// // import { Container, Row, Col } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';
// // import { useContext } from "react";
// // import { ContextData } from "../../../pages/Store/FetchApiData";


// // const TextilesFromMuseum = () => {

// //     const {
// //         fetchedData,
// //         title,
// //         nid,
// //         totalPages,
// //         total_items,
// //         items_per_page,
// //         current_page,
// //         pagename,
// //         pageNumber,
// //         filterSearchdata,
// //         filterSearchdata2,
// //         error,
// //         response
// //       } = useContext(ContextData);

// //       console.log("fetchedData at museum", fetchedData)

// //   return (
// //     <div id="block-filters">
// //       <h3>Explore Textiles from Museums across India</h3>
// //       <Container className="dynamicTile">
// //         <Row>
// //           {fetchedData.map((museum, index) => (
// //             <Col key={index} sm={museum.gridSize || 4} xs={12} className="p-1">
// //               <div className="tile">
// //                 <Link to={museum.link}>
// //                   <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
// //                     <div className="carousel-inner">
// //                       {museum.images.map((img, imgIndex) => (
// //                         <div 
// //                           key={imgIndex} 
// //                           className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}
// //                         >
// //                           <img 
// //                             src={img.url} 
// //                             className="img-responsive d-block w-100" 
// //                             alt={museum.title} 
// //                           />
// //                           <div className="imgcaption">{img.caption || museum.title}</div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </div>
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default TextilesFromMuseum;








// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const museums = [
//   {
//     caption: 'National Museum, New Delhi',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/national-museum-collection',
//     images: [
//       '/system/files/textileeassay/national_museum.jpg',
//       '/system/files/textileeassay/National%20Museum%20_1.jpg',
//       '/system/files/textileeassay/National%20Museum_2.jpg',
//       '/system/files/textileeassay/National%20Museum_3.jpg'
//     ]
//   },
//   {
//     caption: 'Indian Museum, Kolkata',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/indian-museum-collection',
//     images: [
//       '/system/files/textileeassay/Indian_Museum_Kolkata.jpg',
//       '/system/files/textileeassay/Indian%20Museum_1.jpg',
//       '/system/files/textileeassay/Indian%20Museum_2.jpg',
//       '/system/files/textileeassay/Indian%20Museum_3.jpg'
//     ]
//   },
//   {
//     caption: 'Salar Jung Museum, Hyderabad',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/sjm-museum-collection',
//     images: [
//       '/system/files/textileeassay/Salar_Jung_Museum%2C_Hyderabad.jpg',
//       '/system/files/textileeassay/Salar%20Jung_1.jpg',
//       '/system/files/textileeassay/Salar%20Jung_2.jpg',
//       '/system/files/textileeassay/Salar%20Jung_3.jpg'
//     ]
//   },
//   {
//     caption: 'Allahabad Museum, Prayagraj',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/allahabad-museum-collection',
//     images: [
//       '/system/files/textileeassay/Allahabad_Museum.jpg',
//       '/system/files/textileeassay/Allahabad%20Museum_1.jpg',
//       '/system/files/textileeassay/Allahabad_2.jpg',
//       '/system/files/textileeassay/Allahabad%20Museum_3.jpg'
//     ]
//   },
//   {
//     caption: 'Victoria Memorial Hall, Kolkata',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/victoria-memorial-hall-collection',
//     images: [
//       '/system/files/textileeassay/Victoria_Memorial.jpg',
//       '/system/files/textileeassay/Victoria%20Memorial_1.jpg',
//       '/system/files/textileeassay/Victoria%20Memorial_2.jpg',
//       '/system/files/textileeassay/Victoria%20Memorial_3.jpg'
//     ]
//   }
// ];

// const TextilesFromMuseum = () => {
//   return (
//     <section className="py-4" id="product">
//       <Container>
//         <h3 className="mb-4 text-center">Explore Textiles from Museums across India</h3>
//         <Row>
//           {museums.map((museum, idx) => (
//             <Col key={idx} xs={12} sm={6} lg={4} className="p-2">
//               <div className="tile">
//                 <a href={museum.link}>
//                   <Carousel indicators={false}>
//                     {museum.images.map((img, imgIdx) => (
//                       <Carousel.Item key={imgIdx}>
//                         <img
//                           className="d-block w-100"
//                           src={img}
//                           alt={`Slide ${imgIdx}`}
//                         />
//                         <div className="imgcaption">{museum.caption}</div>
//                       </Carousel.Item>
//                     ))}
//                   </Carousel>
//                 </a>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       <style>{`
//         .tile {
//           position: relative;
//           overflow: hidden;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//         }

//         .tile img {
//           height: 350px;
//           object-fit: cover;
//         }

//         .imgcaption {
//           position: absolute;
//           bottom: 10%;
//           left: 0;
//           width: 100%;
//           background-color: rgba(34, 33, 33, 0.55);
//           color: #fff;
//           text-align: center;
//           padding: 10px 5px;
//           font-size: 1.2rem;
//           z-index: 10;
//         }

//         @media (max-width: 768px) {
//           .imgcaption {
//             font-size: 1rem;
//             padding: 8px 4px;
//           }

//           .tile img {
//             height: 250px;
//           }
//         }

//         @media (max-width: 480px) {
//           .imgcaption {
//             font-size: 0.9rem;
//           }

//           .tile img {
//             height: 200px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TextilesFromMuseum;





// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const IMAGE_BASE = 'https://icvtesting.nvli.in';

// const museums = [
//   {
//     caption: 'National Museum, New Delhi',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/national-museum-collection',
//     images: [
//       '/system/files/textileeassay/national_museum.jpg',
//       '/system/files/textileeassay/National%20Museum%20_1.jpg',
//       '/system/files/textileeassay/National%20Museum_2.jpg',
//       '/system/files/textileeassay/National%20Museum_3.jpg'
//     ]
//   },
//   {
//     caption: 'Indian Museum, Kolkata',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/indian-museum-collection',
//     images: [
//       '/system/files/textileeassay/Indian_Museum_Kolkata.jpg',
//       '/system/files/textileeassay/Indian%20Museum_1.jpg',
//       '/system/files/textileeassay/Indian%20Museum_2.jpg',
//       '/system/files/textileeassay/Indian%20Museum_3.jpg'
//     ]
//   },
//   {
//     caption: 'Salar Jung Museum, Hyderabad',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/sjm-museum-collection',
//     images: [
//       '/system/files/textileeassay/Salar_Jung_Museum%2C_Hyderabad.jpg',
//       '/system/files/textileeassay/Salar%20Jung_1.jpg',
//       '/system/files/textileeassay/Salar%20Jung_2.jpg',
//       '/system/files/textileeassay/Salar%20Jung_3.jpg'
//     ]
//   },
//   {
//     caption: 'Allahabad Museum, Prayagraj',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/allahabad-museum-collection',
//     images: [
//       '/system/files/textileeassay/Allahabad_Museum.jpg',
//       '/system/files/textileeassay/Allahabad%20Museum_1.jpg',
//       '/system/files/textileeassay/Allahabad_2.jpg',
//       '/system/files/textileeassay/Allahabad%20Museum_3.jpg'
//     ]
//   },
//   {
//     caption: 'Victoria Memorial Hall, Kolkata',
//     link: '/textiles-and-fabrics-of-india/textiles-museum-collections/victoria-memorial-hall-collection',
//     images: [
//       '/system/files/textileeassay/Victoria_Memorial.jpg',
//       '/system/files/textileeassay/Victoria%20Memorial_1.jpg',
//       '/system/files/textileeassay/Victoria%20Memorial_2.jpg',
//       '/system/files/textileeassay/Victoria%20Memorial_3.jpg'
//     ]
//   }
// ];

// const TextilesFromMuseum = () => {
//   return (
//     <section className="py-4" id="product">
//       <Container>
//         <h3 className="mb-4 text-center">Explore Textiles from Museums across India</h3>
//         <Row>
//           {museums.map((museum, idx) => (
//             <Col key={idx} xs={12} sm={6} lg={4} className="p-2">
//               <div className="tile">
//                 <a href={museum.link}>
//                   <Carousel indicators={false}>
//                     {museum.images.map((img, imgIdx) => (
//                       <Carousel.Item key={imgIdx}>
//                         <img
//                           className="d-block w-100"
//                           src={`${IMAGE_BASE}${img}`}
//                           alt={`Slide ${imgIdx}`}
//                         />
//                         <div className="imgcaption">{museum.caption}</div>
//                       </Carousel.Item>
//                     ))}
//                   </Carousel>
//                 </a>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       <style>{`
//         .tile {
//           position: relative;
//           overflow: hidden;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//         }

//         .tile img {
//           height: 350px;
//           object-fit: cover;
//         }

//         .imgcaption {
//           position: absolute;
//           bottom: 10%;
//           left: 0;
//           width: 100%;
//           background-color: rgba(34, 33, 33, 0.55);
//           color: #fff;
//           text-align: center;
//           padding: 10px 5px;
//           font-size: 1.2rem;
//           z-index: 10;
//         }

//         @media (max-width: 768px) {
//           .imgcaption {
//             font-size: 1rem;
//             padding: 8px 4px;
//           }

//           .tile img {
//             height: 250px;
//           }
//         }

//         @media (max-width: 480px) {
//           .imgcaption {
//             font-size: 0.9rem;
//           }

//           .tile img {
//             height: 200px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TextilesFromMuseum;





import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextilesFromMuseum.css'; 

const IMAGE_BASE = 'https://icvtesting.nvli.in';

const museums = [
  {
    caption: 'National Museum, New Delhi',
    link: '/textiles-and-fabrics-of-india/textiles-museum-collections/national-museum-collection',
    images: [
      '/system/files/textileeassay/national_museum.jpg',
      '/system/files/textileeassay/National%20Museum%20_1.jpg',
      '/system/files/textileeassay/National%20Museum_2.jpg',
      '/system/files/textileeassay/National%20Museum_3.jpg'
    ]
  },
  {
    caption: 'Indian Museum, Kolkata',
    link: '/textiles-and-fabrics-of-india/textiles-museum-collections/indian-museum-collection',
    images: [
      '/system/files/textileeassay/Indian_Museum_Kolkata.jpg',
      '/system/files/textileeassay/Indian%20Museum_1.jpg',
      '/system/files/textileeassay/Indian%20Museum_2.jpg',
      '/system/files/textileeassay/Indian%20Museum_3.jpg'
    ]
  },
  {
    caption: 'Salar Jung Museum, Hyderabad',
    link: '/textiles-and-fabrics-of-india/textiles-museum-collections/sjm-museum-collection',
    images: [
      '/system/files/textileeassay/Salar_Jung_Museum%2C_Hyderabad.jpg',
      '/system/files/textileeassay/Salar%20Jung_1.jpg',
      '/system/files/textileeassay/Salar%20Jung_2.jpg',
      '/system/files/textileeassay/Salar%20Jung_3.jpg'
    ]
  },
  {
    caption: 'Allahabad Museum, Prayagraj',
    link: '/textiles-and-fabrics-of-india/textiles-museum-collections/allahabad-museum-collection',
    images: [
      '/system/files/textileeassay/Allahabad_Museum.jpg',
      '/system/files/textileeassay/Allahabad%20Museum_1.jpg',
      '/system/files/textileeassay/Allahabad_2.jpg',
      '/system/files/textileeassay/Allahabad%20Museum_3.jpg'
    ]
  },
  {
    caption: 'Victoria Memorial Hall, Kolkata',
    link: '/textiles-and-fabrics-of-india/textiles-museum-collections/victoria-memorial-hall-collection',
    images: [
      '/system/files/textileeassay/Victoria_Memorial.jpg',
      '/system/files/textileeassay/Victoria%20Memorial_1.jpg',
      '/system/files/textileeassay/Victoria%20Memorial_2.jpg',
      '/system/files/textileeassay/Victoria%20Memorial_3.jpg'
    ]
  }
];

const TextilesFromMuseum = () => {
  return (
    <section className="py-4" id="product">
      <Container>
        <h3 className="mb-4 text-center">Explore Textiles from Museums across India</h3>
        <Row>
          {museums.map((museum, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4} className="p-2">
              <div className="tile">
                <a href={museum.link}>
                  <Carousel indicators={false}>
                    {museum.images.map((img, imgIdx) => (
                      <Carousel.Item key={imgIdx}>
                        <img
                          className="d-block w-100"
                          src={`${IMAGE_BASE}${img}`}
                          alt={`Slide ${imgIdx}`}
                        />
                        <div className="imgcaption">{museum.caption}</div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TextilesFromMuseum;
