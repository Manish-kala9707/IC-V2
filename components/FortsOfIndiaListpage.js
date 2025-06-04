import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
// css files bootstrap and external
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/FortsOfIndiaListpage.css";
// import img file

import { Filter, Search } from 'react-feather';
// import Header from '../images/header.PNG';
import Divider from "../image/SwirlDivider.png";
import Pagination from "react-bootstrap/Pagination";

function FortsOfIndiaListpage({ name, ...props }) {
  const [data, setData] = useState([]);
  //   const [totalPages, setTotalPages] = useState(0);

  const [page, setpage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://indianculture.gov.in/rest-v1/forts-of-india/discovering-the-forts-of-india?page=${page}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const totalPage = data?.pager?.total_pages;
  console.log(totalPage);

  // constructor for filter side panel start
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // filter side panel end

  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const fortsofindiaresultpage = (e) => {
    window.open("/fortsofindiaresultpage", "_parent");
  };
  return (
    <div >
      <Container className="archive-header">
        <Row>
          <Col>
            <h1>Understanding Forts</h1>
            <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
          </Col>
        </Row>
      </Container>
      <div className="section" style={{backgroundColor:"whitesmoke"}}>
        {/* option 1  */}
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col className="equal">
              {/* Filter icon */}
              <a href="/#" onClick={handleShow}>
               <Filter size={40} className="icon-stroke" strokeWidth={1} />
              </a>

              {/* Search bar start */}
              <div className="search-box">
                <button className="btn-search">
                 <Search size={30} className="icon-stroke" strokeWidth={1} />
                </button>
                <input type="text" className="input-search" placeholder="Type to Search..." />
              </div>

              {/* Search bar end */}
            </Col>

            <Col className="leftplace">
              <p className="showing-result">Showing 1 -16 results of {data?.pager?.total_items}</p>
            </Col>
          </Row>
          <Row>
            <Col className="centerplace">
              {/* Filter Catagory btns  */}
              <p className="centerplace">
                <a href="/#" className="underline">
                  All
                </a>
              </p>
              <p className="centerplace">
                <a href="/#" className="underline">
                  A - Z
                </a>
              </p>
              <p className="centerplace">
                <a href="/#" className="underline">
                  Time
                </a>
              </p>
            </Col>
          </Row>

          {/* Filter Side panel start */}
          <Offcanvas show={show} onHide={handleClose} backdrop="static" className="sidepanel">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ textAlign: "center" }}>Archives Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Form className="d-flex" style={{ margin: "10px" }}>
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Offcanvas.Body>
              <h6>Organisation</h6>
              <hr />

              <ul>
                <li>Item 1</li>
                <li>Item2</li>
                <li>Item3</li>
              </ul>
              <h6>Types 2A</h6>
              <hr />

              <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
              </ul>
              <h6>Types 2B</h6>
              <hr />
              <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
              </ul>
              <hr />
              <Col className="filbtn">
                <Button variant="secondary">Cancel</Button> <Button variant="success">Apply</Button>{" "}
              </Col>
            </Offcanvas.Body>
          </Offcanvas>
          {/* FIlter Side panel end */}
        </Container>

        {/* Archive img thumbnails start */}
        <main className="page-content">
          {data.rows?.search_results.map((item, index) => {
            return (
              <div className="listcard" key={index}>
                <div className="content">
                  <h2 className="title ">{item.title}</h2>
                  <button className="listbtn" onClick={(e) => fortsofindiaresultpage(e)}>
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </main>
        {/* Archive img thumbnails end */}

        <Container>
          <Row>
            {/* Pagination start here */}
            <Col className="paginattion-place">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>

                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item active>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
            {/* Pagination end here */}
          </Row>
          <Row>
            <Col className="archive-end">
              <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default FortsOfIndiaListpage;
