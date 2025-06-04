import { React, useEffect, useState, Suspense } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useTranslation } from "react-i18next";
import { useContext } from "react";
import Divider from "../../image/SwirlDivider.png";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { ContextData } from "../Store/FetchApiData";
import Card from "../../components/Card/Card";
import "../../App.css";
import Traditional from "../../image/ddr/art.jpg";
import Hidden from "../../image/ddr/hidden.jpg";
import personalities from "../../image/ddr/personal.jpg";
import events from "../../image/ddr/photo.jpg";
function DigitalDistrictRepository() {
  const [count, setCount] = useState(1);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  // Step 2: Function to increment the count
  const increaseCount = () => {
    setCount(count + 1);
  };
 
  const [statevalue, setStateValue] = useState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [stateName, setStateName] = useState("");
  const {
    fetchedData,
    title,
    nid,
    totalPages,
    total_items,
    items_per_page,
    current_page,
    pagename,
    pageNumber,
    filterSearchdata,
    filterSearchdata2,
    error,
    response,
  } = useContext(ContextData);
  const onLocationClick = (event) => {
    const newStateName = event.target.getAttribute("name");
 
    setStateName(newStateName);
    navigate(
      `/districts-of-defiance/district-repository/type=&f%5B0%5D=states_uts_%3A${newStateName}`
    );
  };
  const repositoryClick = () => {
    navigate(`/districts-of-defiance/district-repository`);
  };
 
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 
  const onLocationMouseOver = (event) => {
    setHoveredLocation(event.target.getAttribute("name"));
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const onLocationMouseOut = () => {
    setHoveredLocation(null);
  };
 
  return (
    <>
      <Container className="archive-header">
        <Row>
          <Col lg={6} className="text-center  pt-4">
            {fetchedData.slice(5).map((item, index) => {
              return (
                <>
                  <h1 key={index}>{t("Digital District Repository")}</h1>
                  <img
                    src={Divider}
                    alt="Caption Divider"
                    style={{
                      marginTop: "-17px",
                      width: "90px",
                      height: "15px",
                      backgroundColor: "transparent",
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{ __html: item.body }}
                    className="pt-1 "
                  />
                  <Link
                    to="/districts-of-defiance/district-repository"
                    className="freedombtn btn pt-2 mb-3"
                  >
                    <span>{t("Explore")}</span>
                  </Link>
                </>
              );
            })}
          </Col>
          <Col lg={6}>
            <SVGMap
              map={India}
              onLocationClick={onLocationClick}
              onLocationMouseOver={onLocationMouseOver}
              onLocationMouseOut={onLocationMouseOut}
            />
 
            {hoveredLocation && (
              <div
                style={{
                  position: "fixed", // Ensure it stays at the mouse position
                  top: `${mousePosition.y + 5}px`, // Offset to avoid overlap
                  left: `${mousePosition.x + 7}px`,
                  background: "#fff",
                  color: "#000",
                  padding: "5px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                  zIndex: 1000,
                  pointerEvents: "none", // Prevents interaction blocking
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                {hoveredLocation}
              </div>
            )}
 
            <p
              className="my-5 md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[6.40px]"
              size="txtBebasNeueRegular32WhiteA700"
            >
              {t("Click to navigate")}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="fortindiheader pt-1">
        <Row>
          <Col className="text-center fortstext pt-1 pb-1">
            <h1>{t("Categories")}</h1>
            <img
              src={Divider}
              alt="Caption Divider"
              style={{
                marginTop: "-17px",
                width: "90px",
                height: "15px",
                backgroundColor: "transparent",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Link
              to={`/districts-of-defiance/district-repository/type=&f%5B0%5D=category_ddr%3AHidden%20Treasures`}
            >
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img className="img-responsive" src={Hidden} alt={title} />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center">{t("Hidden Treasures")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Link
              to={`/districts-of-defiance/district-repository/type=&f%5B0%5D=category_ddr%3AEvents`}
            >
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img className="img-responsive" src={events} alt={title} />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center">{t("Events")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Link
              to={`/districts-of-defiance/district-repository/type=&f%5B0%5D=category_ddr%3APersonality`}
            >
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img
                  className="img-responsive"
                  src={personalities}
                  alt={title}
                />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center">{t("Personalities")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Link
              to={`/districts-of-defiance/district-repository/type=&f%5B0%5D=category_ddr%3ATraditions%20%26%20Art%20Forms`}
            >
              <div className="children-card-food" style={{ margin: "4px" }}>
                <img className="img-responsive" src={Traditional} alt={title} />
                <div className="children-name" style={{ top: "30%" }}>
                  <p className="text-center">{t("Traditions and art forms")}</p>
                </div>
                <div className="children-username"></div>
                <Button className="children-icons" variant="outline-light">
                  {t("Explore")}
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
        <Row
          onClick={() => {
            navigate(
              "/districts-of-defiance/district-repository/type=&f%5B0%5D=category_ddr%3ADDR%20Story"
              
            );
          }}
          style={{
            height: "30px",
            backgroundColor: "yellow",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          {t("Stories")}
        </Row>
      </Container>
    </>
  );
}
 
export default DigitalDistrictRepository;
 