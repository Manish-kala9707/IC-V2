import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SwrilDivider from "./SwrilDivider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "glider-js/glider.min.css";
import Glider1 from "glider-js";

const ExternalLinks = () => {
  const [IcMoclist, setIcMoclist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apitesting.nvli.in/rest-V1/externalLinks");
        const data = await response.json();
        const sortedData = data.sort((a, b) => a?.title?.localeCompare(b?.title));
        setIcMoclist(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (IcMoclist.length > 0) {
      new Glider1(document.querySelector(".glider1"), {
        slidesToShow: 4, // Number of slides visible at once
        slidesToScroll: 1,
        draggable: true,
        dots: ".dots",
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next",
        },
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  }, [IcMoclist]);

  return (
    <>
      <Container className="moc-header">
        <Row>
          <Col>
            <h1>External Links</h1>
            <SwrilDivider />
          </Col>
        </Row>
      </Container>

      <main className="main">
        <div className="container">
          <div className="glider-contain">
            <div className="glider1 hide-scrollbar">
              {IcMoclist.map((item, index) => (
                <div key={index} className="card-image">
                  <Link to={item.field_extenal_link}>
                    <img
                      src={`https://nvli.in${item?.field_external_website_image}`}
                      alt={item?.title}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <span role="button" aria-label="Previous" className="glider-prev">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <span role="button" aria-label="Next" className="glider-next">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default ExternalLinks;
