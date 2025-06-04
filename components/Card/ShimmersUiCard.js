import React, { useState, useEffect } from "react";
import { Container,Row } from "react-bootstrap";
// import NoResultsFoundCard from "./NoResultsFoundCard";
const ShimmersUiCard = () => {
  const [showNoResults, setShowNoResults] = useState(false);
  let arr = Array(25).fill(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoResults(true);
    }, 40000);  
    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {showNoResults ? (
        <div style={{ textAlign: "center", fontSize: "20px", color: "#555" }}>
           No results found
        </div>
      ) : (
        <>
       
            {arr.map((_, index) => (
              <div>
              <div className="news-card">     
              <div className="news-card__text-wrapper" style={{height:"120px", marginBottom:"10px"}}>
                <div className="cardtitleshhimmer" style={{backgroundColor:"grey" ,height:"20px",marginBottom:"5px",borderRadius:"5px"}}>
                </div>
                <div className="cardtitleshhimmer" style={{backgroundColor:"white" ,height:"20px",marginBottom:"5px",borderRadius:"5px"}}>
                </div>
                <div className="cardtitleshhimmer" style={{backgroundColor:"white" ,height:"20px",marginBottom:"1px",borderRadius:"5px"}}>
                </div>
    
              </div>
            </div>
              </div>
            ))}
       
         

        
        </>
      )}
    </>
  );
};

export default ShimmersUiCard;
