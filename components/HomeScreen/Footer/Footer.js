import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// external css

// import images from local system
import QRCode from "../../../image/QRCode.PNG";
import IncredibleIndia from "../../../image/HomepageLogo/Incredible-India-Logo-English-White.webp";
import IncredibleIndiaHnd from "../../../image/HomepageLogo/Incredible-India-Logo-Hindi-White.webp";
import ministryOfCultureHnd from "../../../image/HomepageLogo/Ministry-of-Culture-Hindia-Logo-White.webp";
import DigiIndia from "../../../image/Digital-India.png";
import Logo1 from "../../../image/Incredible-India.png";
import Gandhi from "../../../image/Ministry of culture.png";
import Swachhbharat from "../../../image/Mygov.png";
import Mygov from "../../../image/Swacch-Bharat.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Twitter, Linkedin } from "react-feather";
import footerimage from "../../../image/HomepageLogo/Background_12-04-2025.webp";
import EngIIt from "../../../image/HomepageLogo/IIT-Bombay-White.png";
import HindiIIt from "../../../image/HomepageLogo/IIT-Bombay-Hindi-White.png";
// import Underline from './Underline';
import XBlack from "../../../image/HomepageLogo/XBlack.webp";
import InstagramWhite from "../../../image/HomepageLogo/InstagramWhite.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import FacebookWhite from "../../../image/HomepageLogo/FacebookWhite.png";
import XWhite from "../../../image/HomepageLogo/XWhite.png";
import EmailWhite from "../../../image/HomepageLogo/EmailWhite.png";
import MyGovLogoWhite from "../../../image/HomepageLogo/MyGovLogoWhite.webp";
import DigitalIndiaLogoWhite from "../../../image/HomepageLogo/DigitalIndiaLogoWhite.webp";
function FooterSection() {
  const { t } = useTranslation();
  const [visitorscount, setVisitorsCount] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://icvtesting.nvli.in/rest-v2/count-result"
        );
        const response2 = await fetch(
          "https://icvtesting.nvli.in//custom-api/hit-node/3000783"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const arraycounter = await json.results;
        setVisitorsCount(arraycounter[0]);
        console.log("Fetched data:", arraycounter);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const visitorCount =
    visitorscount &&
    String(visitorscount.totalcount).replaceAll(",", "").split("");
  const location = useLocation();

  return (
    <>
      <footer className="footer-section p-3">
        <div className="container-fluid">
          <div className="footer-content pt-1 pb-1">
            <Row className="d-none d-sm-flex">
              <Col lg={4} xs={12} md={4}>
                <div className="footer-widget">
                  <Row>
                    <div className="footer-widget-heading">
                      <h3>{t("IndianCulture2.0")}</h3>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "auto" }}>
                      {location.pathname.includes("lang=hi") ? (
                        <p>
                          डिजिटल भविष्य के लिए खुद को तैयार करने की निरंतर
                          आवश्यकता को पहचानते हुए, भारतीय संस्कृति संस्कृति
                          मंत्रालय द्वारा एक पहल है। यह एक ऐसा मंच है जो पूरे
                          भारत में विभिन्न रिपॉजिटरी और संस्थानों से सांस्कृतिक
                          प्रासंगिकता के डेटा को होस्ट करता है।
                        </p>
                      ) : (
                        <p>
                          Recognizing the ongoing need to position itself for
                          the digital future, Indian Culture is an initiative by
                          the Ministry of Culture. A platform that hosts data of
                          cultural relevance from various repositories and
                          institutions all over India.
                        </p>
                      )}
                    </div>
                  </Row>
                  <div className="footer-widget-heading">
                    <h3>{t("Our Partners")}</h3>
                  </div>
                  <Row className="footer-link-row">
                    <Col>
                      <a
                        href="https://www.indiaculture.gov.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={
                            location.pathname.includes("lang=hi")
                              ? ministryOfCultureHnd
                              : Gandhi
                          }
                          alt="Gandhi"
                          className="footericon6"
                        />
                      </a>
                    </Col>

                    <Col className="footer-link-row">
                      <a
                        href="https://www.iitb.ac.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={
                            location.pathname.includes("lang=hi")
                              ? HindiIIt
                              : EngIIt
                          }
                          alt="Gandhi"
                          className="footericon6"
                        />
                      </a>
                    </Col>
                  </Row>
                  <Row className="visitor-row">
                    <br />
                    {/* Visitor Counter Section */}
                    <div
                      className="box visitor-box"
                      style={{ border: "1px solid" }}
                    >
                      <div className="visitor-label">
                        {t("Visitors who have stopped by")}
                      </div>
                      <div className="visitor-digits">
                        {visitorCount.map((digit, index) => (
                          <div key={index} className="digit-box">
                            {digit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>

              <Col
                lg={3}
                xs={4}
                md={3}
                className="pl-lg-3 ml-lg-3 pl-md-0 ml-md-0"
              >
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>{t("QuickLinks")}</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/copyright-policy">
                        {t("Copyright Policy")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/disclaimer">{t("Disclaimer")}</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">
                        {t("Terms & Conditions")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">{t("Privacy Policy")}</Link>
                    </li>
                    <li>
                      <Link to="/accessibility-statement">
                        {t("Accessibility Statement")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/sitemap">{t("Site Map")}</Link>
                    </li>
                    <li>
                      <Link to="/hyper-linking-policy">
                        {t("Hyperlinking Policy")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={2} xs={4} md={3} className=" mr-sm-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>{t("Connect with us")}</h3>
                  </div>
                  <div className="footer-text">
                    <div className="social-item mb-4 ml-3">
                      <img
                        src={EmailWhite}
                        alt="Email Icon"
                        className="icon"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                          objectFit: "contain",
                        }}
                      />
                      <div>
                        <div className="label">{t("Email")}</div>
                        <div className="handle">
                          {t("indian-culture@gov.in")}
                        </div>
                      </div>
                    </div>
                    <div className="social-col">
                      <a
                        href="https://www.instagram.com/indiancultureportal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div
                          className="social-item mb-4 ml-3"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={InstagramWhite}
                            alt="Instagram Icon"
                            className="icon"
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "10px",
                              objectFit: "contain",
                            }}
                          />
                          <div>
                            <div className="label">{t("Instagram")}</div>
                            <div className="handle">@indiancultureportal</div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://www.facebook.com/INDCulturePortal"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div
                          className="social-item mb-4 ml-3"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={FacebookWhite}
                            alt="Facebook Icon"
                            className="icon"
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "10px",
                              objectFit: "contain",
                            }}
                          />
                          <div>
                            <div className="label">{t("Facebook")}</div>
                            <div className="handle">@INDCulturePortal</div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://twitter.com/_IndianCulture"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div
                          className="social-item mb-4 ml-3"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={XWhite}
                            alt="Twitter Icon"
                            className="icon"
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "10px",
                              objectFit: "contain",
                            }}
                          />
                          <div>
                            <div className="label">{t("X")}</div>
                            <div className="handle">@_indianculture</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={2} xs={4} md={2} className="ml-lg-5 pl-md-0 ml-md-0">
                <Row>
                  <Col md={1}>
                    <div class="vertical-line-with-circles">
                      <div class="vertical-line"></div>
                    </div>
                  </Col>
                  <Col md={10} className="mocimg">
                    <Row className="footer-link-row">
                      <Col className="mb-2">
                        <a
                          href="https://www.mygov.in/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={MyGovLogoWhite}
                            alt="Swachhbharat"
                            className="footericon3"
                          />
                        </a>
                      </Col>
                    </Row>
                    <Row className="footer-link-row">
                      <Col className="mb-2">
                        <a
                          href="https://www.digitalindia.gov.in/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={DigitalIndiaLogoWhite}
                            alt="Digital India"
                            className="footericon4"
                          />
                        </a>
                      </Col>
                    </Row>
                    <Row className="footer-link-row">
                      <Col className="mb-2">
                        <a
                          href="https://swachhbharatmission.gov.in/SBMCMS/index.htm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={Mygov}
                            alt="Swachhbharat"
                            className="footericon4"
                          />
                        </a>
                      </Col>
                    </Row>
                    <Row className="footer-link-row">
                      <Col style={{ marginBottom: "25px" }}>
                        <a
                          href="https://www.incredibleindia.org/content/incredible-india-v2/en.html"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={
                              location.pathname.includes("lang=hi")
                                ? IncredibleIndiaHnd
                                : IncredibleIndia
                            }
                            alt="Logo1"
                            className="footericon5"
                          />
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* mobile view footer design */}
            <Row className="d-block d-sm-none">
              <Col lg={4} sm={11} xs={12} md={10}>
                <div className="footer-widget">
                  <Row>
                    <div className="footer-widget-heading">
                      <h3>{t("IndianCulture2.0")}</h3>
                    </div>
                    <div className="footer-text" style={{ marginLeft: "auto" }}>
                      {location.pathname.includes("lang=hi") ? (
                        <p>
                          डिजिटल भविष्य के लिए खुद को तैयार करने की निरंतर
                          आवश्यकता को पहचानते हुए, भारतीय संस्कृति संस्कृति
                          मंत्रालय द्वारा एक पहल है। यह एक ऐसा मंच है जो पूरे
                          भारत में विभिन्न रिपॉजिटरी और संस्थानों से सांस्कृतिक
                          प्रासंगिकता के डेटा को होस्ट करता है।
                        </p>
                      ) : (
                        <p>
                          Recognizing the ongoing need to position itself for
                          the digital future, Indian Culture is an initiative by
                          the Ministry of Culture. A platform that hosts data of
                          cultural relevance from various repositories and
                          institutions all over India.
                        </p>
                      )}
                    </div>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <div className="footer-widget">
                        <div className="footer-widget-heading">
                          <h3>{t("QuickLinks")}</h3>
                        </div>
                        <ul>
                          <li>
                            <Link to="/copyright-policy">
                              {t("Copyright Policy")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/disclaimer">{t("Disclaimer")}</Link>
                          </li>
                          <li>
                            <Link to="/terms-and-conditions">
                              {t("Terms & Conditions")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">
                              {t("Privacy Policy")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/accessibility-statement">
                              {t("Accessibility Statement")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/sitemap">{t("Site Map")}</Link>
                          </li>
                          <li>
                            <Link to="/hyper-linking-policy">
                              {t("Hyperlinking Policy")}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={6} xs={6}>
                      <Row>
                        <Col sm={12} className="mocimg">
                          <Row className="footer-link-row">
                            <Col>
                              <a
                                href="https://www.mygov.in/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={MyGovLogoWhite}
                                  alt="Swachhbharat"
                                  className="footericon3"
                                />
                              </a>
                            </Col>
                          </Row>
                          <Row className="footer-link-row">
                            <Col>
                              <a
                                href="https://www.digitalindia.gov.in/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={DigitalIndiaLogoWhite}
                                  alt="Digital India"
                                  className="footericon4"
                                />
                              </a>
                            </Col>
                          </Row>
                          <Row className="footer-link-row">
                            <Col>
                              <a
                                href="https://swachhbharatmission.gov.in/SBMCMS/index.htm"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={Mygov}
                                  alt="Swachhbharat"
                                  className="footericon4"
                                />
                              </a>
                            </Col>
                          </Row>
                          <Row className="footer-link-row">
                            <Col>
                              <a
                                href="https://www.incredibleindia.org/content/incredible-india-v2/en.html"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={
                                    location.pathname.includes("lang=hi")
                                      ? IncredibleIndiaHnd
                                      : IncredibleIndia
                                  }
                                  alt="Logo1"
                                  className="footericon5"
                                />
                              </a>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col sm={12} xs={12}>
                      <div className="footer-widget">
                        <div className="footer-widget-heading pt-3">
                          <h3>{t("Connect with us")}</h3>
                        </div>
                        <div className="footer-text">
                          <div className="social-item mb-4 ml-3">
                            {/* Email icon (non-clickable) */}
                            <img
                              src={EmailWhite}
                              alt="Email Icon"
                              className="icon"
                              style={{
                                width: "30px",
                                height: "30px",
                                marginRight: "10px",
                                objectFit: "contain",
                              }}
                            />

                            {/* Instagram icon */}
                            <a
                              href="https://www.instagram.com/indiancultureportal/"
                              target="_blank"
                            >
                              <img
                                src={InstagramWhite}
                                alt="Instagram Icon"
                                className="icon"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  marginRight: "10px",
                                  objectFit: "contain",
                                }}
                              />
                            </a>

                            {/* Facebook icon */}
                            <a
                              href="https://www.facebook.com/INDCulturePortal"
                              target="_blank"
                            >
                              <img
                                src={FacebookWhite}
                                alt="Facebook Icon"
                                className="icon"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  marginRight: "10px",
                                  objectFit: "contain",
                                }}
                              />
                            </a>

                            {/* X (Twitter) icon */}
                            <a
                              href="https://twitter.com/_IndianCulture"
                              target="_blank"
                            >
                              <img
                                src={XWhite}
                                alt="Twitter Icon"
                                className="icon"
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  marginRight: "10px",
                                  objectFit: "contain",
                                }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="visitor-row">
                    {/* Visitor Counter Section */}
                    <div
                      className="box visitor-box"
                      style={{ border: "1px solid" }}
                    >
                      <div className="visitor-label">
                        {t("Visitors who have stopped by")}
                      </div>
                      <div className="visitor-digits">
                        {visitorCount.map((digit, index) => (
                          <div key={index} className="digit-box">
                            {digit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Row>
                  <div className="footer-widget-heading">
                    <h3>{t("Our Partners")}</h3>
                  </div>
                  <Row className="footer-link-row">
                    <Col>
                      <a
                        href="https://www.indiaculture.gov.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={
                            location.pathname.includes("lang=hi")
                              ? ministryOfCultureHnd
                              : Gandhi
                          }
                          alt="Gandhi"
                          className="footericon6"
                        />
                      </a>
                    </Col>

                    <Col className="footer-link-row">
                      <a
                        href="https://www.iitb.ac.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={
                            location.pathname.includes("lang=hi")
                              ? HindiIIt
                              : EngIIt
                          }
                          alt="Gandhi"
                          className="footericon6"
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <div class="line-with-circles">
                  <div class="line"></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
