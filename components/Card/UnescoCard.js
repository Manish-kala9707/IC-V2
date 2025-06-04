

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';

const UnescoCard = ({ search_results, field_unesco_data_thumbnail }) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const location = useLocation(); 
   
  function limitTitleLength(title, wordLimit) {
    const words = title.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
  }
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext('2d');
    context.drawImage(new Image(), 0, 0); 
    canvas.toDataURL('image/webp').startsWith('data:image/webp') && setSupportsWebP(true);
  }, []);

  let display;

  if (search_results) {
    display = search_results.map((x) => {
      let {
        nid,
        title, 
        field_pdf_digital_file_1, 
        field_cuisines_of_india_category,
      } = x;

let imagePath=""; let fullPaths="";
      if (field_pdf_digital_file_1) {
        const srcRegex = /src="([^"]+)"/;
        const match = field_pdf_digital_file_1.match(srcRegex);
        if (match && match.length > 1) { 
          const fullPath = match[1]; 
          const parts = fullPath.split('.'); 
          parts.pop(); 
          imagePath = parts.join('.');
          fullPaths = match[1];
        }
      } 
     
  return (
    <> 
         {field_unesco_data_thumbnail && (
  <Link to={`${location.pathname}/title=${title.replace(/\s/g, "")}/nid=${nid}`} key={nid}>
    <div className="news-card"> 
      <img
        variant="top images" 
        className="news-card__image"
        src={`http://icvtesting.nvli.in${field_unesco_data_thumbnail.split(',')[0].trim().replace('/system/files/', '/system/files/').split('.').slice(0, -1).join('.')}.webp`}
        alt={title}
        onError={(e) => {
          e.target.src = `http://icvtesting.nvli.in${field_unesco_data_thumbnail.split(',')[0].trim().replace('/system/files/', '/system/files/')}`;
        }} // Fallback to original image if WebP fails to load
      />
        <ul className="news-card__share">
          <li>
            <FontAwesomeIcon icon={faThumbsUp} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEye} />
          </li>
        </ul>

      <div className="news-card__text-wrapper"> 
        <h2 className="news-card__title">{limitTitleLength(title, 10)}</h2> 
        <div className="news-card__details-wrapper"> 
          <a href="#" className="news-card__read-more">View <i className="fa fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
    </div>
  </Link>
)}

    </>
  );
});
} else {
display = "No Characters Found";
}

return <>{display}</>;
};

export default UnescoCard;

