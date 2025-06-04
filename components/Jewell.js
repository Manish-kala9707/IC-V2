import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flag from '../image/Ellipse 14.png'; 
import SwrilDivider from './SwrilDivider';
import { Link, useLocation, useNavigate } from "react-router-dom"; 
function Jewell() {
  const location=useLocation()
  const navigate=useNavigate()
    const jewellerynizam = () => {
        navigate("/jewelleryOfTheNizams")
      };  
    return (
        <>
        <Container className='jewellheader' style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
            <Row className="justify-content-md-center">
                <Col xs lg="6" id='jewell'>
                    <h1>Jewellery of the Nizams</h1>
                    <button className=" jewellbtn" onClick={jewellerynizam} ><span>Explore</span></button>

                </Col>
                <Col xs lg="4" className='justify-content-center'>
                    <div className='jewellimg'>
                    <img src={Flag} alt="Jewell" className='' />
                    </div>
                </Col>
            </Row>
           {/*  <Row style={{ marginTop: '20px' }}>
                <Col sm={8}>

                <button className=" jewellbtn" ><span>Explore</span></button>

                </Col>
                <Col sm={4}></Col>
            </Row> */}


        </Container>
        <Container fluid style={{marginTop:'60px'}}>
        <hr/>
      </Container>
      </>
    )
}

export default Jewell
