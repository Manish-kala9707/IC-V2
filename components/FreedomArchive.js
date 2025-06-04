import React from 'react'
// import './FreedomArchive.css';
import FreedomArchiveBan from '../image/fighter-5 1.png'
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FreeThumbnails from '../image/Rectangle 171.png';
import FreeThumbnails2 from '../image/Rectangle 172.png';
import FreeThumbnails3 from '../image/Rectangle 173.png';
import FreeThumbnails4 from '../image/Rectangle 174.png';

import { Swiper, SwiperSlide } from 'swiper/react';
// install swiper.js npm i swiper
 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper'; 
import slide_image_1 from '../image/fig1.webp';
import slide_image_2 from '../image/fig2.webp';
import slide_image_3 from '../image/fig3.webp';
/* import slide_image_4 from '../images/fig4.webp';
import slide_image_5 from '../images/fig5.webp';
import slide_image_6 from '../images/fig3.webp';
import slide_image_7 from '../images/fig4.webp';
 */
import SwrilDivider from '../image/SwirlDivider 1.png';
import { ArrowLeft } from 'react-feather';

function FreedomArchive() {
    // slider start here
    var settings1 = {
        dots: false,
        infinite: true,
        lazyload: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.05,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.04,
                    slidesToScroll: 1,
                    // initialSlide: 1,
                    dots: false,
                    arrows: false,
                    draggable: true,
                    autoplay: false,

                }
            },



        ]
    };
    //slider end here 
    const backtopre = () => {
        window.open('/', '_parent');
    }
    return (
        <>
            <div className='fredom-arch-parent-container'>
                <img src={FreedomArchiveBan} className='freebanner' alt='Free Banner' />
            </div>
           <Container fluid>
            <Row>
                <Col sm={1}>
                <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />

                </Col>
            </Row>
           </Container>
            <Container className='fredom-arch-header'>
                <Row >
                    <Col >
                        <h1>Journey to India’s Independence</h1>
                        <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' />
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='freecover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>This section contains a collection of rare archival material such as books, photographs, gazetteers, letters, newspaper clippings and much more on the freedom struggle of India. The freedom movement engulfed the entire country and people from all walks of life joined hands to drive the foreign oppressors out of this land. Even after more than 7 decades of freedom, these stories of courage, selflessness and determination continue to inspire and instill pride in us. The present section aims to preserve and bring to light rare glimpses of the fight for freedom in the form of digital records.</p>
                    </Col>
                </Row>

            </Container>
            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fredom-arch-card-2"><img src={FreeThumbnails} className="img img-responsive" alt='rarebook' />
                            <div className="fredom-arch-name" style={{ left: '120px', top: '215px' }}><p>Rarebooks</p></div>
                            <div className="fredom-arch-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='fredom-arch-icons' variant="outline-light" onClick="">Explore</Button>

                        </div>
                    </div>

                    {/*  <Col>
                        
                        <div class="profile-card-2"><img src={Rareimg4} class="img img-responsive" alt='rarebook' />
                            <div class="profile-name" style={{ left: '50px', top: '215px' }}>Sayajirao Gaekwad - III</div>
                            <div class="profile-username"></div>
                            <Button className='profile-icons' variant="outline-light">Explore</Button>

                        </div>
                    </Col> */}

                    <div>
                       
                        <div className="fredom-arch-card-2"><img src={FreeThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="fredom-arch-name" style={{ left: '130px', top: '215px' }}><p>Images</p></div>
                            <div className="fredom-arch-username"></div>
                            <Button className='fredom-arch-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fredom-arch-card-2"><img src={FreeThumbnails3} className="img img-responsive" alt='rarebook' />
                            <div className="fredom-arch-name" style={{ left: '120px', top: '215px' }}><p>Archives</p></div>
                            <div className="fredom-arch-username" ></div>
                            <Button className='fredom-arch-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fredom-arch-card-2"><img src={FreeThumbnails4} className="img img-responsive" alt='rarebook' />
                            <div className="fredom-arch-name" style={{ left: '120px', top: '215px' }}><p>Museums</p></div>
                            <div className="fredom-arch-username"></div>
                            <Button className='fredom-arch-icons' variant="outline-light" onClick="">Explore</Button>

                            {/*   <Button className='next-button' variant="outline-light" onClick=""> */}
                            {/* <img src={NextButon} alt='next btn'/> */}
                            {/* <ArrowRight size={50} color="Black" /> */}
                            {/*  </Button> */}

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="fredom-arch-card-2"><img src={FreeThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="fredom-arch-name" style={{ left: '100px', top: '215px' }}><p>Newspaper</p></div>
                            <div className="fredom-arch-username"></div>
                            <Button className='fredom-arch-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="fredom-arch-card-2"><img src={FreeThumbnails4} className="img img-responsive" alt='rarebook' />
                            <div className="fredom-arch-name" style={{ left: '100px', top: '215px' }}><p>Unsung Heros</p></div>
                            <div className="fredom-arch-username"></div>
                            <Button className='fredom-arch-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>
                </Slider1>
            </Container>


            {/*  */}
            <Container className='fredom-arch-header'>
                <Row >
                    <Col >
                        <h1>Freedom Struggle: Symbols & Spaces</h1>
                        <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' />

                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            {/* swiper 3d slider start here */}
            <div className="container ">
                {/* <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={false}
                    slidesPerView={'auto'}
                  
                    coverflowEffect={{

                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,

                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide >
                        <img src={slide_image_1} alt="slide_image" className='my-free-dom' />
                        <div className='swipetext' style={{ left: '220px', top: '420px' }}><p>Forts</p></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="slide_image" className='my-free-dom'/>
                        <div className='swipetext' style={{ left: '220px', top: '420px' }}><p>Textiles</p></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt="slide_image" className='my-free-dom'/>
                        <div className='swipetext' style={{ left: '220px', top: '420px' }}><p>Historic Cities</p></div>
                    </SwiperSlide> */}
                {/* <SwiperSlide>
                        <img src={slide_image_4} alt="slide_image" />
                        <div className='swipetext' style={{ left: '140px', top: '350px' }}><p>Snippets</p></div>
                    </SwiperSlide>
                   <SwiperSlide>
                        <img src={slide_image_5} alt="slide_image" />
                        <div className='swipetext' style={{ left: '120px', top: '350px' }}><p>photographs</p></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_6} alt="slide_image" />
                        <div className='swipetext' style={{ left: '140px', top: '350px' }}><p>Archives</p></div>
                    </SwiperSlide> */}
                {/* <SwiperSlide>
                        <img src={slide_image_7} alt="slide_image" />
                        <div className='swipetext' style={{ left: '140px', top: '350px' }}><p>Stories</p></div>
                    </SwiperSlide> */}

                {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}


                {/* </Swiper> */}
                {/* New slider */}
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide_image_1} />
                        <div className='swipetext' style={{ left: '220px', top: '450px' }}><p>Forts</p></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} />
                        <div className='swipetext' style={{ left: '200px', top: '450px' }}><p>Textiles</p></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} />
                        <div className='swipetext' style={{ left: '120px', top: '450px' }}><p>Historic Cities</p></div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
                </Swiper>



            </div>
            {/* swiper 3d slider end here */}
            <Container className='fredom-arch-header'>
                <Row>
                    <Col>
                        <img src={SwrilDivider} style={{ width: '90px', height: '20px', marginTop: '-90px' }} alt='divider' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FreedomArchive
