import { Container, Row, Col } from 'react-bootstrap' 
import Button from 'react-bootstrap/Button'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import { ArrowRight } from 'react-feather';
import SwrilDivider from './SwrilDivider'; 
import React, { useState, useEffect } from 'react';
import BookList from '../pages/TextualRepository/TextualRepositoryCard/BookList';
const Rarebook = () => {
  const [ICRarebooklist, setICRarebooklist] = useState([]);
  const [total_items, setTotalRecord] = useState(0);
  let api = `https://apitesting.nvli.in/rest-v1/homepage-rarebook`; 
  useEffect(() => {
    fetchData();
  }, []);  
  const fetchData = async () => {
    try {
      const response = await fetch(api); 
      const ICRarebooklist = await response.json(); 
      const sortedData = (ICRarebooklist.rows.search_results).sort((a, b) => a.title.localeCompare(b.title)); // Sorting in alphabetical order based on 'name'      
      setTotalRecord(ICRarebooklist.pager.total_items); 
      setICRarebooklist(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const formatText = (text) => {
    return text.replace(/\s+/g, '_');
  };
      var settings1 = {
        dots: false,
        infinite: false,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        arrow:false,
      
        responsive: [
      
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.02,
                    slidesToScroll: 1,
                   
                    arrows: false,
                    draggable: true,
      
                }
            },
            
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.04,
                    slidesToScroll: 2,
                   
                    arrows: false,
                    draggable: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.04,
                    slidesToScroll: 1,
                    // initialSlide: 1,
          
                    arrows: false,
                    draggable: true,
      
                }
            },
            {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1.04,
                  slidesToScroll: 1,
                  // initialSlide: 1,
        
                  arrows: false,
                  draggable: true,
      
              }
          },
      
      
      
        ]
      };
  return (     
        <>
            <Container className='rarebook-header'>
                <Row >
                    <Col >
                        <h1>Rarebook Collections</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}>
            <Slider1 {...settings1}>
            {ICRarebooklist.map(item => (  
                    <div> 
                        <div className="profile-card-2"> <img src={`http://icvtesting.nvli.in${item.field_pdf_digital_file}`} alt={item.title} className="img img-responsive" alt='rarebook' />
                            <div className="profile-name " style={{ left: '50px', top: '215px' }}><p dangerouslySetInnerHTML={{ __html: item.title }} /></div>
                            <div className="profile-username"></div> 
                             <a href={formatText(item.title)} className='profile-icons' variant="outline-light" >Explore</a> 
                              </div>
                        </div>                          
                         ))}             
                        <div>                         
                        <div className="profile-card-2">
                            <div className="profile-name" style={{ left: '75px', top: '160px' }}><p>SEE ALL RAREBOOKS</p></div>
                            <div className="profile-username" style={{ left: '120px', top: '200px' }}><p>{total_items} items</p></div>
                            <Button className='next-button' variant="outline-light"> 
                                <ArrowRight size={50} color="Black" />
                                </Button>
                                  </div>
                        </div>
                </Slider1>
            </Container>
            </>
  );
};

export default Rarebook;  
