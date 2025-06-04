import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Button, Col, Container, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react"; 
import CardMocOrg from "../components/Card/CardMocOrg";
import Pagination2 from "../components/Pagination/Pagination2";  
import MocDetails from "../components/Card/MocDetails";     
import FilterIcon from '../image/filter-13.png';
import SearchIcon from '../image/search.svg'; 
import Divider from '../image/SwirlDivider.png'; 
import { useParams } from "react-router-dom";
import { timers } from "jquery";
const MocOrganisations = () => {
 const {a,b,c}=useParams()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [pageNumber, updatePageNumber] = useState([0]); 
  let [fetchedData, updateFetchedData] = useState([]); 
  const [totalPages, setTotalPages] = useState(0); 
  const [total_items, setTotalRecord] = useState(0);
  const [detailData, setDetailData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dcTypevalue, setDctypevalue] = useState([]); 
  const [titlename,setTitleName]=useState()
  const[pagenum,setPageNumber]=useState()
  const [nidnumber,setNidNumber]=useState()
  const [fiSearchData, searchdData] = useState([]); 
  const [fullSearchData, setFullsearchdData] = useState([]);   
  const [api,setApi] =useState()
  let { info, search_results } = fetchedData;
  useEffect(() => {
    if (a && a.includes("title")) {
        const title = a.split("=")[1]
        setTitleName(title)
    }
    else if (b && b.includes("title")) {
        const title = b.split("=")[1]
        setTitleName(title)
    }
    else if (c && c.includes("title")) {
        const title = c.split("=")[1]
        setTitleName(title)
    }
   
    else {
        setTitleName(undefined)
    }
}, [a, b, c,titlename])
// for nid
useEffect(() => {
    if (a && a.includes("nid")) {
        const nid = a.split("=")[1]
        setNidNumber(nid)
    }
    else if (b && b.includes("nid")) {
        const nid = b.split("=")[1]
        setNidNumber(nid)
    }
    else if (c && c.includes("nid")) {
        const nid = c.split("=")[1]
        setNidNumber(nid)
    }
    
    else {
        setNidNumber(undefined)
    }
}, [a, b, c,nidnumber])

useEffect(() => {
  if (a && a.includes("page")) {
      const page = a.split("=")[1]
      setPageNumber(+page)
  }
  else if (b && b.includes("page")) {
      const page = b.split("=")[1]
      setPageNumber(+page)
  }
  else if (c && c.includes("page")) {
      const page = c.split("=")[1]
      setPageNumber(+page)
  }
  
  else {
      setPageNumber(undefined)
  }
}, [a, b, c,pagenum])
console.log(a)
console.log(b)
console.log(c)
console.log(titlename)
console.log(nidnumber)
  //let api = `https://indianculture.nvli.in/rest/archive1?search_api_fulltext=${searchQuery}&page=${pageNumber}&field_dc_type=${dcTypevalue}`;
 useEffect(()=>{
  let api = `https://wzcc.nvli.in/rest/moc-organisations?page=${pagenum}&field_dc_type=${dcTypevalue.join(',')}`
  setApi(api)
 },[pagenum])

  useEffect(() => {
    
    //let api = `https://wzcc.nvli.in/rest/moc-organisations?page=${pagenum}&field_dc_type=${dcTypevalue.join(',')}`;
    const fetchData = async () => {
      try { 
       const response = await fetch(api);  
        const jsonData = await response.json(); 
        setTotalPages(jsonData.pager.total_pages); 
        setTotalRecord(jsonData.pager.total_items); 
        searchdData(jsonData.rows.facets[0]);  
        updateFetchedData(jsonData.rows); 
          
        setFullsearchdData(jsonData?.rows?.search_results); 
        console.log(jsonData.rows.search_results);    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[api,pagenum] );
  console.log(fullSearchData)

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };  
  const handleDctypevalue = (value) => {
    if (dcTypevalue.includes(value)) {
      setDctypevalue(dcTypevalue.filter(values => values !== value));
    } else {
      setDctypevalue([...dcTypevalue, value]);
    }
  };
   
  return (
    <div className="App">
  {titlename ==undefined &&
      <Container className='archive-header'>
                <Row >
                    <Col>
                        <h1>Moc-Organisations</h1>
                        <img src={Divider} alt="Caption Divider" style={{ marginTop: '-17px', width: '90px', height: '15px', backgroundColor: 'transparent' }} />

                        </Col>
                </Row>
            </Container> }
            {titlename ==undefined &&
   <Container style={{ marginTop: '20px' }}>
                <Row >
                    <Col className='equal'>
                        {/* Filter icon */}
                         <div onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></div>     
                         {/* Search bar start */}
              <div className="search-box">
      <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
      <input  
        type="text" className="input-search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Type to Search..."
      />
    </div>
              {/* Search bar end */}                   
                    </Col>

                    <Col className='leftplace'>
                        <p className='showing-result'>Total Record - {total_items}</p>
                    </Col>
                </Row>
                <Row>   
                    <Col className='centerplace'>
                        {/* Filter Catagory btns  */}
                        <p className='centerplace'>
                            <a href="/#" class="underline" >All</a>
                        </p>
                        <p className='centerplace'>
                            <a href="/#" class="underline">A - Z</a>
                        </p>
                        <p className='centerplace'>
                            <a href="/#" class="underline">Time</a>
                        </p>
                    </Col> 
                </Row>
            </Container>}                        
            {titlename ?(
              fullSearchData && fullSearchData.length> 0 && fullSearchData.filter((x) => x.title.replace(/\s/g, "") === titlename.replace(/\s/g, "") && x.nid===nidnumber).map((x) => (
          <MocDetails key={x.id} detailData={x} setDetailData={setDetailData} updatePageNumber={updatePageNumber} />
        ))
      ) 
              : <Container><div class="row">
                <CardMocOrg page="/" search_results={search_results} setDetailData={setDetailData} /></div></Container>}                
            
               {titlename ==undefined && <Pagination2 totalPages={totalPages}  baseUrl="/MoCorganization"/>}
    </div>
  );
};
export default MocOrganisations