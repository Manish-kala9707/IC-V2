import React, { useState } from "react";
import { Tabs, Tab, Container,Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";

const TextilesStateDetails = ({ detailData }) => {
  const [key, setKey] = useState("0");

  // Fix for malformed JSON string
  const panindiaArray = detailData.field_marker
    ?.replace("], [", "]*[")
    .split("*")
    .map((data) => JSON.parse(data))
    .flat().map((data)=>{
      return data
  }) || [];

    console.log("panindiaArray",panindiaArray)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Row>
        <Tabs
          id="pan-india-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {panindiaArray.map((item, index) => (
            <Tab eventKey={index.toString()} title={item.title} key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.body }} />
              {item.field_gallery_image && (
                <Carousel responsive={responsive} infinite autoPlay>
                  {item.field_gallery_image.split(",").map((img, idx) => (
                    <div key={idx}>
                      <Image
                        src={`http://icvtesting.nvli.in${img.trim()}`}
                        alt={`Gallery Image ${idx}`}
                        style={{ height: "400px", width: "100%", objectFit: "cover" }}
                        rounded
                      />
                    </div>
                  ))}
                </Carousel>
              )}
            </Tab>
          ))}
        </Tabs>
      </Row>
    </Container>
  );
};

export default TextilesStateDetails;
