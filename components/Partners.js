import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

 // slider start here
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
// slider end here

// import images from local system
import MOC from '../image/MoC-removebg-preview.webp';
import IIT from '../image/IIT.webp';
import IGNOU from '../image/ignou.webp';
import SwrilDivider from './SwrilDivider';

function Partners() {
  
//slider end here 
   /*  const handleClick = () => {
        window.location.href = 'https://indiaculture.gov.in/';
      }; */
      const moc = () => {
        window.open('https://indiaculture.gov.in/', '_blank');
      };  
      const iitb = () => {
        window.open('https://www.iitb.ac.in/', '_blank');
      }; 
      const ignou = () => {
        window.open('http://www.ignou.ac.in/', '_blank');
      };  
    return (
        <div>
          <>
            <Container className='partners-header'>
                <Row >
                    <Col >
                        <h1>Partners</h1>

                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <Row>
                  <Col>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={MOC} alt='Ministry of Culture' />
                            <Card.Body>
                                <Card.Title className='partheading'>Ministry of Culture</Card.Title>
                                <Card.Text className='parttext'>
                                    Government of India
                                </Card.Text>
                                <Button className='partbtn' onClick={moc} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    {/* 2nd card */}
                  <Col>
                        <Card className='partcard' style={{}}>
                            <Card.Img className='partimg' variant="top" src={IIT} alt='IIT Bombay'  />
                            <Card.Body>
                                <Card.Title className='partheading'>IIT Bombay</Card.Title>
                                <Card.Text className='parttext'>
                                    Indian Institute of Technology Bombay
                                </Card.Text>
                                <Button className='partbtn' onClick={iitb} variant="outline-dark">Explore</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        </Row>
                    
            </Container>
            <Container style={{marginTop: '15px', textAlign: 'center'}}>
                <Row >
                    <Col >
                        <SwrilDivider />
                    </Col>
                </Row>
                <Row></Row>

            </Container></>
        </div>
    )
}

export default Partners
