import React from "react";
import * as Icon from 'react-feather'; 
import { Link, useLocation } from "react-router-dom";
const CardForts = ({ page, search_results, setDetailData, rowstwo, isBold, setColtwo }) => {
  const location=useLocation()
  let display;

  const results = search_results || rowstwo; // Using || operator to choose one of them if available

  if (results && results.length > 0) {
    display = results.map((x) => { 
      const { nid, title, field_forts_of_india_thumbnail, field_understanding_forts_descri, field_uf_features_image ,field_forts_of_india_slider} = x;

      return (
        <React.Fragment key={nid}>
          {setColtwo || search_results && (<Link
            
            style={{ textDecoration: "none" }}
            to={`${location.pathname}/${title.replace(/\s/g, "")}/${nid}`}
            className="digitalData col-md-3 digitalDatacard mb-5"
          >
            <div className="wrapper">
              <img src={`https://wzcc.nvli.in/${field_forts_of_india_thumbnail}`} alt={title} className="storiescard__image" />
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
                  <h1 className={`title ${isBold && 'isBold'}`}>{title}</h1> {/* Conditionally add isBold class */}
                </div>
              </div>
            </div>
          </Link>
          )}


         {setColtwo && search_results && (<div><Link
            // onClick={() => setDetailData(x)}
            style={{ textDecoration: "none" }}
            to={`${location.pathname}/${title.replace(/\s/g, "")}/${nid}`}
            className="digitalData col-md-6 digitalDatacard mb-5"
          >
            <div className="wrapper">
              <img src={`https://wzcc.nvli.in/${field_forts_of_india_thumbnail}`} alt={title} className="storiescard__image" />
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
                  <h1 className={`title ${isBold && 'isBold'}`}>{title}</h1> {/* Conditionally add isBold class */}
                </div>
              </div>
            </div>
          </Link>
          </div>
          )}
          
             {rowstwo && (
              <div>
            <Link
              
              style={{ textDecoration: "none" }}
              to={`${location.pathname}/${title.replace(/\s/g, "")}/${nid}`}
              className="col-md-3 p-4"
            >
              <div className="wrapper">
                <img src={`https://wzcc.nvli.in/${field_forts_of_india_slider}`} alt={title} className="img-cricle" />
                <b >{title}</b> {/* Conditionally add isBold class */}
              </div>
            </Link>
            </div>
          )}
        </React.Fragment>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default CardForts;
