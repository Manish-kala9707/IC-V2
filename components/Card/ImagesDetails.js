import React, { useState, useEffect } from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import { Worker, Viewer, Document, Page } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Share2, BookOpen, FileText } from 'react-feather';
import { faQrcode } from '@fortawesome/free-solid-svg-icons'; 
import Divider from "../../image/SwirlDivider.png";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Carousel from 'react-bootstrap/Carousel'; 
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import {faFilePdf, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Qrcode from "./Qrcode";
import SocialShare from "./SocialShare";
const ImagesDetails = ({ detailData, setDetailData }) => { 
const location=useLocation()
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [Shareshow, setShareShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareClose = () => setShareShow(false);
  const handleShow = () => setShow(true);
  const ArcShareShow = () => setShareShow(true);
  let { nid } = useParams();
  let {
    field_video_streaming_url,
    title,type,
    field_dc_contributor_author,
    field_dc_date_issued,
    field_dc_description_abstract,
    field_dc_language_iso,
    field_digital_image_file,
    field_dc_type,field_dc_subject,
    field_dc_format_extent,
    field_parent_library_name,field_dc_format_medium,
    field_dc_description,
    field_dc_description_sponsorship,
    field_dc_format_mimetype,
    field_dc_date_available,
    field_dc_date_accessioned, 
    field_instrument_image,
    field_instrument_image_1,
    field_cuisines_of_india_category,
    field_instrument_material,
    field_musical_instrument_state,
    field_instrument_description,
    field_instrument_first_descripti,
    field_type_of_content,
    field_instrument_type,field_painting_writeups,
    field_dc_publisher,field_dc_source,field_parent_collection_in_dspac,
    field_painting_portfolio_thumbna,field_paintings_image
  } = detailData;
  const imageUrls = [
    ...(field_digital_image_file ? field_digital_image_file.split(',').map(url => url.trim()) : []),
    ...(field_paintings_image ? field_paintings_image.split(',').map(url => url.trim()) : []),
    ...(field_instrument_image_1 ? field_instrument_image_1.split(',').map(url => url.trim()) : [])
  ];
  
  const fullscreenRef = React.useRef(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };
  return (
    <>

    
      <Container fluid className="bg-black">   
      <Row>
      <Col xs={6} md={4} className="offset-md-4 offset-3">
      {field_painting_portfolio_thumbna && <img src={field_painting_portfolio_thumbna}></img>}
      
            {imageUrls && imageUrls.length === 1 ? (
              <img
                className="d-block w-100 img-responsive"
                src={`http://icvtesting.nvli.in${imageUrls[0].split('.').slice(0, -1).join('.')}.webp`} 
                alt={title} title={title}
                onClick={() => openLightbox(0)}
                onError={(e) => {
              e.target.src = `http://icvtesting.nvli.in${imageUrls[0]}`; // Fallback to original image if WebP fails to load
            }} />
            
            ) : (
              <Carousel showArrows={true}>
                {imageUrls && imageUrls.map((url, idx) => (
                  <Carousel.Item key={idx} onClick={() => openLightbox(idx)}>                    
                     <img
               className="d-block w-100 img-responsive"
               src={`http://icvtesting.nvli.in${url.split('.').slice(0, -1).join('.')}.webp`}
               alt={title}
               onError={(e) => {
                 e.target.src = `http://icvtesting.nvli.in${url}`; // Fallback to original image if WebP fails to load
               }}
             />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
            {lightboxIsOpen && (
              <Lightbox
                open={lightboxIsOpen}
                plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
                close={closeLightbox}
                slides={imageUrls.map((url) => ({
                  src: `http://icvtesting.nvli.in${url}`,
                  alt: title,
                  // Add width, height, and srcSet properties if needed
                }))}
                currentIndex={selectedImageIndex}
              />
            )}
 
            
          </Col>
        
      </Row>
     
      </Container>
      
      <Container fluid>
       
      <Row className="pt-2">
      <Col  md={1} xs={2} className='arcicon'>
            <img src={`http://icvtesting.nvli.in/sites/default/files/ItemTypeImg/${location.pathname.split("/")[1]}.png`} alt={type} title={type} className="img-responsive" />
          </Col>
          <Col md={8} xs={6} className='arctitle'>
          </Col>
          
          <Col xs={4} md={3} className='arcqrcode pt-1 mt-0 pull-right text-right'>
          <a onClick={ArcShareShow}> <Share2 size={48} className="icon-stroke" strokeWidth={1} /> </a> &nbsp;
          <a onClick={handleShow}><FontAwesomeIcon icon={faQrcode} className="fa-thin" size="3x" /> </a>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>QR Code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Qrcode value={window.location.href} />
              </Modal.Body>
            </Modal> 
            <Modal show={Shareshow} onHide={handleShareClose}>
              <Modal.Header closeButton>
                <Modal.Title>Share</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <>
                  {/* <div>{window.location.href}</div> */}
                  <SocialShare value={window.location.href} />
                </>
              </Modal.Body>
            </Modal>
        
         
            </Col>
        </Row>
       
      </Container>

      <Container className="archive-header">
        <Row>
          <Col>
            <h1 className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
            <img src={Divider} alt="Caption Divider" lassName="text-center" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
             <hr/>
           {field_instrument_type && (
                <p><i>Type : {field_instrument_type}</i></p>
               )}
            </Col>
        </Row>
        </Container>

      <Container>
             
        <Row> 
          <Col xs={12}>
             {field_painting_writeups && (<p className="pt-3" dangerouslySetInnerHTML={{ __html: field_painting_writeups }} /> )}
            {field_dc_contributor_author && (
                <p className="dctext"> <span className='bold'> Author:</span> {field_dc_contributor_author} </p>
               )}
                {field_dc_date_issued && (
                <p className="dctext"> <span className='bold'> Issue Date:</span> {field_dc_date_issued} </p>
               )}
               {field_video_streaming_url && ( <p className="dctext"><span className='bold'> {field_dc_type === "Audio" ? "url" : "Publisher"}:</span> {field_dc_type === "Audio" ? field_video_streaming_url : field_parent_library_name}</p> 
              )}
              {field_dc_description && (
                <p className="dctext"> <span className='bold'> Description:</span> {field_dc_description} </p>
               )}
              {field_dc_type && (
                <p className="dctext"> <span className='bold'> Type:</span> {field_dc_type} </p>
               )}
          {field_parent_library_name && (
                <p className="dctext"> <span className='bold'> Received From:</span> {field_parent_library_name} </p>
               )}
               {field_instrument_first_descripti && (
                 <p className="pt-3" dangerouslySetInnerHTML={{ __html: field_instrument_first_descripti }} /> 
               )} 
                 {field_musical_instrument_state && (
              <h2
                className="pt-3" 
                dangerouslySetInnerHTML={{ __html: `${title} in ${field_musical_instrument_state}` }} 
              />
            )}

            {field_instrument_material && (
              <p className="pt-3" ><b>Material:</b> {field_instrument_material}</p> 
            )}
             
             {field_instrument_description && (
                 <p className="dctext" dangerouslySetInnerHTML={{ __html: field_instrument_description }} /> 
               )} 
               {field_dc_publisher && (
               <p className="dctext" dangerouslySetInnerHTML={{ __html:`<b>Publisher:</b> ${field_dc_publisher}`, }} /> 
               )} 
                 {field_dc_source && (
                  <p className="dctext" dangerouslySetInnerHTML={{ __html:`<b>Source:</b> ${field_dc_source}`, }} /> 
               )} 
                 {field_dc_subject && (
                 <p className="dctext" dangerouslySetInnerHTML={{ __html:`<b>Subject:</b> ${field_dc_subject}`, }} /> 
               )}  
                 {field_dc_format_medium && (
                  <p className="dctext" dangerouslySetInnerHTML={{ __html:`<b>Format:</b> ${field_dc_format_medium}`, }} /> 
               )} 
          </Col>
          
        </Row>
      </Container>
{field_dc_contributor_author && field_dc_date_accessioned && field_dc_date_available && field_dc_date_issued && field_dc_description_abstract &&(
      <Accordion defaultActiveKey="0" className='accord-component'>
        <Accordion.Item eventKey="0" className='accord-item'>
          <Accordion.Header className='accord-item-header'>Dublin Core View</Accordion.Header>
          <Accordion.Body>
            <Table striped>
              <thead>
                <tr>
                  <th>DC Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dc.contributor.author</td>
                  <td>{field_dc_contributor_author}</td>
                </tr>
                <tr>
                  <td>dc.date.accessioned</td>
                  <td>{field_dc_date_accessioned}</td>
                </tr>
                <tr>
                  <td>dc.date.available</td>
                  <td>{field_dc_date_available}</td>
                </tr>
                <tr>
                  <td>dc.date.issued</td>
                  <td>{field_dc_date_issued}</td>
                </tr>
                <tr>
                  <td>dc.description.abstract</td>
                  <td>{field_dc_description_abstract}</td>
                </tr>
                <tr>
                  <td>dc.description.sponsorship</td>
                  <td>{field_dc_description_sponsorship}</td>
                </tr>
                <tr>
                  <td>dc.format.extent</td>
                  <td>{field_dc_format_extent}</td>
                </tr>
                <tr>
                  <td>dc.format.mimetype</td>
                  <td>{field_dc_format_mimetype}</td>
                </tr>
                <tr>
                  <td>dc.language.iso</td>
                  <td>{field_dc_language_iso}</td>
                </tr>
              </tbody>
            </Table>
           
          </Accordion.Body>
        </Accordion.Item>

        
      </Accordion>)}
    </>
  );
};

export default ImagesDetails;
