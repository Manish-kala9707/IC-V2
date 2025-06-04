import React from 'react';
// import { Container } from 'react-bootstrap';
import { Col, Container, Row, Button } from "react-bootstrap";
import Divider from "../../../image/SwirlDivider.png";
import { useTranslation } from 'react-i18next';
import './CapitalCities.css'; 

const CapitalCities = () => {
    const {t}=useTranslation();
  return (
    <div className="capital-cities">
      
        <div id="block-filters" className="pt-3 pl-5" >
            <Container>
            <Row>
                <Col className='heading'>
                    <h1>{t("Capital Cities of North East India")}</h1>
                    <img
                    src={Divider}
                    alt="Caption Divider"
                    style={{
                        marginTop: "-17px",
                        width: "90px",
                        height: "15px",
                        backgroundColor: "transparent",
                    }}
                    />
                </Col>
                      </Row>
                      </Container>
          {/* <h3> Capital Cities of North East India </h3> */}
        </div>
      
      <div className="circle-menu">
        <ul>
          <li>
            <a
              className="CAPITAL CITIES OF NORTH-EAST INDIA"
              href="capital-cities-north-east-india/CAPITAL CITIES OF NORTH-EAST INDIA"
            >
              <img src="" alt="CAPITAL" />
              <h4>CAPITAL CITIES OF NORTH-EAST INDIA</h4>
            </a>
          </li>
          <li>
            <a className="Shillong" href="capital-cities-north-east-india/Shillong">
              <img src="http://icvtesting.nvli.in/system/files/2024-06/Elephant_Falls_Meghalaya.jpg" alt="Shillong" />
              <h4>Shillong</h4>
            </a>
          </li>
          <li>
            <a className="Dispur" href="capital-cities-north-east-india/Dispur">
              <img src="http://icvtesting.nvli.in/system/files/2024-04/Dispur.jpeg" alt="Dispur" />
              <h4>Dispur</h4>
            </a>
          </li>
          <li>
            <a className="Kohima" href="capital-cities-north-east-india/Kohima">
              <img src="http://icvtesting.nvli.in/system/files/2024-04/kohima.jpg" alt="Kohima" />
              <h4>Kohima</h4>
            </a>
          </li>
          <li>
            <a className="Itanagar" href="capital-cities-north-east-india/Itanagar">
              <img src="http://icvtesting.nvli.in/system/files/2024-04/Itanagar.jpg" alt="Itanagar" />
              <h4>Itanagar</h4>
            </a>
          </li>
          <li>
            <a className="Aizawl" href="capital-cities-north-east-india/Aizawl">
              <img src="http://icvtesting.nvli.in/system/files/2024-06/Temple_thlalak.jpeg" alt="Aizawl" />
              <h4>Aizawl</h4>
            </a>
          </li>
          <li>
            <a className="Agartala" href="capital-cities-north-east-india/Agartala">
              <img src="http://icvtesting.nvli.in/system/files/2024-04/Agartala.jpeg" alt="Agartala" />
              <h4>Agartala</h4>
            </a>
          </li>
          <li>
            <a className="Gangtok" href="capital-cities-north-east-india/Gangtok">
              <img src="http://icvtesting.nvli.in/system/files/2024-06/Gangtok.jpg" alt="Gangtok" />
              <h4>Gangtok</h4>
            </a>
          </li>
          <li>
            <a className="Imphal" href="capital-cities-north-east-india/Imphal">
              <img src="http://icvtesting.nvli.in/system/files/2024-04/Imphal.jpeg" alt="Imphal" />
              <h4>Imphal</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CapitalCities;
