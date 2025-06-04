import React, { useState, useEffect } from "react";
import "./BookGrid.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faInfoCircle,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const BookGrid = ({ fetcheData }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInfoClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="book-grid">
      {fetcheData &&
        fetcheData.map((book) => (
          <div className="grid-book-card" key={book.nid}>
            <div className="grid-book-header">
              <h7>
                {book.title
                  .replaceAll("\r\n", ", ")
                  .replaceAll("&#039;s", "")
                  .replaceAll("&#039;", "")
                  .replaceAll("&quot;I", "")
                  .replaceAll("&quot;", "")}
              </h7>
            </div>

            <div className="grid-book-image">
              {isMobile && (
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="info-icon-wrapper"
                  title="More Info"
                  onClick={() => handleInfoClick(book)}
                  style={{
                    color: "#F7C113",
                    marginLeft: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                />
              )}
              {book.field_pdf_digital_file_1 ? (
                <img
                  className="book-img"
                  src={`http://icvtesting.nvli.in${
                    book.field_pdf_digital_file_1.match(/src="([^"]*)"/)?.[1]
                  }`}
                  alt={`${book.title} cover`}
                />
              ) : (
                <div className="image-placeholder">
                  <img
                    src={`http://icvtesting.nvli.in${
                      book.field_digital_image_file &&
                      book.field_digital_image_file.split(",")[0]
                    }`}
                    alt={`${book.title} cover`}
                  />
                </div>
              )}
            </div>

            {!isMobile && (
              <div className="grid-book-details">
                <p>
                  <strong>Language:</strong>{" "}
                  {book.field_dc_language_iso
                    ?.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "") || "N/A"}
                </p>
                <p>
                  <strong>Organisation:</strong>{" "}
                  {book.field_dc_publisher
                    ?.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "") || "N/A"}
                </p>
                <p>
                  <strong>Author:</strong>{" "}
                  {book.field_dc_contributor_author
                    ?.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "") || "N/A"}
                </p>
                <p>
                  <strong>Publisher:</strong>{" "}
                  {book.field_dc_publisher
                    ?.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "") || "N/A"}
                </p>
                <p>
                  <strong>Copyright:</strong>{" "}
                  {book.field_dc_date_copyright
                    ?.replaceAll("\r\n", ", ")
                    .replaceAll("&#039;s", "")
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;I", "")
                    .replaceAll("&quot;", "") || "N/A"}
                </p>
              </div>
            )}

            <div className="grid-book-footer">
              <ul className="d-flex justify-content-between gap-2">
                <li className="btn btn-warning">
                  <Link
                    to={`${location.pathname}/title=${
                      book.title
                        .replace(/\s+/g, "_")
                        .replaceAll("\r\n", ", ")
                        .replaceAll("&#039;s", "")
                        .replaceAll("&#039;", "")
                        .replaceAll("&quot;I", "")
                        .replaceAll("&quot;", "")
                    }/nid=${book.nid}`}
                  >
                    {t("Read")}
                  </Link>
                </li>
                <li className="btn btn-light align-content-center">
                  <FontAwesomeIcon icon={faBook} />
                </li>
                <li className="btn btn-warning align-content-center">
                  <FontAwesomeIcon icon={faEye} />
                  {book.nid_2?.replaceAll("/n", "")}
                </li>
                <li className="btn btn-warning align-content-center">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  {parseInt(book.nid_1?.match(/Like\s*(\d+)/)?.[1] || "0", 10)}
                </li>
              </ul>
            </div>

            {/* Conditionally render Summary section */}
            {!isMobile && location.pathname.includes("rare-book") && (
              <div className="grid-book-summary">
                <h5>{t("Summary")}</h5>
                <p>{book.field_ocr_summary || t("Coming Soon")}</p>
              </div>
            )}
          </div>
        ))}

      {/* Modal for mobile info view */}
      {selectedBook && (
        <Modal
          className="more-info-modal"
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <p>
              <strong>Language:</strong>{" "}
              {selectedBook.field_dc_language_iso
                ?.replaceAll("\r\n", ", ")
                .replaceAll("&#039;s", "")
                .replaceAll("&#039;", "")
                .replaceAll("&quot;I", "")
                .replaceAll("&quot;", "") || "N/A"}
            </p>
            <p>
              <strong>Organisation:</strong>{" "}
              {selectedBook.field_dc_publisher
                ?.replaceAll("\r\n", ", ")
                .replaceAll("&#039;s", "")
                .replaceAll("&#039;", "")
                .replaceAll("&quot;I", "")
                .replaceAll("&quot;", "") || "N/A"}
            </p>
            <p>
              <strong>Author:</strong>{" "}
              {selectedBook.field_dc_contributor_author
                ?.replaceAll("\r\n", ", ")
                .replaceAll("&#039;s", "")
                .replaceAll("&#039;", "")
                .replaceAll("&quot;I", "")
                .replaceAll("&quot;", "") || "N/A"}
            </p>
            <p>
              <strong>Publisher:</strong>{" "}
              {selectedBook.field_dc_publisher
                ?.replaceAll("\r\n", ", ")
                .replaceAll("&#039;s", "")
                .replaceAll("&#039;", "")
                .replaceAll("&quot;I", "")
                .replaceAll("&quot;", "") || "N/A"}
            </p>
            <p>
              <strong>Copyright:</strong>{" "}
              {selectedBook.field_dc_date_copyright
                ?.replaceAll("\r\n", ", ")
                .replaceAll("&#039;s", "")
                .replaceAll("&#039;", "")
                .replaceAll("&quot;I", "")
                .replaceAll("&quot;", "") || "N/A"}
            </p>
            {location.pathname.includes("rare-book") && (
              <>
                <hr />
                <h5>Summary</h5>
                <p>{selectedBook.field_ocr_summary || "Coming Soon"}</p>
              </>
            )}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default BookGrid;
