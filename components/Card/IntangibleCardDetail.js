import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Filter } from "react-feather";
import { Col, Row, Offcanvas, FormControl, Button } from "react-bootstrap";
import { FaThLarge, FaList, FaEye, FaCheckCircle } from "react-icons/fa";
import "./InternalSearchCard.css";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
import { useTranslation } from "react-i18next";
const InternalSearchCard = ({
  filterSearchdata,
  filterSearchdata2,
  filterSearchdata3,
  filterSearchdata4,
  filterSearchdata5,
  filterSearchdata6,
  filterSearchdata7,
  onResetFilters,
  filterName1,
  filterName2,
  filterName3,
  filterName4,
  filterName5,
  filterName6,
  filterName7,
  category,
  pageNumber,
  total_items,
  items_per_page,
  textSize,
  isGridView,
  setIsGridView,
}) => {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const searchref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
 
  const { t } = useTranslation();
  const fromItem =
    pageNumber === 0 || pageNumber === 1 || pageNumber == null
      ? 1
      : (pageNumber - 1) * items_per_page + 1;
 
  const toItem =
    pageNumber === 0 || pageNumber === 1 || pageNumber == null
      ? items_per_page > total_items
        ? total_items
        : items_per_page
      : pageNumber * items_per_page > total_items
      ? total_items
      : pageNumber * items_per_page;
  const handleClose = () => {
    setShow(false);
    setCheckedItems({});
  };
 
  const handleShow = () => setShow(true);
 
  useEffect(() => {
    const updatedCheckedItems = {};
    [filterSearchdata, filterSearchdata2, filterSearchdata3, filterSearchdata4]
      .filter(Boolean)
      .flat()
      .forEach((item) => {
        updatedCheckedItems[item.values.value] = item.values.active;
      });
    setCheckedItems(updatedCheckedItems);
  }, [
    filterSearchdata,
    filterSearchdata2,
    filterSearchdata3,
    filterSearchdata4,
    filterSearchdata5,
    filterSearchdata6,
    filterSearchdata7,
  ]);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const handleDctypevalue = (value, e, filterQuery, clickedFilter) => {
    const isChecked = e.target.checked;
 
    const updatedCheckedItems = {
      ...checkedItems,
      [value]: isChecked,
    };
    setCheckedItems(updatedCheckedItems);
    const newSelectedTypes = isChecked
      ? value.replace("search_api_fulltext=", "")
      : value
          .replace("search_api_fulltext=", "")
          .split("&")
          .filter((item) => item !== clickedFilter.replace(" ", "%20"))
          .join("&"); // Remove if unchecked
 
    setSelectedTypes(newSelectedTypes);
 
    if (!newSelectedTypes) {
      const newPathname = `/${category}`;
      navigate(newPathname);
    } else {
      const newPathname = `/${category}/type=${newSelectedTypes}`;
      navigate(newPathname);
    }
  };
 
  const resetFilters = () => {
    const urlArray = location.pathname
      .split("/")
      .filter((item) => !item.includes("type"));
    const url = urlArray.join("/");
    navigate(url.startsWith("/") ? url : `/${url}`);
  };
 
  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSearchbox();
  };
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split("");
    if (words.length > 256) {
      alert("Max word count exceeded.");
      const limitedWords = words.slice(0, 256).join("");
      setSearchQuery(limitedWords);
      localStorage.setItem("searchQuery", limitedWords);
    } else {
      setSearchQuery(value);
      localStorage.setItem("searchQuery", value);
    }
  };
 
  const handleSearchbox = () => {
    const basePath = location.pathname
      .split("/")
      .filter((data) => !data.includes("searchtext") && !data.includes("page"))
      .join("/");
    navigate(`${basePath}/searchtext=${searchQuery}`);
  };
 
  const resetSearchbox = () => {
    const urlArray = location.pathname
      .split("/")
      .filter(
        (item) =>
          !item.includes("searchtext=") &&
          !item.includes("page=") &&
          !item.includes("title=")
      );
    const url = urlArray.join("/");
    navigate(url.startsWith("/") ? url : `/${url}`);
    if (searchref.current.value) searchref.current.value = "";
    setSearchQuery("");
    localStorage.setItem("searchQuery", "");
  };
 
  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery");
    if (savedQuery) setSearchQuery(savedQuery);
  }, []);
 
  useEffect(() => {
    if (!location.pathname.includes("searchtext")) {
      setSearchQuery("");
    }
  }, [location.pathname]);
 
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
 
  return (
    <div className="intsearchcontainer">
      {!isMobile && (
        <Row className="filtersearchrow">
          <Col xs={12} lg={6} md={12} className="left-column">
            <Row className="leftrowInternalsearch w-100">
              {/* Filter icon */}
              <Col xs={2} lg={1} className="filtericoncol">
                <Filter
                  className="icon-stroke"
                  strokeWidth={1}
                  onClick={handleShow}
                />
              </Col>
 
              {/* Reset button */}
              <Col xs={4} lg={3} className="intbuttoncol" >
                <Button
                  variant="outline-secondary"
                  className="btn"
                  onClick={resetFilters}
                >
                  {"Reset Filter"}
                </Button>
              </Col>
 
              {/* Search bar - takes full row on small screens */}
              <Col xs={12} lg={8} className="inputsearchcol">
                {!location.pathname.includes("reclaimed-relics") && (
                  <InputGroup>
                    <input
                      type="text"
                      className="form-control internal-search"
                      value={searchQuery}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search"
                      ref={searchref}
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      style={{ backgroundColor: "#F7C113" }}
                    >
                      <BsSearch />
                    </Button>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={resetSearchbox}
                      style={{ backgroundColor: "#F7C113" }}
                    >
                      Reset
                    </Button>
                  </InputGroup>
                )}
              </Col>
            </Row>
          </Col>
 
          {/* Row 2: Results info and toggle (toggle hidden on mobile) */}
          <Col xs={12} lg={6} md={12} className="right-column">
            <Row className="rightrowInternalsearch w-100">
              {/* Toggle only for large screens */}
 
              <Col lg={3} md={5} className="list-grid-toggle-col">
                <span style={{ color: "#343a40" }}>Show as: </span>
                <FaThLarge
                  onClick={() => setIsGridView(true)}
                  title="Grid View"
                  style={{
                    fontSize: "22px",
                    color: "#343a40",
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    padding: "4px",
                    cursor: "pointer",
                    backgroundColor: isGridView ? "#F7C113" : "transparent",
                  }}
                />
                <FaList
                  onClick={() => setIsGridView(false)}
                  title="List View"
                  style={{
                    fontSize: "22px",
                    color: "#343a40",
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    padding: "4px",
                    cursor: "pointer",
                    backgroundColor: !isGridView ? "#F7C113" : "transparent",
                  }}
                />
              </Col>
 
              <Col xs={6} lg={4} md={3} className="perpageitemcol">
                <span style={{ color: "#495057" }}>
                  {t("Showings")} {fromItem} - {toItem}
                </span>
              </Col>
 
              <Col xs={6} lg={4} md={3} className="totlaitemcol">
                <span style={{ color: "#495057" }}>
                  {t("Results of")} {total_items}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
 
      {isMobile && (
        <Row>
          <Col>
            <Row className="mt-2">
              <Col xs={1} className="mobile-col filter-icon-col">
                <Filter
                  className="icon-stroke"
                  strokeWidth={1}
                  size={40}
                  onClick={handleShow}
                />
              </Col>
 
              <Col xs={3} className="mobile-col reset-btn-col" style={{ borderRadius:"6px",}}>
                <Button
                  variant="outline-secondary"
                  className="btn w-100"
                  style={{ height: "40px" }}
                  onClick={resetFilters}
                  size="sm"
                >
                  {t("Reset Filter")}
                </Button>
              </Col>
 
              <Col
                xs={4}
                className="mobile-col showing-text-col"
                style={{ marginLeft: "0.25rem", borderRadius:"6px",}}
              >
                <span className="info-text">
                  {t("Showings")} {fromItem} - {toItem}
                </span>
              </Col>
 
              <Col
                xs={4}
                className="mobile-col result-text-col"
                style={{
                  marginLeft: "5px",
                  borderRadius: "10px",
                  width: "31%",
                }}
              >
                <span className="info-text">
                  {t("Results of")} {total_items}
                </span>
              </Col>
            </Row>
 
            <Row className="leftrowInternalsearch w-100">
              <Col style={{marginRight:"2%"}}>
                {!location.pathname.includes("reclaimed-relics") && (
                  <InputGroup style={{marginTop:"5px",width:"106%"}}>
                    <input
                      type="text"
                      className="form-control internal-search"
                      value={searchQuery}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search"
                      ref={searchref}
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      style={{ backgroundColor: "#F7C113" }}
                    >
                      <BsSearch />
                    </Button>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={resetSearchbox}
                      style={{ backgroundColor: "#F7C113" }}
                    >
                      Reset
                    </Button>
                  </InputGroup>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}
 
      <Offcanvas
        className="internalFilterOffcanvas"
        show={show}
        onHide={handleClose}
        backdrop
        scroll
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Row>
              <Col>
                <h3>Filters</h3>
              </Col>
            </Row>
          </Offcanvas.Title>
        </Offcanvas.Header>
 
        <Offcanvas.Body className="filter-offcanvas-body">
          <Row className="mb-3 align-items-center">
            <Col xs={8}>
              <FormControl
                type="text"
                placeholder="Search by keyword"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Col>
            <Col xs={4}>
              <Button variant="primary" className="w-100">
                Apply
              </Button>
            </Col>
          </Row>
 
          <div className="filters-scroll-container">
            {[
              { data: filterSearchdata, name: filterName1 },
              { data: filterSearchdata2, name: filterName2 },
              { data: filterSearchdata3, name: filterName3 },
              { data: filterSearchdata4, name: filterName4 },
              { data: filterSearchdata5, name: filterName5 },
              { data: filterSearchdata6, name: filterName6 },
              { data: filterSearchdata7, name: filterName7 },
            ].map(
              (filterGroup, i) =>
                filterGroup.data &&
                filterGroup.data.length > 0 && (
                  <div key={i} className="filter-group-container">
                    <div className="filter-title-wrapper">
                      <h6 className="filter-title">
                        {filterGroup.name || `Filter ${i + 1}`}
                      </h6>
                    </div>
                    <div className="filter-items-scrollable">
                      {filterGroup.data.map((data, index) => (
                        <div key={index} className="filter-item">
                          <label>
                            <input
                              type="checkbox"
                              id={`filter-${i}-${index}`}
                              value={data.values.value}
                              checked={checkedItems[data.values.value] || false}
                              onChange={(e) =>
                                handleDctypevalue(
                                  data.url.split("?")[1],
                                  e,
                                  data.url,
                                  data.values.value
                                )
                              }
                            />{" "}
                            {data.values.value} ({data.values.count})
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
 
export default InternalSearchCard;
 