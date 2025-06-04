import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate added
import "./EventsSection.css";
import { useTranslation } from "react-i18next";

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();
  const location = useLocation(); // get current URL location
  const navigate = useNavigate(); // initialize navigate hook

  useEffect(() => {
    const isHindi = location.pathname.includes("lang=hi");
    const apiUrl = isHindi
      ? "https://icvtesting.nvli.in/hi/rest-v1/events-list"
      : "https://icvtesting.nvli.in/rest-v1/events-list";

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data && response.data.results) {
          setEvents(response.data.results);
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [location.pathname]);

  const groupedEvents = events.reduce((acc, curr) => {
    const category = curr.field_event_type || "Other"; 
    if (!acc[category]) acc[category] = [];
    acc[category].push(curr);
    return acc;
  }, {});

  const handleReadMore = (eventTitle) => {
    // Keep the event title in English even when lang=hi is present
    const englishTitle = eventTitle;  // Assuming event.title contains the English title
    const isHindi = location.pathname.includes("lang=hi");
    const path = `/lang=hi/${englishTitle}`;  // Adjust the title to the URL format
    const targetUrl = isHindi ? path : `/${englishTitle}`;

    navigate(targetUrl); // navigate to the dynamic path
  };

  return (
    <Container className="Event-Container my-5">
      <Row>
        {Object.entries(groupedEvents).map(([category, items]) => (
          <Col className="EventCol" key={category} xs={12} sm={12} md={4} mt={6} lg={4} >
            <h5 className="mb-3">{t(category)}</h5>
            {items.map((event, i) => (
              <div className="event-box-event" key={i}>
                <img
                  src={`https://icvtesting.nvli.in${event.field_event_image}`}
                  alt={event.title}
                  className="event-img"
                />
                <div className="event-content">
                  <div className="event-date">{event.field_image_lable}</div>
                  <div className="event-title">{t(event.title)}</div>
                  {event.body && (
                    <div className="event-description">{event.body}</div>
                  )}
                  <Button
                    className="read-more-btn-event mt-2"
                    onClick={() => handleReadMore(event.field_title_1.replaceAll(" ","-"))} 
                  >
                    {t("Read More")}
                  </Button>
                </div>
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsSection;
