
// import React, { useState,useEffect } from "react";
// import { Container,Row } from "react-bootstrap";

// const Glossary = () => {
//   const [selected, setSelected] = useState(null);
//   const [fetchedData,setFetcheData]=useState()
//   const alphabets = Array.from({ length: 26 }, (_, i) =>
//     String.fromCharCode(65 + i)
//   );

//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(
//           `https://icvtesting.nvli.in/rest-v1/glorry-and-textile?title=${selected}`
//         );
//         const jsonData = await response.json();
  
//         setFetcheData(jsonData.results);
        
//       };
//       fetchData();
//     }, [selected])

//     console.log(fetchedData)
//   return (
//     <>
//     <Container style={{display:"flex",justifyContent:"center"}}>
//         <Row>
//       {alphabets.map((letter) => (
//         <button
//           key={letter}
//           onClick={() => setSelected(letter)}
//           style={{marginRight:"5px", height:"40px",width:"38px",marginTop:"30px",color:"black",borderRadius:"5px",backgroundColor:"pink"}}
//           className={`w-15 h-15 text-xl font-bold rounded-md shadow-md `}
//         >
//           {letter}
//         </button>
//       ))}
//       </Row>
//     </Container>
//     <Container>
//         {fetchedData && fetchedData.map((data)=>{
//                 return( 
//                     <div>
//                         <h5> { data.title}:</h5>
//                        { data.body}
//                     </div>
//                 )
//         })}
//     </Container>
//     </>
//   );
// };

// export default Glossary;





import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./Glossary.css"; // Make sure to create this file
 
const Glossary = () => {
  const [selected, setSelected] = useState("A");
  const [fetchedData, setFetchedData] = useState([]);
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://icvtesting.nvli.in/rest-v1/glorry-and-textile?title=${selected}`
      );
      const jsonData = await response.json();
      setFetchedData(jsonData.results || []);
    };
 
    fetchData();
  }, [selected]);
 
  return (
    <>
      <Container className="alphabet-container">
        <Row className="alphabet-row">
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelected(letter)}
              className={`alphabet-button ${
                selected === letter ? "active" : ""
              }`}
            >
              {letter}
            </button>
          ))}
        </Row>
      </Container>
 
      <Container className="glossary-content">
        {fetchedData && fetchedData.length > 0 ? (
          fetchedData.map((data, index) => (
            <div key={index} className="glossary-entry">
              <h5>{data.title}:</h5>
              <div dangerouslySetInnerHTML={{ __html: data.body }} />
            </div>
          ))
        ) : (
          <p>No entries found for "{selected}".</p>
        )}
      </Container>
    </>
  );
};
 
export default Glossary;