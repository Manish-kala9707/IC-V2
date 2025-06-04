import React from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { Container, Row, Col } from "react-bootstrap";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { useState } from "react";
const PdfFlipbookCard = ({ field_pdf_digital_file, showFirstData }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const transformToolbar = (toolbarSlot) => {
    const {
      Download,
      Print,
      DarkMode,
      // ... other buttons
    } = toolbarSlot;

    return {
      ...toolbarSlot,
      Download: () => null,
      Print: () => null,
      SwitchTheme: () => <></>,
    };
  };

  const pdfList = field_pdf_digital_file
    ? field_pdf_digital_file.split(",").map((item) => item.trim())
    : [];
 
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(0);
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "1rem 0",
      }}
    >
      {" "}
       {pdfList.length > 1 && (
        <Row className="mb-3 justify-content-center">
          {pdfList.map((pdf, index) => (
            <Col key={index} xs="auto">
              <button
                onClick={() => setSelectedPdfIndex(index)}
                style={{
                  padding: "8px 16px",
                  backgroundColor:
                    selectedPdfIndex === index ? "#007bff" : "#6c757d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                PDF {index + 1}
              </button>
            </Col>
          ))}
        </Row>
      )}
 
      {showFirstData && field_pdf_digital_file && (
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={10} lg={10}>
            <div
              style={{
                width: "100%",
                height: "80vh",
                backgroundColor: "#000",
                color: "#fff",
                overflow: "hidden",
              }}
            >
              <Worker
                workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"
              >
                <div style={{ height: "100%", width: "100%" }}>
                  {/* Hidden toolbar – can be shown if needed */}
                  <div
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      display: "none",
                    }}
                  >
                    <Toolbar>
                      {renderDefaultToolbar(transformToolbar)}
                    </Toolbar>
                  </div>

                  <Viewer
                    fileUrl={`https://icvtesting.nvli.in${pdfList[selectedPdfIndex]}`}
                    plugins={[defaultLayoutPluginInstance]}
                    defaultScale={SpecialZoomLevel.PageWidth}
                  />
                </div>
              </Worker>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PdfFlipbookCard;
