import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FortHistoryBanner from "../image/agra1.jpg";

import "../css/FortHistory.css";

function FortHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://indianculture.gov.in/rest-v1/forts-of-india/history");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const forthistoryresultpage = () => {
    window.open("/forthistoryresultpage", "_parent");
  };
  return (
    <>
      <div className="parent-container">
        <img src={FortHistoryBanner} className="fortindibanner" alt="Free Banner" />
      </div>

      <Container className="fortindi-header">
        <Row>
          <Col>
            <h1>History</h1>

            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>

      <Container className="fortindicover">
        <Row className="justify-content-md-center">
          <Col>
            <p>Indian history is a rich mosaic of people and traditions. The political history of this land has been an unending saga of the rise and fall of countless kingdoms and dynasties. The once mighty empires have inevitably been lost to time. The monuments and structures built by the rulers and conquerors, however, still stand as tangible reminders of this past. Forts, especially, remind us of the glory, innovation and might of these empires.</p>
            <p>From the Indus Valley Civilization to the days of the British rule, fortifications have been an abiding feature of our architectural heritage. Forts of the Indian subcontinent have architecturally evolved over time in tandem with the political developments of the country. Indigenous traditions have harmoniously blended with influences that travelled with conquerors from far off lands. The present section aims to offer a broad overview of the evolution of forts in this land.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        {/* <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}> */}
        <Row>
          {data?.rows?.search_results?.map((e, i) => {
            return (
              <Col>
                <div>
                  <div className="profilee-card-2">
                    <img src={e.field_forts_of_india_thumbnail} className="img img-responsive" alt="rarebook" />
                    <div className="profilee-name " style={{ left: "8px", top: "215px" }}>
                      <p>{e.title}</p>
                    </div>
                    <div className="profilee-username"></div>
                    <Button className="profilee-icons" variant="outline-light" onClick={forthistoryresultpage}>
                      Explore
                    </Button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default FortHistory;
