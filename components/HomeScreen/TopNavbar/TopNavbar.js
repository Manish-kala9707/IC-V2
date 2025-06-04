import { React, useState, startTransition, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopNavbar.css";
import { useTranslation } from "react-i18next";
import Flag from "../../../image/Flag_of_India.png";
import i18next from "i18next";
import { useContext, createContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { useLocation, useNavigate } from "react-router-dom";
export const Apimode = createContext();

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleEnglishSection = (ref) => {
    if (location.pathname.includes("hi")) {
      const data = location.pathname.replace(/\/lang=hi/, "");

      navigate(`${data}`);
    }
  };
  const handleHindiSection = (ref) => {
    const ifhindi = location.pathname.split("/").includes("lang=hi");

    if (!ifhindi) {
      navigate(`/lang=hi${location.pathname}`);
    }
  };

  useEffect(() => {
    if (location.pathname.split("/").some((data) => data === "lang=hi")) {
      i18next.changeLanguage("Hnd");
    } else if (!location.pathname.includes("/lang=hi")) {
      i18next.changeLanguage("Eng");
    }
  }, [location.pathname]);

  return (
    <div className="Navbarcontainer">
      <Row className="NavbarRow">
        <Col className="leftTopNavbar" lg={6} md={6} sm={6}>
          <a
            href="https://www.india.gov.in/"
            className=""
            target="_blank" 
            rel="noreferrer"
          >
            <span className="tirangaspan">
              <img
                src={Flag}
                className="tiranga tirangaflg"
                alt="Indian Flag"
              />
            </span>
            {"  "}
            <span className="govText">{t("Government of India")}</span>
          </a>

          {"  "}
          <a
            href="https://www.india.gov.in/"
            className=""
            target="_blank"
            rel="noreferrer"
          ></a>
        </Col>

        <Col className="rightTopNavbar" lg={6} md={6} sm={6}>
          <button
            onClick={(e) => {
              handleEnglishSection("Eng");
            }}
            className={`hindibtn ${
              !location.pathname.includes("lang=hi") ? "active" : ""
            }`}
          >
            En
          </button>
          <span className="topdivider" />
          <button
            onClick={(e) => {
              handleHindiSection("Hnd");
            }}
            className={`hindibtn ${
              location.pathname.includes("lang=hi") ? "active" : ""
            }`}
          >
            हिं
          </button>
        </Col>
      </Row>
    </div>
  );
}
export default Navbar;
