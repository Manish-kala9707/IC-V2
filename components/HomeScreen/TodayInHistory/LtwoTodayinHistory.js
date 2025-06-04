import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./TodayInHistory.css";

const TodayInHistory = () => {
  const today = new Date();
  const [day, setDay] = useState(today.getDate().toString());
  const [month, setMonth] = useState(
    today.toLocaleString("default", { month: "long" })
  );
  const [events, setEvents] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleExploreClick = () => {
    fetchEventData(day, month);
  };

  const fetchEventData = async (selectedDay, selectedMonth) => {
    const formattedDate = `${selectedDay}-${selectedMonth}`;
    const url = `https://icvtesting.nvli.in/rest-v1/today-in-history-api?field_date_search_value=${formattedDate}`;
    try {
      const response = await axios.get(url);
      const results = response.data?.results || [];
      setEvents(results);
      setSelectedIndex(0);
    } catch (error) {
      console.error("Failed to fetch event data:", error);
      setEvents([]);
    }
  };

  useEffect(() => {
    fetchEventData(day, month);
  }, [day, month]);

  const currentEvent = events[selectedIndex];
  const backgroundImage = currentEvent?.field_today_in_history_image
    ? `https://icvtesting.nvli.in${currentEvent.field_today_in_history_image}`
    : "/images/delhi-durbar.jpg";

  return (
    <Container className="today-history-section my-5" fluid>
      <Row>
        <Col>
          <h1>Today in History!</h1>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <img
            src={backgroundImage}
            alt="history background"
            className="img-responsive rounded w-100"
          />
        </Col>
        <Col md={7}>
          <Row>
            <Col>
              <div>
                <h5 className="historytoday-title">
                  {currentEvent?.title || "Delhi Durbar 1877"}
                </h5>
                <div
                  className="history-description"
                  dangerouslySetInnerHTML={{
                    __html:
                      currentEvent?.body ||
                      `<p>Default historical content goes here.</p>`,
                  }}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} xs={6}>
              {events.length > 1 && (
                <div className="d-flex gap-2 mt-3 flex-wrap">
                  {events.map((_, idx) => (
                    <Button
                      key={idx}
                      size="sm"
                      variant={idx === selectedIndex ? "warning" : "light"}
                      onClick={() => setSelectedIndex(idx)}
                    >
                      {idx + 1}
                    </Button>
                  ))}
                </div>
              )}
            </Col>

            <Col md={6} xs={6} className="mt-3">
              <div className="date-picker-box">
                <Form.Group className="row align-items-center">
                  <Form.Label className="col-12 mb-2 text-center fw-bold">
                    Select a Date
                  </Form.Label>

                  <div className="col-4">
                    <Form.Control
                      type="number"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      min="1"
                      max="31"
                      className="form-control h-40 text-center"
                    />
                    <div className="text-center">DD</div>
                  </div>

                  <div className="col-8">
                    <Form.Select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="form-control h-40"
                    >
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </Form.Select>
                    <div className="text-center">Month</div>
                  </div>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TodayInHistory;
