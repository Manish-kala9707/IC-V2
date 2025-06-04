import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'; 
// slider start here
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
// slider end here
import Childimg1 from '../image/Rectangle 235.png'
import Childimg2 from '../image/Rectangle 236.png'
import Childimg3 from '../image/Rectangle 237.png'

// import NextButon from '../image/arrow-right 3.png';
import SwrilDivider from './SwrilDivider';




function ChildrenSec() {
// slider start here
var settings1 = {
    dots: false,
    infinite: false,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrow:false,

    responsive: [

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.25,
                slidesToScroll: 1,
               
                arrows: false,
                draggable: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
               
                arrows: false,
                draggable: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                // initialSlide: 1,
      
                arrows: false,
                draggable: true,

            }
        },



    ]
}; 

const childsec = () => {
    window.open('/underconstructor', '_parent');
  };  
//slider end here 
  return (
    <>
            <Container className='children-header'>
                <Row >
                    <Col >
                        <h1>Children's Section</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container className='justifycenter' style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
            <Slider1 {...settings1}>
                <div >
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="children-card-2"><img src={Childimg1} className="img img-responsive" alt='rarebook' />
                            <div className="children-name" style={{ left: '75px', top: '150px' }}><p>Activities</p></div>
                            <div className="children-username"></div>
                            {/* <div className="profile-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div> */}
                            <Button className='children-icons' variant="outline-light" onClick={childsec}>Explore</Button>

                        </div>
                        </div>
                        <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="children-card-2"><img src={Childimg2} className="img img-responsive" alt='rarebook' />
                            <div className="children-name" style={{ left: '95px', top: '150px' }}><p>Games</p></div>
                            <div className="children-username"></div>
                            <Button className='children-icons' variant="outline-light" onClick={childsec}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="children-card-2"><img src={Childimg3} className="img img-responsive" alt='rarebook' />
                            <div className="children-name" style={{ left: '75px', top: '150px' }}><p>Interesting Stories</p></div>
                            <div className="children-username" ></div>
                            <Button className='children-icons' variant="outline-light" onClick={childsec}>Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                        </div>
                </Slider1>

            </Container>
        </>
  )
}

export default ChildrenSec
