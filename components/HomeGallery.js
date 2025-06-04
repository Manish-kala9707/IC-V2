import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwrilDivider from '../image/SwirlDivider 12.png';
import WatermarkImage from '../image/Rectangle 15.png'; // Import your watermark image

const HomeGallery = () => {
  const [storiesdata, setStoriesdata] = useState([]);
  const [index, setIndex] = useState(0);

  const homegallery = () => {
    window.open('/galleryview', '_parent');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apitesting.nvli.in/rest-v1/gallery?page=0');
        const data = await response.json();
        if (Array.isArray(data.rows.search_results)) {
          setStoriesdata(data.rows.search_results);
        } else {
          console.error("Fetched data is not an array:", data.rows.search_results);
        }
      } catch (error) {
        console.error("Error fetching storiesdata:", error);
      }
    };

    fetchData();
  }, []);

  if (!Array.isArray(storiesdata)) {
    return <div>Error: Stories data is not an array</div>;
  }

  const filteredData = storiesdata.slice(0, storiesdata.length - 1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='galle'>
        <Container className='homegallery-header'>
          <Row>
            <Col>
              <h1>Gallery</h1>
              <img src={SwrilDivider} alt="Swirl Divider" style={{ width: '90px', height: '15px', backgroundColor: 'transparent' }} />
            </Col>
          </Row>
        </Container>

        {/* Gallery thumbnails */}
        <div className="container">
          <div className="gallery">
            {filteredData.map((item, currentIndex) => {
                let colClass = `gallitem${(currentIndex) + 1}`;
                
                // Extract `src` and `alt` from `field_gallery_1`
                const srcMatch = item.field_gallery_1.match(/src="([^"]*)"/);
                const altMatch = item.field_gallery_1.match(/alt="([^"]*)"/);
                
                const src = srcMatch ? `http://icvtesting.nvli.in${srcMatch[1]}` : '';
                const alt = altMatch ? altMatch[1] : '';

                return (
                  <div key={item.id} className={`gallery-item ${colClass}`}>
                    <img
                      className="gallery-image"
                      src={src}
                      alt={alt}
                      onError={(e) => { e.target.src = WatermarkImage; }} // Fallback to watermark image on error
                    />
                  </div>
                );
            })}
          </div>
        </div>

        <Container className='storycenter'>
          <Row>
            <Col>
              <button className="homegallerybtn" onClick={homegallery}><span>View All</span></button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeGallery;
