


import React, { useState, useEffect } from "react";
import { Col,Row } from "react-bootstrap";
const ShimmerCounter = () => {
  const [showNoResults, setShowNoResults] = useState(false);
  let arr = Array(5).fill(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoResults(true);
    }, 15000);  
    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {showNoResults ? (
        <div style={{ textAlign: "center", fontSize: "20px", color: "#555" }}>
        </div>
      ) : (
          <Col md={6} xs={12} lg={6}  style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
            <div
              className="showing-result "
            >
             
            </div>
          </Col>
   
      )}
    </>
  );
};

export default ShimmerCounter;
