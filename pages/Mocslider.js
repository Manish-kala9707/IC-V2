import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Button, Col, Container, Row } from 'react-bootstrap'; 
import React, { useState, useEffect } from "react"; 
const Mocslider = () => { 
  let [fetchedData, updateFetchedData] = useState([]);  
  const [detailData, setDetailData] = useState(null);  
  let api = `https://wzcc.nvli.in/rest/moc-organisations?search_api_fulltext=${searchQuery}&page=${pageNumber}&field_dc_type=${dcTypevalue.join(',')}`;

  useEffect(() => {
    const fetchData = async () => {
      try { 
       const response = await fetch(api);  
        const jsonData = await response.json(); 
        setTotalPages(jsonData.pager.total_pages); 
        setTotalRecord(jsonData.pager.total_items); 
        searchdData(jsonData.rows.facets[0]);  
        updateFetchedData(jsonData.rows); 
        if(jsonData.rows.search_results !== null) 
        {      
        setFullsearchdData(jsonData.rows.search_results); 
        console.log(jsonData.rows.search_results); 
        } 
             
        else
        {<p>No results found.</p>}
         
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[] );

   
  return (
    <div className="App">
  {detailData !== null ? ' ' :
      <Container className='moc-header'>
      <Row>
          <Col>
              <h1>MoC Organisations</h1>
              <SwrilDivider />
          </Col>
      </Row>
  </Container>}
        {detailData !== null ? <MocDetails detailData={detailData}  setDetailData={setDetailData} />
       : <Container><div class="row"><CardMocOrg page="/" search_results={search_results} setDetailData={setDetailData}   /></div></Container>}                
    </div>
  );
};
export default Mocslider;