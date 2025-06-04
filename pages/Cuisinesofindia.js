import React, { useEffect, useState } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "../image/SwirlDivider.png"; 
import Glider from "react-glider";
import { Link} from "react-router-dom";
import "glider-js/glider.min.css";
function Cuisinesofindia() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from two different endpoints
        const response = await fetch(`https://wzcc.nvli.in/rest/food-and-culture`);
        const response1 = await fetch('https://wzcc.nvli.in/rest/foodculture');

        // Parsing JSON data
        const data = await response.json();
        const data1 = await response1.json();

        // Updating state with fetched data
        setData(data);
        setData1(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data on component mount
    fetchData();
  }, []);
  const filteredData = data1.slice(0, data1.length - 1);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container > 
          <img src={`https://wzcc.nvli.in${data1[data1.length - 1]?.field_forts_writup_images}`} alt="Did you know" className="img-responsive"  height="350px"/>
        
      </Container>
      <Container className="fortindi-header #skip skipanchor" id="Catagory">
        <Row>
          <Col className="text-center fortstext pt-4">
            {/* Rendering title */}
            <h1>{data1[data1.length - 1]?.title}</h1>
            <h1>{data1[data1.length - 1]?.field_forts_of_india_slider}</h1>
            <img 
              src={Divider} 
              alt="Caption Divider" 
              style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} 
            />
          </Col>
        </Row>
      </Container>
      <Container className="fortindicover">
        <Row className="justify-content-md-center">
          <Col>
            {/* Rendering body content with dangerouslySetInnerHTML */}
            <p className="fortwriteup">
              <div dangerouslySetInnerHTML={{ __html: data1[data1.length - 1]?.body }}></div>
            </p>
          </Col>
        </Row>
      </Container>
      <Container >  
       

    <Glider hasArrows slidesToShow={4} slidesToScroll={1} hasDots duration={1.5}>
    {data.rows?.search_results.map((item, idx) => (  
      <Link to={`${item.title.toLowerCase().replace(/\s+/g, "")}`}>          
            <div className="children-card-food"  key={index} style={{margin:"4px"}}>
             <img src={`https://wzcc.nvli.in${item.field_food_category_image}`} alt={item?.title} />
            <div className="children-name" style={{ top: '30%' }}><p className="text-center">{item?.title}</p></div>
            <div className="children-username"></div>
            <Button className='children-icons' variant="outline-light">Explore</Button>
          </div> </Link>
          ))}
        </Glider>
    </Container>
    </>
    
  );
}

export default Cuisinesofindia;
