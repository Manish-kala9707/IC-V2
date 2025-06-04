import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Pagination2 = ({ totalPages }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  // Function to extract the page number from the URL
  const getPageFromURL = () => {
    const url = location.pathname;
    const match = url.match(/page=(\d+)/); 
    return match ? parseInt(match[1], 10) : 0; 
  };

  const [currentPage, setCurrentPage] = useState(getPageFromURL());



  const handlePageChange = (data) => {
    const selectedPage = data.selected + 1; 
    let newUrl;
    if (!location.pathname.includes("page=")) {
     
      newUrl = `${location.pathname}/page=${selectedPage}`;
    } else {
 
      newUrl = location.pathname.replace(/page=\d+/, `page=${selectedPage}`);
    }
    navigate(newUrl); 
  };

 
  useEffect(() => {
    const url = location.pathname;
    const match = url.match(/page=(\d+)/); 
    const data= match ? parseInt(match[1], 10) : 0; 
  
    setCurrentPage(data);
  }, [location.pathname]); 


  useEffect(() => {
    const updateDimensions = () => setWidth(window.innerWidth);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  const getPageDisplaySettings = () => {
    if (width < 576) {
      return { marginPagesDisplayed: 0, pageRangeDisplayed: 6 };
    } else if (width < 768) {
      return { marginPagesDisplayed: 2, pageRangeDisplayed: 6 };
    } else if (width < 992) {
      return { marginPagesDisplayed: 4, pageRangeDisplayed: 6 };
    } else {
      return { marginPagesDisplayed: 6, pageRangeDisplayed: 6 };
    }
  };

  const { marginPagesDisplayed, pageRangeDisplayed } = getPageDisplaySettings();

  return (
    <ReactPaginate
      className="pagination justify-content-center mt-3"
      nextLabel=" "
      previousLabel=" "
      previousClassName="prev"
      nextClassName="next"
      activeClassName="active"
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={totalPages}
      onPageChange={handlePageChange}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      initialPage={currentPage==0 || currentPage==null?(currentPage):(currentPage-1)} 
      disableInitialCallback={true}
      renderOnZeroPageCount={null}
      hrefAllControls={true}
      breakClassName="page-item"
      forcePage={currentPage==0 || currentPage==null || currentPage==1?(currentPage):(currentPage-1)} 
      breakLinkClassName="page-link"
    />
  );
};

export default Pagination2;
