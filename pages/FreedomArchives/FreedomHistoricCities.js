import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import CardDetails from "../../components/Card/ImagesDetails";
import { Filter, Search } from 'react-feather';
import Divider from "../../image/SwirlDivider.png"; 
import { useContext } from "react";
import { ContextData } from "../../pages/Store/FetchApiData"
import Pagination2 from "../../components/Pagination/Pagination2";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
const Card = lazy(() => delayForDemo(import('../../components/Card/Card')));
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const FreedomHistoricCities = () => {
  const { fetchedData, title, nid, totalPages, total_items, current_page, items_per_page, filterSearchdata } = useContext(ContextData)
  console.log("filterSearchdata++++",fetchedData)
const location=useLocation()
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [pageNumber, updatePageNumber] = useState([0]);
  const [detailData, setDetailData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dcTypevalue, setDctypevalue] = useState([]);
  const [filterArray,setFilterArray]=useState([])
  const [filterArray2,setFilterArray2]=useState([])
  // let { info, search_results } = fetchedData;
  const [pagestate, setpageState] = useState()
  const [id, setId] = useState()
  const [selectedFilters, setSelectedFilters] = useState([]);
  const start = current_page * items_per_page + 1;
  const end = Math.min((current_page + 1) * items_per_page, total_items);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (filterSearchdata) {
        const newArray = filterSearchdata.flatMap(outerData =>
            outerData.flatMap(innerData =>
                innerData.field_dc_type_1 || []
            )
        );
        const newArray2 = filterSearchdata.flatMap(outerData =>
          outerData.flatMap(innerData =>
              innerData.field_parent_library_name || []
          )
      );
        setFilterArray(prevArray => [...prevArray, ...newArray]);
        setFilterArray2(prevArray => [...prevArray, ...newArray2]);
    }
}, [filterSearchdata])


  const handleFilterCheckboxChange = (option) => {

    if (selectedFilters && selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter(item => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
    setDctypevalue(option)
  };
 
  const resetFilters = () => {
    setDctypevalue(""); // Or the default value you want to reset
    const urlArray = location.pathname.split("/").filter((item) => {
      return !item.includes("type");
    });
    const url = urlArray.join("/");
    navigate(url.startsWith("/") ? url : `/${url}`);
  };
  

  const handleApplyFilters = () => {
    handleClose();
  };


  // Filter the items based on the search input


  const handleDctypevalue = (value) => {
    if (dcTypevalue && dcTypevalue.includes(value)) {
      setDctypevalue(dcTypevalue.filter(values => values !== value || dcTypevalue.value === 0));
    } else {
      setDctypevalue([...dcTypevalue, value]);
    }
    if(location.pathname && location.pathname.includes("type")){
       const ulrArray= location.pathname.split("/").filter((item)=>{
            return !item.includes("type")
        }) 

        const url=ulrArray.join("")
        navigate(`/${url}/type=${value}`)
    }
    else{
      navigate(`${location.pathname}/type=${value}`)
    }
    
  };

const handleSearchbox=()=>{

  if(!location.pathname.includes("searchtext")){
    navigate(`${location.pathname}/searchtext=${searchQuery}`)
  }
  else if(location.pathname.includes("searchtext")){
      const array= location.pathname.split("/").filter((data)=>{
        return !data.includes("searchtext")
      })
      const url=array.join("/")
      navigate(`${url}/searchtext=${searchQuery}`)
  }
}

  const [searchText, setSearchText] = useState(''); 
  return (
    <div className="App">

      {location && !location?.pathname?.includes("title") && <Container  className="archive-header pt-5">
        <Row>
          <Col>
            <h1>Historic Cities Freedom Movement  </h1>
            <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
          </Col>
        </Row>
      </Container>}

      {location && !location?.pathname?.includes("title") &&
        <Container>
          <Row>
            <Col md={6} xs={12} className="equal">
              
            </Col>

            <Col md={6} xs={12} className="leftplace"> 
              <p className="showing-result"> Showing {start} - {end} results of {total_items}</p>
            </Col>
          </Row>
     

        </Container>
      }

<Offcanvas show={show} onHide={handleClose} backdrop="true"  scroll="false">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h4 className="text-center">Filter</h4></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        {filterArray && filterArray.length > 0 && (
                <>
                  <h4>Type</h4>
                  <div className="filterscroll">
                    <ul>
                      {filterArray.map((facet, index) => (
                        <li key={index}>
                          <label key={facet.values.value}>
                            <input
                              type="checkbox"
                              id={facet.values.value}
                              value={facet.values.value}
                              checked={dcTypevalue.includes(facet.values.value)}
                              onChange={() => handleDctypevalue(facet.values.value)}
                            />
                            {facet.values.value} ({facet.values.count})
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
        {filterArray2 && filterArray2.length > 0 && (
            <><h4>Library Name</h4><div className="filterscroll"><ul>
              {filterArray2 && filterArray2.map((facet, index) => (
                <li key={index}>
                  <label key={facet.values.value}>
                    <input
                      type="checkbox"
                      id={facet.values.value}
                      value={facet.values.value}
                      checked={dcTypevalue.includes(facet.values.value)}
                      onChange={() => handleDctypevalue(facet.values.value)} />
                    {facet.values.value} ({facet.values.count})
                  </label>
                </li>
              )
              )}
            </ul>
            </div></>
           )}
           <button onClick={resetFilters}>Reset</button>
        </Offcanvas.Body>

      </Offcanvas>
      {location && location?.pathname?.includes("title") ? (
        fetchedData && fetchedData.length > 0 && fetchedData
          .filter((x) => x.title && x.title.replace(/\s/g, "") === title && title.replace(/\s/g, "") && x.nid == nid)
          .map((x) => {
            return <CardDetails key={x.nid} detailData={x} setDetailData={setDetailData} />;
          })
      ) : (
        <Container ><Row>
          <div  className="page-content"> 
            <Suspense
              fallback={
                <div>
                  <ShimmersUiCard />
                </div>
              }
            > <Card page="/" search_results={fetchedData} setDetailData={setDetailData} className="page-content" /> 
            </Suspense>

          </div></Row>
        </Container>
      )}
      {location && !location.pathname.includes("title") && <Pagination2 totalPages={totalPages} baseUrl="/freedom-struggle/historic-cities" />}
    </div>
  );
};
export default FreedomHistoricCities;

