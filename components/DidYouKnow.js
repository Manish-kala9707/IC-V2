import React, { useState, useEffect, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import SwrilDivider from './SwrilDivider';
//import { Apimode } from "./TopNavbar";
import useData from "../App"
import { useLocation, useNavigate } from "react-router-dom";
const DidYouKnow = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const [api, setApi] = useState()
  const [ apimode, setApimode ] = useState(true)
  const { t } = useTranslation();
  //const [apidata, setApidata] = useState();

  const [data, setData] = useState([]);
  const [todayContent, setTodayContent] = useState(null);
  const [displaydata, setDisplaydata] = useState([]);

  const getCurrentMonthName = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthIndex = new Date().getMonth();
    return monthNames[currentMonthIndex];
  };

  // const [showModal, setShowModal] = useState(false);
  // const [modalTitle, setModalTitle] = useState('');
  // const [modalContent, setModalContent] = useState('');
  // const [modalImg, setModalImg] = useState('');

  // const openModal = (title, content, dkyimages) => {
  //   setModalTitle(title);
  //   setModalContent(content);
  //   setModalImg(dkyimages);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setModalTitle('');
  //   setModalContent('');
  // };
      
   useEffect(() => {
       const array=location.pathname.split("/").filter((data)=>{
            return  data ==="hi"
       })
       console.log("dyk",array)
    if (array.length>0) {
      setApi(`https://apitesting.nvli.in/hi/rest-v2/dyk-date-wise`);
    } else {
      setApi(`https://apitesting.nvli.in/rest-v2/dyk-date-wise`);
    }

   }, [location.pathname]);
  // useEffect(() => {

  //   // Update apidata based on apimode
  //   setApi(apimode ? ("https://indianculture.gov.in/rest-v1/dyk-date-wise") : ("https://indianculture.gov.in/hi/rest-v1/dyk-date-wise"));
  // }, [apimode])


  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      setData(jsonData.search_results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [api]);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString(apimode ? ("en-GB") : ("hi-IN"), {
      day: "2-digit",
      month: apimode ? ("short") : ("long"),
      year: "numeric",
    });
    console.log(`current date ${currentDate}`)
    const formattedCurrentDate = currentDate
      .split(" ")
      .map((part, index) => (index === 1 ? part : part.toUpperCase()))
      .join("-");
    console.log(`foramted date ${formattedCurrentDate}`)

    const todayContent =data &&  data.find((item) => item.field_date_dyk_1 === formattedCurrentDate

    );
    // console.log(todayContent)
    // const currentMonthData = data.filter(
    //   (item) => item.field_date_dyk === getCurrentMonthName() && item.field_date_dyk_2 === "2024"
    // );
    // // console.log(currentMonthData)
    // if (currentMonthData.length > 0) {
    //   setDisplaydata(currentMonthData);
    //   setTodayContent(currentMonthData[0]);
    // }
    setTodayContent(todayContent);
  }, [data, apimode]);

  // const handleMonthClick = (clickedMonth) => {
  //   const filteredData = data.filter((item) => item.field_date_dyk === clickedMonth && item.field_date_dyk_2 === "2023");
  //   setDisplaydata(filteredData);
  //  // console.log(displaydata);
  // };

  const didyouknow = () => {
    navigate('/dyk-date-wise');
  };

  return (
    <>
      <Container className='didyouknowheader' style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <Row>
          <Col>
            <h1>{t("did you know")}</h1>
            <SwrilDivider />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          {todayContent ? (
            <>
              <Col id='did'>
                <h3>{todayContent.field_date_dyk_1}</h3>
                <h2>{todayContent.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: todayContent.field_did_you_know_text }} />
                <button className="didyouknowbtn" onClick={didyouknow}><span>{t("Read more")} </span></button>
              </Col>
              <Col xs lg="4" className='justify-content-center'>
                <div className="didyouimg">
                  <img src={`http://icvtesting.nvli.in${todayContent.field_did_you_know_image}`} alt={todayContent.title} className="storiescard__image" />
                </div>
              </Col>
            </>
          ) : (
            <p>No content available for today.</p>
          )}
        </Row>
      </Container>

      <Container fluid style={{ marginTop: '60px' }}>
        <hr />
      </Container>
    </>
  );
}

export default DidYouKnow;
