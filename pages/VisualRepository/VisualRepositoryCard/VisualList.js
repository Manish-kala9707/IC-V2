import React from "react";
import "./VisualList.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
 
const VisualList = ({ fetcheData }) => {
  const location = useLocation();
  const { t } = useTranslation();
 
  const getImageSrc = (visual) => {
    const path = location.pathname;
 
    // Portfolio Paintings
    if (path.includes("portfoliopaintings")) {
      return `http://icvtesting.nvli.in${
        visual.field_paintings_image &&
        visual.field_paintings_image.match(/src="([^"]+)"/)[1]
      }`;
    }
 
    // Museum Paintings (Fixed condition)
    if (path.includes("museum-paintings") && visual.field_digital_image_file) {
      const first = visual.field_digital_image_file.split(",")[0].trim();
      return `http://icvtesting.nvli.in${first}`;
    }
 
    // Videos
    if (path.includes("videos") && visual.field_digital_image_file) {
      return `http://icvtesting.nvli.in${visual.field_digital_image_file}`;
    }
 
    // Audios
    if (path.includes("audios") && visual.field_digital_image_file) {
      return `http://icvtesting.nvli.in${visual.field_digital_image_file}`;
    }
 
    // Audios (extract image from src attribute)
    if (
      path.includes("audios") ||
      (path.includes("videos") && visual.field_video_streaming_url_1)
    ) {
      const match =
        visual.field_video_streaming_url_1 &&
        visual.field_video_streaming_url_1.match(/src="([^"]+)"/);
      return match && match[1] ? `http://icvtesting.nvli.in${match[1]}` : null;
    }
 
    // Direct Image Paths
    const directImagePaths = ["images", "photo-archives"];
    if (
      directImagePaths.some((p) => path.includes(p)) &&
      visual.field_digital_image_file
    ) {
      return `http://icvtesting.nvli.in${visual.field_digital_image_file}`;
    }
 
    // Museum Collections
    if (path.includes("museum-collections") && visual.field_digital_image_file) {
      const first = visual.field_digital_image_file.split(",")[0].trim();
      return `http://icvtesting.nvli.in${first}`;
    }
 
    return null;
  };
 
  return (
    <div className="visual-list">
      {fetcheData &&
        fetcheData.map((visual) => {
          const imageSrc = getImageSrc(visual);
 
          return (
            <div key={visual.id} className="visual-list-item">
              <div className="visual-list-header">
                <h2>
                  {visual.title
                    .replaceAll("&#039;", "")
                    .replaceAll("&quot;", "")}
                </h2>
                <div className="visual-stats">
                  <span>
                    <FontAwesomeIcon icon={faEye} />
                    {visual.nid_2 && visual.nid_2.replaceAll("/n", "")}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    {parseInt(visual.nid_1.match(/Like\s*(\d+)/)?.[1] || "0", 10)}
                  </span>
                </div>
              </div>
 
              <div className="visual-list-body">
                <div className="visual-list-image">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={`${visual.title
                        .replaceAll("&#039;", "")
                        .replaceAll("&quot;", "")} visual`}
                    />
                  ) : (
                    <div className="visual-image-placeholder">No Cover</div>
                  )}
                </div>
 
                <div className="visual-list-content">
                  <p>
                    <strong>Language:</strong>{" "}
                    {visual.field_dc_language_iso || "N/A"}
                  </p>
                  <p>
                    <strong>Organisation:</strong>{" "}
                    {visual.field_dc_publisher || "N/A"}
                  </p>
                  <p>
                    <strong>Author:</strong>{" "}
                    {visual.field_dc_contributor_author || "N/A"}
                  </p>
                  <p>
                    <strong>Publisher:</strong> {visual.field_dc_publisher || "N/A"}
                  </p>
                  <p>
                    <strong>Copyright:</strong>{" "}
                    {visual.field_dc_date_copyright || "N/A"}
                  </p>
 
                  <Link
                    to={`${location.pathname}/title=${visual.title
                      .replace(/\s+/g, "_")
                      .replaceAll("&#039", "-")}/nid=${visual.nid}`}
                  >
                    <button className="read-btn">
                      {location.pathname.includes("audios")
                        ? t("Listen")
                        : location.pathname.includes("videos")
                        ? t("Watch")
                        : t("See")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
 
export default VisualList;