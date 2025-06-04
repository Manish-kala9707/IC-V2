import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Virtual from '../image/virtual.jpg' 
import { Link, useLocation, useNavigate } from "react-router-dom"; 

function VirtualWalk() {
  const location=useLocation()
  const navigate=useNavigate()
    const virtualwalk = () => {
        
        navigate("/virtual-walkthrough")
      };  
    return (
        <>
        <div className='virtu'>
            <div className='virtual' style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}> 
            <div className="virtual-text">
                <h1>Virtual Walkthrough</h1>
                {/* <SwrilDivider/> */}
         {/*        <p className='freedom-para'>After more than 7 decades of freedom, these stories of courage,
                    selflessness and determination continue to inspire and instill pride in us.</p> */}
                <button className="virtualbtn" onClick={virtualwalk}><span>Explore</span></button>

            </div>
            </div>
            </div>


        </>

    )
}

export default VirtualWalk
