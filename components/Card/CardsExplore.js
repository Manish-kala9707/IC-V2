import React from "react";
import * as Icon from 'react-feather'; 
import { Col, Container, Row } from "react-bootstrap";
import { Link,useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const CardExplore = ({ page, search_results, setDetailData }) => {
  const location=useLocation()
  let display;
  if (search_results) {
    display = search_results.map((x) => {
      let {
        nid,
        title,
        field_forts_of_india_thumbnail,
        
        
      } = x;

      return (
        <><Link className="col-md-4"  
        style={{ textDecoration: "none" }}
        to={`${location.pathname}/title=${title.replace(/\s+/g, "")}/nid=${nid}`}
        key={nid}> 
            <div className="children-card-2" style={{display:"flex",justifyContent:"center"}}>
              <img src={`http://icvtesting.nvli.in${field_forts_of_india_thumbnail}`}  alt={title} />
              <div className="children-name" style={{ top: '30%' }}><p className="text-center">{title}</p></div>
              
              <Button className='children-icons' variant="outline-light">Explore</Button>
            </div> 
        </Link> </>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default CardExplore;
