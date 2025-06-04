import React from "react";
import "./VisualGrid.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const VisualGrid = ({ fetcheData }) => {
  const location = useLocation();
 const {t}=useTranslation()
  const getImageSrc = (book) => {
    const path = location.pathname;

    // Portfolio Paintings
    if (path.includes("portfoliopaintings")) {
      return `http://icvtesting.nvli.in${
        book.field_paintings_image &&
        book.field_paintings_image.match(/src="([^"]+)"/)[1]
      }`;
    }

    // Museum Paintings (Fixed condition)
    if (path.includes("museum-paintings") && book.field_digital_image_file) {
      const first = book.field_digital_image_file.split(",")[0].trim();
      return `http://icvtesting.nvli.in${first}`;
    }

    // Videos
    if (path.includes("videos") && book.field_digital_image_file) {
      return `http://icvtesting.nvli.in${book.field_digital_image_file}`;
    }
    // Audios
    if (path.includes("audios") && book.field_digital_image_file) {
      return `http://icvtesting.nvli.in${book.field_digital_image_file}`;
    }

    // Audios (extract image from src attribute)
    if (
      path.includes("audios") ||
      (path.includes("videos") && book.field_video_streaming_url_1)
    ) {
      const match =
        book.field_video_streaming_url_1 &&
        book.field_video_streaming_url_1.match(/src="([^"]+)"/);
      return match && match[1] ? `http://icvtesting.nvli.in${match[1]}` : null;
    }

    // Direct Image Paths
    const directImagePaths = ["images", "photo-archives"];
    if (
      directImagePaths.some((p) => path.includes(p)) &&
      book.field_digital_image_file
    ) {
      return `http://icvtesting.nvli.in${book.field_digital_image_file}`;
    }

    // Museum Collections
    if (path.includes("museum-collections") && book.field_digital_image_file) {
      const first = book.field_digital_image_file.split(",")[0].trim();
      return `http://icvtesting.nvli.in${first}`;
    }

    return null;
  };

  return (
    <div className="visual-book-grid">
      {fetcheData &&
        fetcheData.map((book) => {
          const imageSrc = getImageSrc(book);

          return (
            <div className="visual-grid-book-card" key={book.nid}>
              <div className="visual-grid-book-header">
                <h6 className="visual-grid-header">
                  {book?.title
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;", "")}
                </h6>
              </div>

              <div className="visual-grid-book-image">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={`${book.title
                      .replaceAll("&#039;", "")
                      .replaceAll("&quot;", "")} cover`}
                  />
                ) : (
                  <div className="visual-image-placeholder">No Cover</div>
                )}
              </div>

              <div className="visual-grid-book-details">
                <p>
                  <strong>Language:</strong>{" "}
                  {book.field_dc_language_iso || "N/A"}
                </p>
                <p>
                  <strong>Organisation:</strong>{" "}
                  {book.field_dc_publisher || "N/A"}
                </p>
                <p>
                  <strong>Publisher:</strong> {book.field_dc_publisher || "N/A"}
                </p>
                <p>
                  <strong>Duration:</strong>{" "}
                  {book.field_dc_format_duration || "N/A"}
                </p>
              </div>

              <div className="visual-grid-book-footer">
                <Link
                  to={`${location.pathname}/title=${book?.title
                    .replace(/\s+/g, "_")
                    .replaceAll("&#039", "-")}/nid=${book.nid}`}
                  className="visual-grid-card-link"
                >
                  <button className="visual-read-btn">
                    {location.pathname.includes("audios")
                      ? t("Listen")
                      : location.pathname.includes("videos")
                      ? t("Watch")
                      : t("See")}
                  </button>
                </Link>
                <span>
                  <FontAwesomeIcon icon={faEye} />
                  {book.nid_2?.replaceAll("/n", "")}
                </span>
                <span>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  {parseInt(book.nid_1?.match(/Like\s*(\d+)/)?.[1] || "0", 10)}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default VisualGrid;
