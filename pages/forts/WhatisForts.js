import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap/dist/css/bootstrap.min.css";   
import Divider from "../forts/images/FortsofIndia.png";
import Button from 'react-bootstrap/Button';
import { ArrowLeft } from 'react-feather';


function WhatisForts() { 
  const [fortsdata, setfortsdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response1 = await fetch('https://wzcc.nvli.in/rest/understanding');       
        const fortsdata = await response1.json(); 
        setfortsdata(fortsdata.rows.search_results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const filteredData = fortsdata.slice(0, fortsdata.length - 1);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
 

 <Container >
            <Row>
                <Col sm={1}> 
            <Link to="/forts/understandingforts" className="back-link">
              <ArrowLeft className='backtoprevious' size={45} />
            </Link>
                </Col>
            </Row>
           </Container>
           <Container className="archive-header">
                               <Row>     <Col md={6} className="offset-md-3">
                                 <img
                                   src={Divider}
                                   alt="Caption Divider"
                                   className="icon"
                                   style={{
                                     width: "80px",
                                     height: "80px",
                                     marginRight: "10px",
                                     objectFit: "contain",
                                     marginBottom: "15px",
                                   }} />
                                  <h1>{fortsdata[fortsdata.length -1]?.title}</h1>
                                 <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                               </Col></Row>
                             </Container>
      <Container className="fortindi-header">
        <Row>
         
          <Col xs="12">
          <div dangerouslySetInnerHTML={{ __html: fortsdata[fortsdata.length - 1]?.body }}></div>
          </Col>
        </Row>
      </Container>
        
      
 
    </>
  );
}

export default WhatisForts;