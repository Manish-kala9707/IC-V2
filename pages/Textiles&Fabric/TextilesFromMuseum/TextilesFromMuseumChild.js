// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useContext } from "react";
// import { ContextData } from "../../../pages/Store/FetchApiData";


// const TextilesFromMuseumChild = () => {

//     const {
//         fetchedData,
//         title,
//         nid,
//         totalPages,
//         total_items,
//         items_per_page,
//         current_page,
//         pagename,
//         pageNumber,
//         filterSearchdata,
//         filterSearchdata2,
//         error,
//         response
//       } = useContext(ContextData);
      
//       console.log("fetchedData", fetchedData)

//   return (
//     <Container className="dynamicTile">
//       <Row>
//         {fetchedData.map((item, index) => (
//           <Col key={index} xs={6} md={3} lg={3} className="item p-1 grid-group-item">
//             <a href={item.link || "#"} data-toggle="modal">
//               <div className="databox banner-img1">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   width="400"
//                   height="250"
//                   className="img-responsive"
//                 />
//                 <div>
//                   <h2>{item.title}</h2>
//                 </div>
//               </div>
//             </a>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default TextilesFromMuseumChild








// import React, { useContext } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { ContextData } from "../../../pages/Store/FetchApiData";
// import './TextilesFromMuseumChild.css'; 

// const TextilesFromMuseumChild = () => {
//   const { fetchedData } = useContext(ContextData);

//   return (
//     <Container className="dynamicTile">
//       <Row>
//         {fetchedData.map((item, index) => {
//           const anchorHref = item.nid ? `#mu${item.nid}` : "#";
//           return (
//             <Col key={index} xs={6} md={3} lg={3} className="item p-1 grid-group-item">
//               {/* <a href={item.link || "#"} className="d-block text-decoration-none"> */}
//                <a href={anchorHref} data-toggle="modal">
//                 <div className="databox banner-img1 position-relative">
//                   <img
//                     src={`http://icvtesting.nvli.in${item.field_digital_image_file}`}
//                     alt={item.title}
//                     width="400"
//                     height="250"
//                     className="img-fluid"
//                     style={{ objectFit: "cover" }}
//                   />
//                   <div className="text-overlay">
//                     <h2 className="h5 text-white text-center">{item.title}</h2>
//                   </div>
//                 </div>
//               </a>
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };

// export default TextilesFromMuseumChild;






// import React, { useContext, useState } from "react";
// import { Container, Row, Col, Modal, Button } from "react-bootstrap";
// import { ContextData } from "../../../pages/Store/FetchApiData";
// import './TextilesFromMuseumChild.css';

// const TextilesFromMuseumChild = () => {
//   const { fetchedData } = useContext(ContextData);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleShowModal = (item) => {
//     setSelectedItem(item);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedItem(null);
//     setShowModal(false);
//   };

//   return (
//     <Container className="dynamicTile">
//       <Row>
//         {fetchedData.map((item, index) => (
//           <Col key={index} xs={6} md={3} lg={3} className="item p-1 grid-group-item">
//             <div
//               className="databox banner-img1 position-relative"
//               onClick={() => handleShowModal(item)}
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={`http://icvtesting.nvli.in${item.field_digital_image_file}`}
//                 alt={item.title}
//                 width="400"
//                 height="250"
//                 className="img-fluid"
//                 style={{ objectFit: "cover" }}
//               />
//               <div className="text-overlay">
//                 <h2 className="h5 text-white text-center">{item.title}</h2>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>

//       {/* Modal */}
//       <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
//         {selectedItem && (
//           <>
//             <Modal.Header closeButton className="p-2">
//               <Modal.Title className="text-center w-100">{selectedItem.title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Row>
//                 <Col md={6} xs={12}>
//                   <a
//                     href={`http://icvtesting.nvli.in${selectedItem.field_digital_image_file}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="Click to Zoom"
//                   >
//                     <img
//                       className="img-fluid"
//                       src={`http://icvtesting.nvli.in${selectedItem.field_digital_image_file}`}
//                       alt={selectedItem.title}
//                     />
//                   </a>
//                 </Col>
//                 <Col md={6} xs={12}>
//                   <Row className="mb-2">
//                     <Col xs={2}>
//                       <img
//                         src="http://icvtesting.nvli.in/system/files/textileeassay/nmlogo.png"
//                         className="img-fluid"
//                         alt="Logo"
//                       />
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col>
//                       <p>
//                         <b>Accession Number:</b> {selectedItem.field_accession_number}<br />
//                         <b>Title:</b> {selectedItem.title}<br />
//                         <b>Object Type:</b> {selectedItem.field_object_type}<br />
//                         <b>Region:</b> {selectedItem.field_region}<br />
//                         <b>Main Material:</b> {selectedItem.field_main_material}<br />
//                         <b>Date:</b> {selectedItem.field_date}<br />
//                         <b>Manufacturing Technique:</b> {selectedItem.field_manufacturing_technique}<br />
//                         <b>Description:</b> {selectedItem.body?.value || "No description available."}
//                       </p>
//                     </Col>
//                   </Row>
//                 </Col>
//               </Row>
//             </Modal.Body>
//           </>
//         )}
//       </Modal>
//     </Container>
//   );
// };

// export default TextilesFromMuseumChild;








import React, { useContext, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { ContextData } from "../../../pages/Store/FetchApiData";
import './TextilesFromMuseumChild.css';

const TextilesFromMuseumChild = () => {
  const { fetchedData } = useContext(ContextData);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <Container className="dynamicTile">
      <Row>
        {fetchedData.map((item, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            lg={3}
            className="item p-1 grid-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => openModal(item)}
          >
            <div className="databox banner-img1 position-relative">
              <img
                src={`http://icvtesting.nvli.in${item.field_digital_image_file}`}
                alt={item.title}
                width="400"
                height="250"
                className="img-fluid"
                style={{ objectFit: "cover" }}
              />
              <div className="text-overlay">
                <h2 className="h5 text-white text-center">{item.title}</h2>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        {selectedItem && (
          <>
            <Modal.Header closeButton className="p-2">
              <Modal.Title className="text-center w-100">{selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6} xs={12}>
                  <a
                    href={`http://icvtesting.nvli.in${selectedItem.field_digital_image_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to Zoom"
                  >
                    <img
                      className="img-fluid"
                      src={`http://icvtesting.nvli.in${selectedItem.field_digital_image_file}`}
                      alt={selectedItem.title}
                    />
                  </a>
                </Col>
                <Col md={6} xs={12}>
                  <Row className="mb-2">
                    <Col xs={3}>
                      <img
                        src="http://icvtesting.nvli.in/system/files/textileeassay/nmlogo.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="dataimg">
                      <p>
                        <b>Accession Number:</b> {selectedItem.field_accession_number || "N/A"}<br />
                        <b>Title:</b> {selectedItem.title}<br />
                        <b>Object Type:</b> {selectedItem.field_object_type || "N/A"}<br />
                        <b>Region:</b> {selectedItem.field_region || "N/A"}<br />
                        <b>Main Material:</b> {selectedItem.field_main_material || "N/A"}<br />
                        <b>Date:</b> {selectedItem.field_date || "N/A"}<br />
                        <b>Manufacturing Technique:</b> {selectedItem.field_manufacturing_technique || "N/A"}<br />
                        <b>Description:</b> {selectedItem.body?.value || "No description available."}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default TextilesFromMuseumChild;
