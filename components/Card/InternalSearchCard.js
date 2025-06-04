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
  const [searchQuery, setSearchQuery] = useState(null);
  const [keyWordQuery, setKeyWordQuery] = useState(null);
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
  };

  console.log("searchQuery", searchQuery);
  console.log("searchQuery", keyWordQuery);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const updatedCheckedItems = {};
    [
      filterSearchdata,
      filterSearchdata2,
      filterSearchdata3,
      filterSearchdata4,
      filterSearchdata5,
      filterSearchdata6,
    ]
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

    console.log("value in filter", value);
    const updatedCheckedItems = {
      ...checkedItems,
      [value]: isChecked,
    };
    setCheckedItems(updatedCheckedItems);
    const newSelectedTypes = isChecked
      ? value
      : value &&
        value
          .split("&")
          .filter((item) => item !== clickedFilter.replace(" ", "%20"))
          .join("&");

    setSelectedTypes(newSelectedTypes);

    if (!newSelectedTypes) {
      const newPathname = `/${category}`;
      navigate(newPathname.replaceAll("%0A", "_new_line"));
    } else {
      const langPrefix = location.pathname.includes("lang=hi")
        ? "/lang=hi"
        : "";
      const newPathname = `${langPrefix}/${category}/type=${newSelectedTypes}`;
      navigate(newPathname.replaceAll("%0A", "_new_line"));
    }
  };

  const resetFilters = () => {
    const urlArray = location.pathname
      .split("/")
      .filter((item) => !item.includes("type"));
    const url = urlArray.join("/");
    navigate(url.startsWith("/") ? url : `/${url}`);
  };

  const handleSearchDown = (event) => {
    if (event.key === "Enter") handleSearchbox();
  };
  const handleKeywordDown = (event) => {
    if (event.key === "Enter") handleKeyFieldBox();
  };
  const handleKeywordChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split("");
    if (words.length > 256) {
      alert("Max word count exceeded.");
      const limitedWords = words.slice(0, 256).join("");
      setKeyWordQuery(limitedWords);
      localStorage.setItem("keyQuery", limitedWords);
    } else {
      setKeyWordQuery(value);
      localStorage.setItem("keyQuery", value);
    }
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

  //internalsearch box

  const handleSearchbox = () => {
    const basePath = location.pathname
      .split("/")
      .filter((data) => !data.includes("searchtext") && !data.includes("page"))
      .join("/");
    navigate(`${basePath}/searchtext=${searchQuery}`);
  };

  // keywordserch
  const handleKeyFieldBox = () => {
    const basePath = location.pathname
      .split("/")
      .filter(
        (data) => !data.includes("searchkeyword") && !data.includes("page")
      )
      .join("/");
    navigate(`${basePath}/searchkeyword=${keyWordQuery}`);
  };

  //reseting searchbox

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

  // resetting keybox
  const resetKeySearchbox = () => {
    const urlArray = location.pathname
      .split("/")
      .filter(
        (item) =>
          !item.includes("searchkeyword=") &&
          !item.includes("page=") &&
          !item.includes("title=")
      );

    const url = urlArray.join("/");
    navigate(url.startsWith("/") ? url : `/${url}`);
    if (searchref.current.value) searchref.current.value = "";
    setKeyWordQuery("");
    localStorage.setItem("keyQuery", "");
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem("searchQuery");
    if (savedQuery) setSearchQuery(savedQuery);
  }, []);
  useEffect(() => {
    const savedQuery = localStorage.getItem("keyQuery");
    if (savedQuery) setKeyWordQuery(savedQuery);
  }, []);

  useEffect(() => {
    if (!location.pathname.includes("searchtext")) {
      setSearchQuery("");
    }
  }, [location.pathname]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="intsearchcontainer">
      {/* for large screen */}
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
              <Col xs={4} lg={3} className="intbuttoncol">
                <Button
                  variant="outline-secondary"
                  style={{
                    backgroundColor: location.pathname.includes("type=")
                      ? " #F7C113"
                      : "transparent",
                  }}
                  onClick={resetFilters}
                >
                  {t("Reset Filter")}
                </Button>
              </Col>

              {/* Search bar - takes full row on small screens */}
              <Col xs={12} lg={8} className="inputsearchcol">
                {!location.pathname.includes("globalsearch") && (
                  <InputGroup>
                    <input
                      type="text"
                      className="form-control internal-search"
                      value={searchQuery}
                      onChange={handleInputChange}
                      onKeyDown={handleSearchDown}
                      placeholder={t("Search")}
                      ref={searchref}
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      style={{ backgroundColor: "#F7C113" }}
                    >
                      <BsSearch onClick={handleSearchbox} />
                    </Button>
                    <Button
                      variant="outline-secondary"
                      ref={searchref}
                      id="button-addon2"
                      onClick={resetSearchbox}
                      style={{ backgroundColor: "#F7C113" }}
                    >
                      {t("Reset")}
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

              {!location.pathname.includes("globalsearch") && (
                <Col lg={3} md={5} className="list-grid-toggle-col">
                  <span style={{ color: "#343a40" }}>{t("Show as:")} </span>
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
              )}

              <Col xs={6} lg={4} md={3} className="perpageitemcol">
                {total_items === 0 ? (
                  <div className="perpageitemcol-shimmer"></div>
                ) : (
                  <span style={{ color: "#495057" }}>
                    {t("Showing")} {fromItem} - {toItem}
                  </span>
                )}
              </Col>

              <Col xs={6} lg={4} md={3} className="totlaitemcol">
                {total_items === 0 ? (
                  <div className="perpageitemcol-shimmer"></div>
                ) : (
                  <span style={{ color: "#495057" }}>
                    {t("Results of")} {total_items}
                  </span>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}

      {/* for large screen end*/}

      {/* for Small screen */}
      {isMobile && (
        <Row>
          <Col>
            <Row className="mt-2">
              <Col xs={1} className="mobile-col filter-icon-col">
                <Filter
                  className="icon-stroke"
                  strokeWidth={1}
                  size={35}
                  onClick={handleShow}
                />
              </Col>

              <Col xs={3} className="mobile-col reset-btn-col">
                <Button
                  variant="outline-secondary"
                  className="btn w-100"
                  style={{ height: "40px" }}
                  onClick={resetFilters}
                  size="sm"
                >
                  {t("Reset")}
                </Button>
              </Col>

              <Col xs={4} className="mobile-col showing-text-col">
                <span className="info-text">
                  {t("Showing")} {fromItem} - {toItem}
                </span>
              </Col>

              <Col xs={4} className="mobile-col result-text-col">
                <span className="info-text">
                  {t("Results of")} {total_items}
                </span>
              </Col>
            </Row>

            <Row>
              <Col className="mobile-col-intsearch">
                {!location.pathname.includes("reclaimed-relics") &&
                  !location.pathname.includes("globalsearch") && (
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control internal-search"
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleSearchDown}
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
                        {t("Reset")}
                      </Button>
                    </InputGroup>
                  )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      {/* for Small screen end */}

      {/* offcanvs part */}
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
                <h3>{t("Filters")}</h3>
              </Col>
            </Row>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="filter-offcanvas-body">
          <Row className="mb-3 align-items-center">
            <Col xs={8} lg={8} className="inputkeysearchcol">
              {!location.pathname.includes("globalsearch") && (
                <InputGroup>
                  <input
                    type="text"
                    className="form-control internal-search"
                    value={keyWordQuery}
                    onChange={handleKeywordChange}
                    onKeyDown={handleKeywordDown}
                    placeholder={t("Search")}
                    ref={searchref}
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    style={{ backgroundColor: "#F7C113" }}
                  >
                    <BsSearch onClick={handleKeyFieldBox} />
                  </Button>
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={resetKeySearchbox}
                    style={{ backgroundColor: "#F7C113" }}
                  >
                    {t("Reset")}
                  </Button>
                </InputGroup>
              )}
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
