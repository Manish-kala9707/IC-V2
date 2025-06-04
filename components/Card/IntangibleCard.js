
import { use } from "i18next";
import React from "react";
import { Container } from "react-bootstrap";
import * as Icon from "react-feather";
import { useLocation,Link } from "react-router-dom";

const IntangibleCard = ({ page, search_results, setDetailData }) => {
  const location=useLocation()
  let display;
  if (search_results) {
    display = search_results.map((x) => {
      let { nid, title, field_ich_image_files } = x;
           //console.log(x)
      return (
        
        
        <Link  to={`${location.pathname}/${title.replace(/\s/g, "")}/${nid}`}  className="digitalData col-md-3 digitalDatacard mb-5">
          <div className="wrapper">
            <img src={`https://indianculture.gov.in/${field_ich_image_files}`} alt={title} className="storiescard__image" />
              
            <div className="header">
              <div className="date"></div>
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o"></a>
                </li>
              </ul>
            </div>
            <div className="data">
              <div className="content">
                <h1 className="title">
                  <a href="#" dangerouslySetInnerHTML={{ __html: title }} />
                </h1>
                {/* Condition for Images */}
              </div>
            </div>
          </div>
        </Link>
        
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default IntangibleCard;

