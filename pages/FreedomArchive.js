import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import CardDetails from "../components/Card/CardStoryDetails"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper'; 
import slide_image_1 from '../image/fig1.webp';
import Divider from "../image/SwirlDivider.png"; 
import { useContext } from "react";
import Glider from "react-glider"; 
import "glider-js/glider.min.css";
import { ContextData } from "../pages/Store/FetchApiData"
import Pagination2 from "../components/Pagination/Pagination2";
import ShimmersUiCard from "../components/Card/ShimmersUiCard";
const Card = lazy(() => delayForDemo(import('../components/Card/Gallerycard')));
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const FreedomArchive = () => {
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
  const [data, setData] = useState([]); 
  const [datafreedom, setDataFreedom] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await fetch(`https://apitesting.nvli.in/rest-v1/freedom-archive-home`); 
        const responsefreedom = await fetch(`https://apitesting.nvli.in/rest-v1/freedom-struggle`);  
        const data = await response.json(); 
        const datafreedom = await responsefreedom.json();  
        setData(data);   setDataFreedom(datafreedom); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data on component mount
    fetchData();
  }, []);

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

      {location && !location?.pathname?.includes("title") && <Container className="archive-header">
        <Row>
          <Col>
           
          {data.rows?.search_results 
    .map((item, idx) => (
        <div key={idx}>
           <h1 dangerouslySetInnerHTML={{ __html: item?.title }} />
           <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
            
           <p className="text-justify" dangerouslySetInnerHTML={{ __html: item?.body }} />
        </div>
    ))}

           </Col>
        </Row>
      </Container>}
 
      {location && location?.pathname?.includes("title") ? (
        fetchedData && fetchedData.length > 0 && fetchedData
          .filter((x) => x.title && x.title.replace(/\s/g, "") === title && title.replace(/\s/g, "") && x.nid == nid)
          .map((x) => {
            return <CardDetails key={x.nid} detailData={x} setDetailData={setDetailData} />;
          })
      ) : (
        <><Container><Row>
                      <div>
                          <Suspense
                              fallback={<div>
                                  <ShimmersUiCard />
                              </div>}
                          >
                              <Glider hasArrows slidesToShow={4} slidesToScroll={1} hasDots duration={1.5}>
                                  <Card page="/" search_results={fetchedData} setDetailData={setDetailData} /> </Glider>
                          </Suspense>

                      </div></Row>
                  </Container><Container className='fredom-arch-header pt-5'>
                          <Row>
                              <Col md={12} className="text-center">
                                  <h1>Freedom Struggle: Symbols & Spaces</h1>
                                   <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
           
                              </Col>
                              <Col md={12} className="text-center">
                              <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                     {datafreedom.rows?.search_results 
                .map((item, idx) => (
                    <SwiperSlide  key={idx}>
                        <Link to={`/freedom-struggle/${item.title.toLowerCase().replace(/\s/g, "-")}`}>
                        <img src={slide_image_1} />
                        <div className='swipetext' style={{ left: '220px', top: '450px' }}><p dangerouslySetInnerHTML={{ __html: item?.title }} /></div>
                    </Link>
                    </SwiperSlide>    
     ))}
                     
                </Swiper>
                              </Col>
                          </Row>
                      </Container></>
      )}
      {/* {location && !location.pathname.includes("title") && <Pagination2 totalPages={totalPages} baseUrl="/food-and-culture" />} */}
    </div>
  );
};
export default FreedomArchive;

