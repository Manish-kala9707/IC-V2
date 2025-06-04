import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Pagination from 'react-bootstrap/Pagination';

import './CityCapsule.css';
// css files bootstrap and external
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ArcListpage.css';

// import img file

// import Header from '../image/header.PNG';
import CityCapCusiimg1 from '../image/image 31.png';
import CityCapCusiimg2 from '../image/image 32.png';
import CityCapStoryimg1 from '../image/image 34.png';

function CityCapsule({ name, ...props }) {

    return (
        <>

            <Container className='citycapsul-header'>
                <Row >
                    <Col >
                        <h1>Rare material on Lucknow</h1>

                    </Col>
                </Row>
            </Container>

            <div className='citycaplst'>
                {/* option 1  */}

                {/* Archive img thumbnails start */}
                <main className="ccpage-cccontent">
                    <div className="cclistcard">
                        <div className="cccontent">

                            <h2 className="cctitle ">Conspiracy in 1856 against the Government</h2>

                            {/* <p className="copy">Ch eck out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                            <button className="cclistbtn" >View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">Gazetter of the Oudh</h2>
                            {/* <p className="copy">Plan your next beach trip with these fabulous destinations</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">Conspiracy in 1856 against the Government</h2>
                            {/* <p className="copy">It's the desert you've always dreamed of</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">Gazetter of the Oudh</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">Conspiracy in 1856 against the Government</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 6</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 7</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 8</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 9</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 10</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    {/* 3rd  */}
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 11</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 12</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>

                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 13</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 14</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>
                    <div className="cclistcard">
                        <div className="cccontent">
                            <h2 className="cctitle">ccTitle 15</h2>
                            {/* <p className="copy">Seriously, straight up, just blast off into outer space today</p> */}
                            <button className="cclistbtn">View</button>
                        </div>
                    </div>

                </main>
                {/* Archive img thumbnails end */}


            </div>


            <Container className='cccuisine-header'>
                <Row >
                    <Col >
                        <h1>Rare material on Lucknow</h1>

                    </Col>
                </Row>
            </Container>

            <div class="ccthumbnail-container">
                <figure class="ccthumbnail">
                    <img src={CityCapCusiimg1} alt="Image 1" />
                    <figcaption>The Delicate Flavors of Awadh</figcaption>
                </figure>

                <figure class="ccthumbnail">
                    <img src={CityCapCusiimg2} alt="Image 2" />
                    <figcaption>Lucknow: Food Fit for the Kings</figcaption>
                </figure>
            </div>

            <Container className='cccuisine-header'>
                <Row >
                    <Col >
                        <h1>Stories</h1>

                    </Col>
                </Row>
            </Container>

            <div class="ccthumbnail-container">
                <figure class="ccthumbnail">
                    <img src={CityCapStoryimg1} alt="Image 1" />
                    <figcaption>Begum Hazrat Mahal</figcaption>
                </figure>

                
            </div>
        </>
    );
}

export default CityCapsule
