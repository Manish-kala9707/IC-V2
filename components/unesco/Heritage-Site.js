// HeritageSite.js
import React, { useEffect,Router, Link,Route, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/FortsOfIndia.css';
import Divider from '../../image/SwirlDivider.png';
import UnescoDetails from '../../components/UnescoDetails';

function HeritageSite() {
  const [unescodata, setUnescoData] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = 'https://wzcc.nvli.in/rest/unesco/heritage-site';

        // Check if the URL includes 'unesco/memory-of-the-world'
        if (window.location.pathname.includes('unesco/memory-of-the-world')) {
          apiUrl = 'https://wzcc.nvli.in/rest/unesco/memory-of-the-world';
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.rows && (data.rows.search_results || data.rows)) {
          setUnescoData(data.rows.search_results || data.rows);

          if (data.rows.search_results && data.rows.search_results.length > 0) {
            setCategoryTitle(data.rows.search_results[0].field_choose_unesco_category);
          } else if (data.rows && data.rows.length > 0) {
            setCategoryTitle(data.rows[0].field_choose_unesco_category);
          }
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching unescodata:', error);
      }
    };

    fetchData();
  }, [window.location.pathname]);

  const filteredData = unescodata.slice();

  return (
    <Router>
      <>
        <Container fluid>
          <Row>
            <Col sm={1}>
              <Link to="/unesco" className="back-link">
                <ArrowLeft className='backtoprevious' size={45} />
              </Link>
            </Col>
          </Row>
        </Container>

        <Container className="fortindi-header">
          <Row>
            <Col className="text-center fortstext pt-4">
              <h1>{categoryTitle}</h1>
              <img
                src={Divider}
                alt="Caption Divider"
                style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }}
              />
            </Col>
          </Row>
        </Container>

        <Container className="fortindiheader pt-5">
          <Row>
            <Col className="col-md-12 p-0">
              <Row className="forts-wrapper">
                {filteredData.map((item, currentIndex) => (
                  <Col
                    key={currentIndex}
                    className={`forts-card ${currentIndex > 0 && (currentIndex + 1) % 3 === 0 ? 'wide' : ''}`}
                  >
                    <Link to={`/unesco/${item.nid}`} className="forts-card__card-link">
                      <img
                        src={`https://wzcc.nvli.in${item.field_unesco_data_thumbnail}`}
                        alt={item.title}
                        className="forts-card__image"
                      />
                      <div className="forts-card__text-wrapper">
                        <h2 className="forts-card__title">{item.title}</h2>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        <Link>
          <Route path="/unesco/:nid" component={UnescoDetails} />
        </Link>
      </>
    </Router>
  );
}

export default HeritageSite;
