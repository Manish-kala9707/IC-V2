import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import Flag from "../image/Ellipse 12.png";
import SwrilDivider from "./SwrilDivider";
import { useLocation, useNavigate } from "react-router-dom";
//import { Apimode } from "./TopNavbar";
/* import useTextSize from '../textSizeContext'; */
const TodayinHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [api, setApi] = useState();
  const [apimode, setApimode] = useState();
  const { t } = useTranslation();
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

  useEffect(() => {
    const array = location.pathname.split("/").filter((data) => {
      return data === "hi";
    });
    console.log("dyk", array);
    if (array.length > 0) {
      setApi(`https://indianculture.gov.in/hi/rest-v1/dyk-date-wise`);
      setApimode(false);
    } else {
      setApi(`https://indianculture.gov.in/rest-v1/dyk-date-wise`);
      setApimode(true);
    }
  }, [location.pathname, api]);

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
    const currentDate = new Date().toLocaleDateString(
      apimode ? "en-GB" : "hi-IN",
      {
        day: "2-digit",
        month: apimode ? "short" : "long",
        year: "numeric",
      }
    );
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

  console.log("today content", todayContent);
  const handleMonthClick = (clickedMonth) => {
    const filteredData = data.filter(
      (item) =>
        item.field_date_dyk === clickedMonth && item.field_date_dyk_2 === "2024"
    );

    setDisplaydata(filteredData);
  };
  const todayhistory = () => {
    navigate("/ltwotodayinhistory");
  };

  return (
    <>
      <Container
        className="todayhistoryheader"
        style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}
      >
        <Row>
          <Col>
            <h1>{t("Today in History")}</h1>
            <SwrilDivider />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          {todayContent ? (
            <>
              <Col xs lg="4" className="justify-content-center">
                <div className="didyouimg">
                  <img
                    src={`https://indianculture.gov.in${todayContent.field_did_you_know_image}`}
                    alt={todayContent.title}
                    className="storiescard__image"
                  />
                </div>
              </Col>
              <Col id="did">
                <h3>{todayContent.field_date_dyk_1}</h3>
                <h2>{todayContent.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: todayContent.field_did_you_know_text,
                  }}
                />
                <button class=" didyouknowbtn" onClick={todayhistory}>
                  <span>{t("Read more")}</span>
                </button>
              </Col>
            </>
          ) : (
            <p>No content available for today.</p>
          )}
        </Row>
      </Container>
      <Container fluid style={{ marginTop: "60px" }}></Container>
    </>
  );
};

export default TodayinHistory;
