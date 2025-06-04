import { useEffect, React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import SwirlDivider from "../image/SwirlDivider.png";
import Flag from "../image/Ellipse 12.png";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
const Ltwodidyouknow = () => {
  const [data, setData] = useState([]);
  const [todayContent, setTodayContent] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthName());
  const [displaydata, setDisplaydata] = useState([]);
  const monthNames = [
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
  ];

  function getCurrentMonthName() {
    const monthNames = [
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
    ];
    const currentMonthIndex = new Date().getMonth();
    return monthNames[currentMonthIndex];
  }
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalImg, setModalImg] = useState("");
  const openModal = (title, content, dkyimages) => {
    setModalTitle(title);
    setModalContent(content);
    setModalImg(dkyimages);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalTitle("");
    setModalContent("");
  };

  let api = `https://indianculture.gov.in/rest-v1/dyk-date-wise`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        setData(jsonData.search_results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formattedCurrentDate = currentDate
      .split(" ")
      .map((part, index) => (index === 1 ? part : part.toUpperCase()))
      .join("-");
    const todayContent = data.find(
      (item) => item.field_date_dyk_1 === formattedCurrentDate
    );

    // Fetch data for the current month and year 2023
    const currentMonthData = data.filter(
      (item) =>
        item.field_date_dyk === getCurrentMonthName() &&
        item.field_date_dyk_2 === "2024"
    );

    if (currentMonthData.length > 0) {
      setSelectedMonth(getCurrentMonthName());
      setDisplaydata(currentMonthData);
      setTodayContent(currentMonthData[0]);
    }
    setTodayContent(todayContent);
  }, [data]);
  const handleMonthClick = (clickedMonth) => {
    const filteredData = data.filter(
      (item) =>
        item.field_date_dyk === clickedMonth && item.field_date_dyk_2 === "2024"
    );

    setDisplaydata(filteredData);
  
  };

  return (
    <>
      {todayContent ? (
        <>
          <Container fluid className="p-0">
            <img
              src={`https://indianculture.gov.in${todayContent.field_did_you_know_image}`}
              alt={todayContent.title}
              className="storiescard__image"
            />
          </Container>
          <Container fluid>
            <Row>
              <Col sm={1}>
                {/* Link component wraps ArrowLeft */}
                
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <>
                <Col xs="12" className="text-center didknow-header">
                  <h1>{todayContent.title}</h1>
                  <img
                    src={SwirlDivider}
                    className="swrildivider"
                    alt="divider"
                  />
                </Col>
                <Col xs="12">
                  {" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: todayContent.field_did_you_know_text,
                    }}
                  />{" "}
                </Col>
              </>
            </Row>
          </Container>
        </>
      ) : (
        <p>No content available for today.</p>
      )}

      <Container className="didknow-header">
        <Row>
          <Col>
            <h1>Previous Did you knows?</h1>
            <img src={SwirlDivider} className="swrildivider" alt="divider" />
          </Col>
        </Row>
      </Container>
      <main className="main">
        <div className="container">
          <div className="month">
            <div
              className="heading"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {monthNames.map((month, index) => {
                const monthHasData = data.some(
                  (item) =>
                    item.field_date_dyk === month &&
                    item.field_date_dyk_2 === "2023"
                );
                const isActive = month === selectedMonth;
                return (
                  monthHasData && (
                    <div
                      key={index}
                      className={
                        isActive ? "selected btn btn-secondary" : "btn"
                      }
                      onClick={() => {
                        setSelectedMonth(month);
                        handleMonthClick(month);
                      }}
                    >
                      {month}
                    </div>
                  )
                );
              })}
            </div>

            <div>
              <Container className="didknow-header">
                <Row className="pt-5 mb-5">
                  {displaydata.length > 0 ? (
                    displaydata.map((item, index) => (
                      <Col xs={12} md={2} key={index} className="pt-3 mb-3">
                        {/* Attach onClick to the title */}
                        <div
                          onClick={() =>
                            openModal(item.title, item.field_did_you_know_text)
                          }
                          className="image-dyk"
                        >
                          <div className="didyouimglst">
                            <img src={Flag} alt="Did you know" className="img-responsive" />
                            {/* <img src={`https://indianculture.gov.in${todayContent.field_did_you_know_image}`} alt={todayContent.title} className="storiescard__image" /> */}
                          </div>
                          <b className="pt-3">{item.field_date_dyk_1}</b>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <div>No data</div>
                  )}
                </Row>
                {/* Bootstrap Modal */}
                <Modal show={showModal} onHide={closeModal} size="xl">
                  <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: modalContent }} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Container>
            </div>
          </div>
        </div>
      </main>
      <Container className="didknow-header">
        <Row>
          <Col>
            {/* <h1>Previous Did you knows?</h1> */}
            <img src={SwirlDivider} className="swrildivider" alt="divider" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ltwodidyouknow;
