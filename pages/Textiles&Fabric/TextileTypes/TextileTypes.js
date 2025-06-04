import React, { useState, useContext } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { ContextData } from '../../Store/FetchApiData';
import './TextileTypes.css'; // Import the CSS file
import { useLocation, useNavigate } from 'react-router-dom';
 
export default function TextileTypes() {
  const {
    fetchedData,
  } = useContext(ContextData);
 
  // State to handle the clicked item
  const [selectedCarousel, setSelectedCarousel] = useState(null);
 
  // Function to handle the onClick event
  const handleCarouselClick = (item) => {
    setSelectedCarousel(item);
    console.log('Clicked Carousel:', item);
    // You can add any other logic here (e.g., navigating to a different page or showing a modal)
  };
  const navigate=useNavigate()
  const location=useLocation()
 
  return (
    <div className="carousel-container">
      <div className="row-textiles">
        {fetchedData.map((item, index) => {
          // Filter out items with empty 'field_textile_category_image' array or invalid data
          const validImages = item.field_textile_category_image
            ? item.field_textile_category_image
                .split(',')
                .map((img) => img.trim()) // Trim each image URL to remove extra spaces
                .filter((img) => img !== '') // Filter out empty strings
            : []; // Return an empty array if 'field_textile_category_image' is falsy
 
          // Only return the item if there are valid images
          if (validImages.length > 0) {
            return (
              <div className="col-sm-6 col-xs-12" key={index}>
                <div className="carousel-wrapper">
                  <Carousel interval={null}>
                    {validImages.map((img, idx) => (
                      <Carousel.Item key={idx}>
                        {/* Wrap the entire Carousel Item with a div that is clickable */}
                        <div className="carousel-item-wrapper" onClick={() => navigate(`${location.pathname}/${item.title}`)}>
                          <div className="image-wrapper">
                            <Image
                              src={`http://icvtesting.nvli.in${img}`}
                              alt={`Textile Types ${idx}`}
                              style={{
                                height: '400px',
                                width: '100%',
                                objectFit: 'cover',
                              }}
                              rounded
                            />
                          </div>
                          <Carousel.Caption>
                            <h3>{item.title}</h3>
                          </Carousel.Caption>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            );
          }
          return null; // Return null if there are no valid images, meaning the item won't be rendered
        })}
      </div>
    </div>
  );
}