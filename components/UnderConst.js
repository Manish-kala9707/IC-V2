import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Erroricon from '../image/opt1_small.png';
// import { Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { ArrowLeft } from 'react-feather';


function UnderConst() {
  const backtopre = () => {
    const previousPageUrl = document.referrer;

    if (previousPageUrl){
    window.open(previousPageUrl, '_parent');
  }
};
  return (
    <>

      <Container className="wrapper">

        <Row>
          <Col >
            <img src={Erroricon} alt='' style={{ width: '300px' }} />
            <div className='underhead' >Coming soon<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>

          </Col>
        </Row>

      </Container>
    </>
  )
}

export default UnderConst
