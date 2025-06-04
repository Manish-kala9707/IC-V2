import React from 'react';
import './BookList.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const BookList = ({ fetcheData }) => {
  const location = useLocation();
const {t}=useTranslation()
  return (
    <div className="book-list">
      {fetcheData.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book-header">
            <h2>{book.title}</h2>
            <div className="book-stats">
              <span>
                <FontAwesomeIcon icon={faEye} />{book.nid_2.replaceAll("/n", "")}
              </span>
              <span>
                <FontAwesomeIcon icon={faThumbsUp} />{parseInt(book.nid_1.match(/Like\s*(\d+)/)?.[1] || "0", 10)}
              </span>
            </div>
          </div>

          <div className="book-body">
            <div className="book-image">
              {book.field_pdf_digital_file_1 ? (
                <img
                  src={`http://icvtesting.nvli.in${book.field_pdf_digital_file_1.match(/src="([^"]*)"/)?.[1]}`}
                  alt={`${book.title} cover`}
                />
              ) : (
                <div className="image-placeholder">No Cover</div>
              )}
            </div>

            <div className="book-info">
              <p><strong>Language:</strong> {book.field_dc_language_iso || 'N/A'}</p>
              <p><strong>Organisation:</strong> {book.field_dc_publisher || 'N/A'}</p>
              <p><strong>Author:</strong> {book.field_dc_contributor_author || 'N/A'}</p>
              <p><strong>Publisher:</strong> {book.field_dc_publisher || 'N/A'}</p>
              <p><strong>Copyright:</strong> {book.field_dc_date_copyright || 'N/A'}</p>
              <Link
                to={`${location.pathname}/title=${book.title.replace(/\s+/g, "_").replaceAll("&#039", "-")}/nid=${book.nid}`}
              >
                <button className="read-btn">{t("Read")}</button>
              </Link>
            </div>

          
            {location.pathname.includes("rare-book") && (
              <div className="book-summary">
                <h4>{t("Summary")}</h4>
                <p>{book.field_ocr_summary || t("Coming Soon")}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
