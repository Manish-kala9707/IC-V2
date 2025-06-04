import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
//import pdfFile from "./sample.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAngleLeft, faAngleRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PageBook = React.forwardRef(({ setNumPages, scale, file, ...props }, ref) => {

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (

    <div className="demoPage" ref={ref} data-density="hard">
      <Document file={file} onDocumentLoadSuccess={onDocumentLoadSuccess} loading={ 
    <div style={{ textAlign: "center", padding: "20px", fontSize: "16px", color: "white" }}>
       <ClipLoader color="white" size={30} />
    </div>
  }
  error={ 
    <div style={{ textAlign: "center", padding: "20px", fontSize: "16px", color: "white" }}>
       <ClipLoader color="white" size={30} />
    </div>
  }>
        <Page pageNumber={props.pageNumber} renderTextLayer={false}
        loading={ 
          <div style={{ textAlign: "center", padding: "20px", fontSize: "16px", color: "white" }}>
            <ClipLoader color="white" size={30} />
          </div>
        }
        error={ 
          <div style={{ textAlign: "center", padding: "20px", fontSize: "16px", color: "red" }}>
            <ClipLoader color="white" size={30} />
          </div>
        } />
      </Document>
    </div>

  );
});

function MyBook({ file }) {
  console.log(file, "--------");
  const book = React.useRef(null);
  const container = React.useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [zoom, setZoom] = useState(0.9);

  useEffect(() => {
    const getPdfTotalPages = async () => {
      const pdf = await pdfjs.getDocument(file).promise;
      setTotalPages(pdf.numPages);
    };
    getPdfTotalPages();
  }, []);

  const handlePrevPage = () => {
    book.current.pageFlip().flipPrev();
  };

  const handleNextPage = () => {
    book.current.pageFlip().flipNext();
  };
  const typed = (e) => {
    const newPageNumber = parseInt(e.target.value, 10);
    if (newPageNumber > 0 && newPageNumber <= totalPages) {
      book.current.pageFlip().turnToPage(newPageNumber);
    } else {
      book.current.pageFlip().turnToPage(0);
    }
  };
  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom * 1.2);
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => (prevZoom > 1.1 ? prevZoom / 2.1 : prevZoom));
  };

  return (
    <Container fluid id="container"> 
       
      <Row style={{ backgroundColor: '#000', color: '#fff !important;' }}>
        <div className="col-md-2 text-left"> <button onClick={handlePrevPage} className="btn btn-secondary m-1"><FontAwesomeIcon icon={faAngleLeft} /></button></div>
        <div className="col-md-8" >
          <div style={{ width: "100%", height: "500px", overflowY: "hidden", overflowX: "hidden", alignItems: "", color: '#fff !important;' }}>
            <HTMLFlipBook style={{ transform: `scale(${zoom})` }}
              width={700}
              height={450}
              size="stretch"
              minWidth={315}
              maxWidth="auto"
              minHeight="auto"
              maxHeight="auto"
              maxShadowOpacity={0.5}
              mobileScrollSupport={true}
              className="demo-book"
              ref={book}
              usePortrait={true}
              flippingTime={500}
              showCover={true}
              drawShadow={false}
            >
              {[...Array(totalPages)].map((item, index) => (
                <PageBook key={index} setNumPages={setNumPages} pageNumber={index + 1} file={file} style={{ width: "50%", height: "auto", overflow: "hidden" }} />
              ))}
            </HTMLFlipBook>
          </div></div>
        <div className="col-md-2 text-right"><button onClick={handleNextPage} className="btn btn-secondary m-1"><FontAwesomeIcon icon={faAngleRight} /></button>
          <button onClick={handleZoomIn} className="btn btn-secondary m-1"><FontAwesomeIcon icon={faPlus} /></button>
          <button onClick={handleZoomOut} className="btn btn-secondary m-1"> <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </Row>

    </Container>
  );
}

export default MyBook;