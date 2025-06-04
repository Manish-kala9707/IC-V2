 
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons'; 
import { Col, Container, Row,Button } from "react-bootstrap";
import Glider from "react-glider"; 
import "glider-js/glider.min.css";

const Gallerycard = ({ search_results, field_pdf_digital_file_1 }) => {

  const [supportsWebP, setSupportsWebP] = useState(false);
  const location = useLocation();

  function limitTitleLength(title, wordLimit) {
    const words = title.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
  }


  let display;

  if (search_results) {
    display = search_results.map((x, index) => {
      let {
        nid,
        title,
        field_dc_type,
        field_dc_date_issued,
        field_pdf_digital_file_1,
        field_museums_images,
        field_pdf_digital_file,
        nid_2,
        nid_1,field_links,
        field_digital_image_file,
        field_dc_contributor_author,
        field_parent_library_name,
        field_dc_source,
        field_video_streaming_url,
        field_unesco_data_thumbnail,
        field_story_image,
        field_uf_features_image,
        field_cuisines_of_india_category,
        field_cuisine_thumbnail, field_food_category_image,
        field_musical_instrument_cat_ima,field_musical_category_alternati,
        field_ich_category_thumbnail,field_painting_portfolio_thumbna,field_painting_redirect_link,
      } = x;
     
      let imagePath = ""; let fullPaths = "";
      if (field_pdf_digital_file_1) {
        const srcRegex = /src="([^"]+)"/;
        const match = field_pdf_digital_file_1.match(srcRegex);
        if (match && match.length > 1) {
          //Get the full image path
          const fullPath = match[1];
          // Split the path by "." to remove the extension
          const parts = fullPath.split('.');
          //   Remove the last part (which is the extension)
          parts.pop();
          //    Join the remaining parts to reconstruct the path without the extension
          imagePath = parts.join('.');
          fullPaths = match[1];
        }
      }

      return (
        <>
              
{field_cuisine_thumbnail && ( 
          <Col 
          className={`forts-card ${Math.random() > 0.5 ? 'wide' : ''}`}  // Randomly add 'wide' class
        >
          <Link to={`${location.pathname}/title=${title.replace(/\s/g, "")}/nid=${nid}`} key={nid} className="forts-card__card-link">
            <img 
              src={`http://icvtesting.nvli.in${field_cuisine_thumbnail.split(',')[0].trim().replace('/sites/default/files/unescoCategories/', '/sites/default/files/styles/image_grid_style/public/unescoCategories/')}`} 
              alt={title} 
              className="forts-card__image" 
            />
            <div className="forts-card__text-wrapper">
              <h2 className="forts-card__title"> <span dangerouslySetInnerHTML={{ __html: title }}  /> </h2>               
            </div>
          </Link>         
        </Col>
        
          )}

{field_painting_portfolio_thumbna && ( 
          <Col 
          className={`forts-card ${Math.random() > 0.5 ? 'wide' : ''}`}  // Randomly add 'wide' class
        >
          <Link to={`${location.pathname}/${title.replace(/\s/g, "-").toLowerCase()}`} key={nid} className="forts-card__card-link">
            <img 
              src={`http://icvtesting.nvli.in${field_painting_portfolio_thumbna.split(',')[0].trim().replace('/sites/default/files/unescoCategories/', '/sites/default/files/styles/image_grid_style/public/unescoCategories/')}`} 
              alt={title} 
              className="forts-card__image" 
            />
            <div className="forts-card__text-wrapper">
              <h2 className="forts-card__title"> <span dangerouslySetInnerHTML={{ __html: title }}  /> </h2>               
            </div>
          </Link>         
        </Col>
        
          )}
 
 {field_ich_category_thumbnail && ( 
 <Col 
 key={index}
 className={`forts-card ${index % 4 === 0 ? 'wide' : ''} ${index % 2 === 0 ? ' ' : ''} ${index % 3 === 2 ? 'big' : ''}`}  // Add 'big' class for records after the third
>
 <Link to={title.replace(/&#039;s/g, '').replace(/,/g, '').replace(/\s+/g, '-').toLowerCase()} className="forts-card__card-link">
   <img 
     src={`http://icvtesting.nvli.in${field_ich_category_thumbnail.trim().replace('/sites/default/files/unescoCategories/', '/sites/default/files/styles/image_grid_style/public/unescoCategories/')}`} 
     alt={title} 
     className="forts-card__image" 
   />
   <div className="forts-card__text-wrapper">
     <h2 className="forts-card__title"> <span dangerouslySetInnerHTML={{ __html: title }} /> </h2>               
   </div>
 </Link>         
</Col>
          )}

{field_cuisines_of_india_category && ( 
  <Col 
  className={`forts-card mb-3 ${Math.random() > 0 ? 'wide' : ''}`}  // Randomly add 'wide' class
>
  <Link to={`${location.pathname}/${title.toLowerCase().replace(/\s/g, "-")}`} key={nid} className="forts-card__card-link">
    <img 
      src={`http://icvtesting.nvli.in${field_cuisines_of_india_category.split(',')[0].trim().replace('/sites/default/files/unescoCategories/', '/sites/default/files/styles/image_grid_style/public/unescoCategories/')}`} 
      alt={title} 
      className="forts-card__image" 
    />
    <div className="forts-card__text-wrapper">
      <h2 className="forts-card__title"> <span dangerouslySetInnerHTML={{ __html: title }}  /> </h2>               
    </div>
  </Link>         
</Col>
          )}
 
 {field_musical_instrument_cat_ima && ( 
  <Link to={`${title.toLowerCase().replace(/\s+/g, "-").replace(/&amp;/g, "and").replace(/[:;]/g, "-")}`}>
    <div className="children-card-food" key={index} style={{margin:"4px"}}>
      <img src={`http://icvtesting.nvli.in${field_musical_instrument_cat_ima}`} alt={title} />
      <div className="children-name" style={{ top: '30%' }}>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
        <small className="text-center" dangerouslySetInnerHTML={{ __html: field_musical_category_alternati }} />
        
      </div>
      <div className="children-username"></div>
      <Button className='children-icons' variant="outline-light">Explore</Button>
    </div>
  </Link>
   
          )}

{field_food_category_image && ( 
  <Link to={`${title.toLowerCase().replace(/\s+/g, "-").replace(/&amp;/g, "and").replace(/[:;]/g, "")}`}>
    <div className="children-card-food" key={index} style={{margin:"4px"}}>
      <img src={`http://icvtesting.nvli.in${field_food_category_image}`} alt={title} />
      <div className="children-name" style={{ top: '30%' }}>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
        <small className="text-center" dangerouslySetInnerHTML={{ __html: field_musical_category_alternati }} />
        
      </div>
      <div className="children-username"></div>
      <Button className='children-icons' variant="outline-light">Explore</Button>
    </div>
  </Link>
   
          )}

{field_uf_features_image && ( 
  <Link to={`${title.toLowerCase().replace(/\s+/g, "-").replace(/&amp;/g, "and").replace(/[:;]/g, "-")}`}>
    <div className="children-card-food" key={index} style={{margin:"4px"}}>
      <img src={`http://icvtesting.nvli.in${field_uf_features_image}`} alt={title} />
      <div className="children-name" style={{ top: '30%' }}>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: title }} /> 
        
      </div>
      <div className="children-username"></div>
      <Button className='children-icons' variant="outline-light">Explore</Button>
    </div>
  </Link>
   
          )}
{/* 
{field_digital_image_file && ( 
          <Col 
          className={`forts-card ${Math.random() > 1 ? 'wide' : 'wide'}`}  
        >
          <Link to={`${location.pathname}/${field_links.replace(/\s/g, "-").toLowerCase()}`} key={nid} className="forts-card__card-link">
            <img 
              src={`http://icvtesting.nvli.in${field_digital_image_file.split(',')[0].trim()}`} 
              alt={title} 
              className="forts-card__image" 
            />
            <div className="forts-card__text-wrapper">
              <h2 className="forts-card__title"> <span dangerouslySetInnerHTML={{ __html: title }}  /> </h2>               
            </div>
          </Link>         
        </Col>
        
          )} */}
         
        </>
      );
    });
    

   
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default Gallerycard;
