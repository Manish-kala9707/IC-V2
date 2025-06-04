import React, { useState, useEffect } from "react";
import { Search as SearchIcon, ArrowLeft } from "react-feather";
import ninedots from "../../../image/HomepageLogo/MenuBar/9 dots Black-01.webp";
import ninedotswhite from "../../../image/HomepageLogo/MenuBar/9 Dots Logo White-01.webp";
import Accessmenu from "../../../image/HomepageLogo/MenuBar/Accessibility Menu Logo-01.webp";
import threeLineWhite from "../../../image/HomepageLogo/MenuBar/3 Lines Logo White-01.webp";
import threeLineBlack from "../../../image/HomepageLogo/MenuBar/3 Lines Logo Black-01-01.webp";
import ICLogo from "../../../image/HomepageLogo/MenuBar/ICP LOGO V2-01.png";
import ICLogoHindi from "../../../image/HomepageLogo/MenuBar/ICP LOGO V2-Hindi-01-01.png";
import ICLogoWhite from "../../../image/HomepageLogo/MenuBar/ICP-LOGO-V2-White-01.webp";
import MinistryHnd from "../../../image/HomepageLogo/Ministry-of-Culture-Hindia-Logo-White.webp";
import ICLogoWhiteHindi from "../../../image/HomepageLogo/MenuBar/ICP-LOGO-V2--Hindi-White-01-01.png";
import Aplus from "../../../image/HomepageLogo/Accessibility/A+ Logo Black-01.webp";
import Aminus from "../../../image/HomepageLogo/Accessibility/A- lOGO-01.webp";
import Brightness from "../../../image/HomepageLogo/Accessibility/Brightness-Icon-Black.webp";
import cursorLogo from "../../../image/HomepageLogo/Accessibility/Cursor-Logo-Black.webp";
import cursorLogo2 from "../../../image/black icons/Default-Cursor---V2.png";
import linkicon from "../../../image/HomepageLogo/Accessibility/Links-Icon-Black.webp";
import saturation from "../../../image/HomepageLogo/Accessibility/Saturation-Icon-Black.webp";
import MenuBarOption from "./MenuBarOption";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import XBlack from "../../../image/HomepageLogo/XBlack.webp";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Container,
  Form,
  Navbar,
  Nav,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menubar.css";

