import React from 'react';
import HistoricState from '../image/hcstatebanner 1.png';
import './HistoricStates.css';

import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateMap from './StateMap';
import HisStateTimeline from './HisStateTimeline';

import LucknowIllusImg1 from '../image/Rectangle 223.png';
import LucknowIllusImg2 from '../image/Rectangle 173.png';
import LucknowIllusImg3 from '../image/Rectangle 174.png';
import LucknowIllusImg4 from '../image/Rectangle 172.png';

import Glimpimg1 from '../image/Rectangle 1811.png';
import Glimpimg2 from '../image/Rectangle 1822.png';

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// install swiper.js npm i swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide_image_1 from '../image/fig2.webp';
import slide_image_2 from '../image/fig3.webp';

import Homegallery from '../image/Rectangle 224.webp';
import Homegallery1 from '../image/Rectangle 225.webp';
import Homegallery2 from '../image/Rectangle 226.webp';
import Homegallery3 from '../image/Rectangle 227.webp';
import Homegallery4 from '../image/Rectangle 228.webp';

function HistoricStates() {
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
    return (
        <>
            <div className='parent-container'>
                <img src={HistoricState} className='hsbanner' alt='Free Banner' />
            </div>
            <Container className='hs-header'>
                <Row >
                    <Col >
                        <h1>Lucknow</h1>

                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <Container className='hscover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>Situated along the River Gomti, Lucknow is the state capital of Uttar Pradesh. The city is dotted with magnificent structures. All of them have been witness to centuries of prosperity and events that have shaped Indian history.
                        The Nawabs left such an indelible mark on Lucknow that their lifestyle, cuisine, art and craft traditions continue to be the essence of the city. Every community that settled in this region melded into its culture, and made Lucknow the home of what is popularly known as the Ganga Jamuni tehzeeb.</p>
                    </Col>
                </Row>


            </Container>
            <Container>
                <StateMap />
            </Container>

            

                <div className="hssection " id="section-2" >
                    <Container className='hs-header'>
                        <Row >
                            <Col >
                                <h1>History</h1>

                            </Col>
                        </Row>
                    </Container>
                    <Container className='hscoverr'>
                        <Row className="justify-content-md-center">

                            <Col >
                                <p>Lucknow‘s history begins from the time of the epics. In the middle ages, it came under the rule of the Delhi Sultanate and was under the control of the Sheikhzadas. From the Sheikhzadas, the region was taken over by the Nawabs. Under Nawab Asaf-ud-Daula, Lucknow became the capital of the Awadh province of the Mughal Empire. In 1856 Awadh was annexed by the British and was known as the United Provinces of Agra and Oudh.
                                    Click below to read more on the long history of this city.</p>
                            </Col>
                        </Row>


                    </Container>
                    <Container >
                        <HisStateTimeline />
                    </Container>

                </div>
            
            {/*  */}

            {/*  */}

            <Container className='hs-header'>
                <Row >
                    <Col >
                        <h1>Lucknow illustrated</h1>
                        {/*   <img src={SwrilDivider} style={{ width: '90px', height: '20px' }} alt='divider' /> */}
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            {/* <Container className='hscover'>
                <Row className="justify-content-md-center">

                    <Col >
                        <p>This section contains a collection of rare archival material such as books, photographs, gazetteers, letters, newspaper clippings and much more on the freedom struggle of India. The freedom movement engulfed the entire country and people from all walks of life joined hands to drive the foreign oppressors out of this land. Even after more than 7 decades of freedom, these stories of courage, selflessness and determination continue to inspire and instill pride in us. The present section aims to preserve and bring to light rare glimpses of the fight for freedom in the form of digital records.</p>
                    </Col>
                </Row>

            </Container> */}
            <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
                <Slider1 {...settings1}>
                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg1} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '120px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

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
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg2} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '130px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                    <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg3} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '120px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username" ></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg4} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '120px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

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
                        <div className="hs-card-2"><img src={LucknowIllusImg1} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '100px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>
                    </div>

                    <div>
                        {/* <h4 class="text-center"><strong>STYLE 1</strong></h4>
                        <hr/> */}
                        <div className="hs-card-2"><img src={LucknowIllusImg2} className="img img-responsive" alt='rarebook' />
                            <div className="hs-name" style={{ left: '100px', top: '215px' }}><p>Title</p></div>
                            <div className="hs-username"></div>
                            <Button className='hs-icons' variant="outline-light" onClick="">Explore</Button>

                            {/* <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div> */}
                        </div>

                    </div>
                </Slider1>
            </Container>

            <div class="hsthumbnail-container">

                <figure class="hsthumbnail">
                    <img src={Glimpimg1} alt="Image 1" />
                    <figcaption>Lucknow & Freedom Struggle</figcaption>
                </figure>

                <figure class="hsthumbnail">
                    <img src={Glimpimg2} alt="Image 2" />
                    <figcaption>Glimpses of Lucknow</figcaption>
                </figure>
            </div>

            {/*  */}

            {/* swiper 3d slider start here */}
            <div className="container ">
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
                        {/* <div className='swipetext' style={{ left: '220px', top: '450px' }}><p>Forts</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} />
                        {/* <div className='swipetext' style={{ left: '200px', top: '450px' }}><p>Textiles</p></div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_1} />
                        {/* <div className='swipetext' style={{ left: '120px', top: '450px' }}><p>Historic Cities</p></div> */}
                    </SwiperSlide>

                </Swiper>



            </div>
            {/* swiper 3d slider end here */}

            {/*  */}

            <div className='hsgalle'>
                {/* <Container  > */}
                <Container className='hsgallery-header'>
                    <Row >
                        <Col >
                            <h1>Gallery</h1>
                            {/* <img src={SwrilDivider} alt="" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }} /> */}

                            {/* <SwrilDivider /> */}
                        </Col>
                    </Row>
                </Container>
                {/* Gallery thumbnails*/}
                {/* <div className="gallery-container galryfit" style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}> */}

                <div className="hsgallery-container " >

                    <div className="hsgallery">

                        <div className="hsgallery-item hsgallitem1">
                            <img className="hsgallery-image" src={Homegallery4} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem2">
                            <img className="hsgallery-image" src={Homegallery} alt="" />
                        </div>
                        <div className="hsgallery-item hsgallitem3">
                            <img className="hsgallery-image" src={Homegallery1} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem4">
                            <img className="hsgallery-image" src={Homegallery2} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem5">
                            <img className="hsgallery-image" src={Homegallery4} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem6">
                            <img className="hsgallery-image" src={Homegallery3} alt="" />
                        </div>
                        {/*  */}
                        <div className="hsgallery-item hsgallitem7">
                            <img className="hsgallery-image" src={Homegallery} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem8">
                            <img className="hsgallery-image" src={Homegallery4} alt="" />
                        </div>
                        <div className="hsgallery-item hsgallitem9">
                            <img className="hsgallery-image" src={Homegallery} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem10">
                            <img className="hsgallery-image" src={Homegallery2} alt="" />
                        </div>
                        <div className="hsgallery-item hsgallitem11">
                            <img className="hsgallery-image" src={Homegallery3} alt="" />
                        </div>

                        <div className="hsgallery-item hsgallitem12">
                            <img className="hsgallery-image" src={Homegallery1} alt="" />
                        </div>
                        {/* <div class="gallery-item gallitem2">
                                <img class="gallery-image" src={Homegallery} alt="" />
                            </div>
                            <div class="gallery-item gallitem3">
                                <img class="gallery-image" src={Homegallery1} alt="" />
                            </div>
                            <div class="gallery-item gallitem2">
                                <img class="gallery-image" src={Homegallery} alt="" />
                            </div> */}


                    </div>

                </div>

                
            </div>
        </>
    )
}

export default HistoricStates
