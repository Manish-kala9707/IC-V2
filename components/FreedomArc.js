import React from 'react'; 
import Freedom from '../image/freedomarchive.jpg';
// import SwrilDivider from './SwrilDivider';

function FreedomArc() {
    const freedomarc = () => {
        window.open('/freedom-archive', '_parent');
      };  
  
    return (
        <>
        <div className='freed'>
            <div className='freedom' style={{width:'100%', maxWidth: '1440px', margin:'0 auto'}}> 
            <div className="freedom-text">
                <h1>Freedom Archive</h1>
                {/* <SwrilDivider/> */}
         {/*        <p className='freedom-para'>After more than 7 decades of freedom, these stories of courage,
                    selflessness and determination continue to inspire and instill pride in us.</p> */}
                <button className="freedombtn" onClick={freedomarc}><span>Explore</span></button>

            </div>
            </div>
            </div>
           


            

        </>
    )
}

export default FreedomArc