function Menubar({
  theme,
  contrast,
  highlightLinks,
  toggleTheme,
  toggleContrast,
  startIncreasingFont,
  startDecreasingFont,
  stopFontAdjustment,
  toggleLinkHighlight,
}) {
  const [isLargeCursor, setIsLargeCursor] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isMobile420, setIsMobile420] = useState(false); // initially false

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setIsMobile420(true);
      } else {
        setIsMobile420(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const cursorImage = cursorLogo2; // This must be a valid, same-origin image (PNG or CUR)
    
    if (isLargeCursor) {
      document.documentElement.style.cursor = `url(${cursorImage}), auto`;
    } else {
      document.documentElement.style.cursor = "auto";
    }
  
    return () => {
      
      document.documentElement.style.cursor = "auto";
    };
  }, [isLargeCursor, cursorLogo]);
  
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 530);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("isScrolled", isScrolled);
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "https://icvtesting.nvli.in/rest-v1/original-categories-all"
        );
        const json = await response.json();
        const data = await json.results;
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  console.log("menus", menuItems);
  const formatText = (text) => {
    const slug = text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&amp;/g, "and");
    return location.pathname.includes("lang=hi") ? `lang=hi/${slug}` : slug;
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClose = () => setShowAccessibilityMenu(false);
  const handleShow = () => setShowAccessibilityMenu(true);
  const filteredMenuItems = menuItems.filter(
    (menuItem) =>
      menuItem &&
      menuItem.title &&
      menuItem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar
        expand={false}
        className={`navbar-custom sticky-top ${isScrolled ? "active" : ""}`}
      >
        {isMobile420 ? (
          <>
            {/* Row 1: Menu and Logo */}
            <Row className="row1smallscreen">
              <Col xs={2} className="d-flex justify-content-end">
                <img
                  onClick={() => setShowInfoPanel(true)}
                  style={{ cursor: "pointer" }}
                  src={isScrolled ? threeLineBlack : threeLineWhite}
                  className="menu-ic-image-three"
                  alt="Menu Icon"
                />
              </Col>
              <Col xs={8} className="d-flex justify-content-center">
                <Navbar.Brand as={Link} to={location.pathname.includes("lang=hi") ? "/lang=hi" : "/"} className="ms-1 pb-0 pt-0">
                  <img
                    src={
                      location.pathname.includes("lang=hi")
                        ? isScrolled
                          ? ICLogoHindi
                          : ICLogoWhiteHindi
                        : isScrolled
                        ? ICLogo
                        : ICLogoWhite
                    }
                    alt="IC Logo"
                    className="menu-ic-image-logo"
                  />
                </Navbar.Brand>
              </Col>
              <Col xs={2} className="d-flex justify-content-end">
                <img
                  onClick={() => setShowOffcanvas(true)}
                  src={isScrolled ? ninedots : ninedotswhite}
                  alt="Menu"
                  className="img-menu-ninedots"
                />
              </Col>
            </Row>

            {/* Row 2: Search and Accessibility */}
            <Row className="row2smallscreen">
              <Col xs={10} sm={10} className="menu-form-col pe-2">
                <div className="search-container">
                  <Form.Control
                    type="search"
                    value={searchTerm}
                    placeholder="search"
                    onChange={handleSearchChange}
                    onBlur={() => setShowSearchInput(false)}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        navigate(
                          `globalsearch/searchtext=${encodeURIComponent(
                            searchTerm
                          )}`
                        );
                      }
                    }}
                  />
                </div>
              </Col>
              <Col
                xs={2}
                sm={2}
                className="d-flex justify-content-end accessibilitycol"
              >
                <img
                  src={Accessmenu}
                  alt="Accessibility"
                  className="img-menu-Accessibility"
                  onClick={() => setShowAccessibilityMenu((prev) => !prev)}
                />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Col
              lg={4}
              xs={4}
              sm={4}
              md={4}
              className="d-flex align-items-center"
            >
              <img
                onClick={() => setShowInfoPanel(true)}
                style={{ cursor: "pointer" }}
                src={isScrolled ? threeLineBlack : threeLineWhite}
                className="menu-ic-image-three"
              ></img>
              <Navbar.Brand as={Link} to={location.pathname.includes("lang=hi") ? "/lang=hi" : "/"} className="ms-1 pb-0 pt-0">
                <img
                  src={
                    location.pathname.includes("lang=hi")
                      ? isScrolled
                        ? ICLogoHindi
                        : ICLogoWhiteHindi
                      : isScrolled
                      ? ICLogo
                      : ICLogoWhite
                  }
                  alt="IC Logo"
                  className="menu-ic-image-logo"
                />
              </Navbar.Brand>
            </Col>

            <Col lg={8} xs={8} sm={8} md={8} className="menu-right-col">
              <Row className="h-100 justify-content-end">
                <Col
                  lg={8}
                  xs={6}
                  md={9}
                  sm={9}
                  className="menu-form-col"
                  style={{
                    borderRight: isScrolled
                      ? "1px solid black"
                      : "1px solid white",
                  }}
                >
                  <div className="search-container">
                    <Form className="d-flex position-relative">
                      {showSearchInput && (
                        <Form.Control
                          type="search"
                          className="elastic-input show"
                          value={searchTerm}
                          placeholder="search"
                          onChange={handleSearchChange}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              navigate(
                                `globalsearch/searchtext=${encodeURIComponent(
                                  searchTerm
                                )}`
                              );
                            }
                          }}
                          onBlur={() => setShowSearchInput(false)}
                          autoFocus
                        />
                      )}
                      <SearchIcon
                        color={isScrolled ? "black" : "white"}
                        size={22}
                        className="search-icon"
                        onClick={() => setShowSearchInput(true)}
                        style={{ cursor: "pointer" }}
                      />
                    </Form>
                  </div>
                </Col>

                <Col
                  lg={2}
                  md={1}
                  sm={1}
                  xs={2}
                  className="ninedot-col"
                  style={{
                    borderRight: isScrolled
                      ? "1px solid black"
                      : "1px solid white",
                  }}
                >
                  <img
                    onClick={() => setShowOffcanvas(true)}
                    src={isScrolled ? ninedots : ninedotswhite}
                    alt="Menu"
                    className="img-menu-ninedots"
                  />
                </Col>
                <Col lg={2} md={1} sm={1} xs={2} className="accessibilitycol">
                  <img
                    src={Accessmenu}
                    alt="Accessibility"
                    className="img-menu-Accessibility"
                    onClick={() => setShowAccessibilityMenu((prev) => !prev)}
                  />
                </Col>
              </Row>
            </Col>
          </>
        )}

        <Offcanvas
          show={showInfoPanel}
          onHide={() => setShowInfoPanel(false)}
          placement="start"
          className="info-panel"
          style={{ width: "280px" }}
        >
          <Offcanvas.Header className="infoPanelOffcanvasHeader" closeButton>
            <Offcanvas.Title>
              <strong>{t("Home")}</strong>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <br></br>
            <hr />
            <Link to="/about-us">
              <h5>{t("About Us")}</h5>
            </Link>

            <h4>{t("Connect with us")}</h4>
            <ul>
              <li>
                <Link to="/campus-ambassador-programme">
                  {t("Campus Ambassador")}
                </Link>
              </li>
              <li>
                <Link to="/jobs-opportunities">{t("Job Opportunities")}</Link>
              </li>
              <li>
                {" "}
                <h5>{t("Contact Us")}</h5>
              </li>
            </ul>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <a
                href="https://www.instagram.com/indiancultureportal/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#E1306C", fontSize: "45px" }}
              >
                <i className="fab fa-instagram"></i>
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/INDCulturePortal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3b5998", fontSize: "45px" }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/_IndianCulture"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={XBlack}
                  alt="Twitter Icon"
                  style={{
                    width: "45px",
                    height: "32px",
                    objectFit: "contain",
                  }}
                />
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Offcanvas
          className="accessibilityOfCanvas"
          placement={"end"}
          scroll={true}
          backdrop={true}
          show={showAccessibilityMenu}
          onHide={handleClose}
        >
          <Offcanvas.Header
            className="accessibilityOffcanvasHeader"
            closeButton
          >
            <Offcanvas.Title className="accessibilityOfCanvasTitle">
              {t("Accessibility Menu")}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="accessibilityOffcanvasMenu">
            <div className="accessibility-dropdown">
              <ul>
                <li
                  onClick={toggleTheme}
                  style={{
                    backgroundColor: theme === "dark" ? "red" : "",
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="AccessbilityIconImages"
                    src={Brightness}
                    alt="Brightness"
                  />
                  <div>{t("Dark Contrast")}</div>
                </li>

                <li
                  onClick={toggleContrast}
                  style={{
                    backgroundColor: contrast !== "default" ? "red" : "",
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="AccessbilityIconImages"
                    src={saturation}
                    alt="Saturation"
                  />
                  <div>{t("Saturation")}</div>
                </li>

                <li
                  onClick={toggleLinkHighlight}
                  style={{
                    backgroundColor: highlightLinks === true ? "red" : "",
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="AccessbilityIconImages"
                    src={linkicon}
                    alt="Highlight Links"
                  />
                  <div>{t("Highlight Links")}</div>
                </li>

                <li
                  onMouseDown={startIncreasingFont}
                  onMouseUp={stopFontAdjustment}
                  onMouseLeave={stopFontAdjustment}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="AccessbilityIconImages"
                    src={Aplus}
                    alt="Increase Font"
                  />
                  <div>{t("Text Size Increase")}</div>
                </li>

                <li
                  onMouseDown={startDecreasingFont}
                  onMouseUp={stopFontAdjustment}
                  onMouseLeave={stopFontAdjustment}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="AccessbilityIconImages"
                    src={Aminus}
                    alt="Decrease Font"
                  />
                  <div>{t("Text Size Decrease")}</div>
                </li>

                <li
                  onClick={() => setIsLargeCursor((prev) => !prev)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="AccessbilityIconImages"
                    src={cursorLogo}
                    alt="Cursor"
                  />
                  <div>{t("Default Cursor")}</div>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="end"
          className="menuoption"
        >
          <Offcanvas.Header className="menubarOptionHeader" closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>

          <MenuBarOption />
        </Offcanvas>
      </Navbar>
    </>
  );
}

export default Menubar;
