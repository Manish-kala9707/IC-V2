import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TypesOfFortsBanner from '../image/Jaisalmer_0 4.png';

import FFreedom2 from '../image/FFRectangle 260.png';
import FFreedom3 from '../image/FFRectangle 261.png';
import FFreedom1 from '../image/FFRectangle 259.png';
import FFreedom4 from '../image/FFRectangle 262.png';
import FFreedom5 from '../image/FFRectangle 263.png';
import FFreedom6 from '../image/FFRectangle 264.png';

import '../css/TypesOfForts.css';

import { Info, Maximize2 } from 'react-feather';

function FortsFreedom() {
    const fortsfreedomresultpage = () => {
        window.open('/fortsfreedomresultpage', '_parent');
    }
    return (
        <>
            <div className='parent-container'>
                <img src={TypesOfFortsBanner} className='fortindibanner' alt='Free Banner' />
            </div>

            <Container className='fortindi-header'>
                <Row >
                    <Col >
                        <h1>Types of Forts</h1>

                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>

            <div className="thumbnails-container">

                <div className="thumbnail">
                    <img src={FFreedom1} alt="Image 1" />
                    <div className="thumbnail-ttitle">The Ahmednagar Fort: A Legacy of Resistance</div>
                </div>

                <div className="thumbnail" >
                    <img src={FFreedom2} alt="Image 2" onClick={fortsfreedomresultpage} />
                    <div className="thumbnail-ttitle">The Jhansi Fort: A Siege to Remeber</div>
                </div>
            </div>
            {/*  */}
            <div className="thumbnails-container">

                <div className="thumbnail">
                    <img src={FFreedom1} alt="Image 1" />
                    <div className="thumbnail-ttitle">The Panchalankurichi Fort: An Ode to Veerapandiya Kattabomman</div>
                </div>

                <div className="thumbnail">
                    <img src={FFreedom2} alt="Image 2" />
                    <div className="thumbnail-ttitle">Fortifying Freedom: The Red Fort</div>
                </div>
            </div>
            {/*  */}
            <div className="thumbnails-container">

                <div className="thumbnail">
                    <img src={FFreedom1} alt="Image 1" />
                    <div className="thumbnail-ttitle">Salimgarh: Tales of Captivity & Freedom</div>
                </div>

                <div className="thumbnail">
                    <img src={FFreedom2} alt="Image 2" />
                    <div className="thumbnail-ttitle">The Vellore Fort: Sowing the Early Seeds of Dissent</div>
                </div>
            </div>
        </>
    )
}

export default FortsFreedom
