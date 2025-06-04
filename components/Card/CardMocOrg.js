import React from "react";
import * as Icon from 'react-feather'; 
import { Link, useLocation } from 'react-router-dom';
const CardMocOrg = ({ page, search_results, setDetailData }) => {
 const location=useLocation()
  let display;
  if (search_results) {
    display = search_results.map((x) => {
      let {
        nid,
        title,
        field_moc_organization_image,field_address,     
      } = x;
      return (        
        <div  className="digitalData col-md-3 digitalDatacard mb-5 p-1"> <Link  to={`${location.pathname}/title=${x.title.replace(/\s/g, "")}/nid=${x.nid}`}
          key={nid}
          className="card-image"   
        ><div className="wrapper">
          {field_moc_organization_image && (
                  <img
                    variant="top"
                    src={`http://icvtesting.nvli.in${field_moc_organization_image.split('.').slice(0, -1).join('.')}.webp`}
                    alt={title}
                    onError={(e) => {
                      e.target.src = `http://icvtesting.nvli.in${field_moc_organization_image}`; // Fallback to original image if WebP fails to load
                    }}
                  />
                )} 
                 <div className="data">  <div className="content"> 
                <h1 className="title">
                  <a href="#" dangerouslySetInnerHTML={{ __html: title }} />
                </h1>
                <p>{field_address}</p>
                </div></div>
              </div>
          </Link>
          </div>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default CardMocOrg;
