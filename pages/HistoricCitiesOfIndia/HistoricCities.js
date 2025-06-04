import React, { useState, useEffect,lazy,Suspense } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import HistoryCardDetails from '../../components/Card/HistoryCardDetails'
import HistoricCitiesBanner from "../../image/hcbanner-1.png"
import state1 from "../../image/state1.png"
import state2 from "../../image/state2.png"
import state3 from "../../image/state4.png"
import state4 from "../../image/state5.png"
import StateMap from './StatesMap'
import ShimmersUiCard from "../../components/Card/ShimmersUiCard"
const Card = lazy(() => delayForDemo(import('../../components/Card/Card')));
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const HistoricCities = () => {
  const location = useLocation()
  const [fetchedData, setFetchedData] = useState()
  const [showOnlyCard, setshowOnlyCard] = useState()
  const [totalPage, setTotalPage] = useState()
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState("");
  const [title, setTitle] = useState("");
  const [nid, setNid] = useState("");
  const [api, setApi] = useState("");
  const [count, setCount] = useState(0);

  const urlarray = location?.pathname?.split("/")
  const isHindi = urlarray.filter((element) => (element === "hi"))
  console.log("+++++", isHindi)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlarray = location?.pathname?.split("/")
        const isHindi = urlarray.filter((element) => (element === "hi"))
        // console.log("isHindi",isHindi)
        const response = await fetch(isHindi.length > 0 ? ('https://oldicp.nvli.in/hi/rest-v1/historic-cities') : 'https://oldicp.nvli.in/rest-v1/historic-cities');
        const historicData = await response.json();
        setFetchedData(historicData.rows);
        setTotalPage(historicData.pager.total_items)
        const array = [...fetchedData]
        const count = fetchedData.length - 4
        const HomeFetched = array && array.splice(0, 4)

      } catch (error) {
        console.error("Error fetching unescodata:", error);
      }
    };

    fetchData();
  }, [location.pathname])


  useEffect(() => {
    const urlarray = location?.pathname?.split("/")
    setData(urlarray)
  }, [location.pathname])

  useEffect(() => {
    data.map((x) => {
      if (x.includes("page")) {

        setPageNumber(+x.split("=")[1])
      }
      else if (x.includes("title")) {
        setTitle(x.split("=")[1])
      }
      else if (x.includes("nid")) {
        setNid(+x.split("=")[1])
      }
      // else if(x.includes("type")){
      //   setDctypevalue(+x.split("=")[1])
      // }
    })
  }, [data, location.pathname])
  console.log(nid)
  console.log(title)

  console.log("HistoricCities+++++", fetchedData)

  const handleCard = () => {
    setshowOnlyCard(true)
  }
  return (
    <Container fluid >
      <Row className="p-4 bg-light">
        {!showOnlyCard && !title && <Image src={HistoricCitiesBanner} fluid />}
      </Row>
      {location.pathname.includes("title") ? (
        fetchedData && fetchedData.length > 0 && fetchedData
          .filter((x) => x.nid == nid)
          .map((x) => {
            return <HistoryCardDetails key={x.nid} detailData={x} />
          })
      ) : (
        <>
          {showOnlyCard ? (<div className="page-content">
            <Suspense
              fallback={
                <div>
                  <ShimmersUiCard />
                </div>
              }
            >
              
                <Card page="/" search_results={fetchedData}  className="page-content" /> 
            </Suspense>
          </div>) : (
            <>
              <Row className="bg-light justify-content-center">

                <Col fluid xs={12} sm={6} lg={3} className="pt-4 pb-4 justify-content-center">
                  <Link to="title=NorthDelhi/nid=2795766">
                  <h2 style={{position:"absolute",top:"10",left:"20",color:"whitesmoke"}}><b>North-Delhi</b></h2>
                    <Image fluid  src={state1} className="w-100"></Image>
                  </Link>
                </Col>

                <Col xs={12} sm={6} lg={3} className="pt-4 pb-4 justify-content-center">
                  <Link to="title=Varanasi/nid=2790202">
                    <h2 style={{position:"absolute",top:"10",left:"20",color:"whitesmoke"}}><b>Varanasi</b></h2>
                    <Image fluid src={state2} className="w-100"></Image>
                  </Link>
                </Col>
                <Col  xs={12} sm={6}  lg={3}className="pt-4 pb-4 justify-content-center">
                  <Link to="title=Thanjavur/nid=2790169">
                  <h2 style={{position:"absolute",top:"10",left:"20",color:"whitesmoke"}}><b>Thanjavur</b></h2>
                    <Image fluid src={state3} className="w-100"></Image>
                  </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} className="pt-4 pb-4 justify-content-center">
                  <Link to="title=Patna/nid=2790317">
                  <h2 style={{position:"absolute",top:"10",left:"20",color:"whitesmoke"}}><b>Patna</b></h2>
                    <Image fluid src={state4} className="w-100"></Image>
                  </Link>
                </Col>
                <Col fluid className='justify-content-center align-item-centre'><button style={{alignItems:"center"}} className="p-1 catabtn"  onClick={handleCard}>
                         <span >
                           View All
                        </span>
                        </button>
                </Col>
              </Row>
              
            </>
          )}
        </>
      )}
    </Container>
  )
}

export default HistoricCities