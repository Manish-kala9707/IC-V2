import React, { useState, useEffect } from "react";
import { useNavigate, useLocation,useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages,pagename }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const {a,b,c}=useParams()
  

  const handlePageChange = (data) => {
    const selectedPage = data.selected ;
    const url = `/${pagename}/${selectedPage}`;
    setCurrentPage(selectedPage);
    navigate(url);
  }

  

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    
    <ReactPaginate
      className="pagination justify-content-center my-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-primary prev"
      nextClassName="btn btn-primary next"
      activeClassName="active"
      marginPagesDisplayed={width < 576 ? 0 : 2}
      pageRangeDisplayed={width < 576 ? 0 : 2}
      pageCount={totalPages}
      onPageChange={handlePageChange}
      //forcePage={currentPage - 1}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      disableInitialCallback={true}
      renderOnZeroPageCount={null}
      hrefAllControls={true}
      
      breakClassName="page-item"
      breakLinkClassName="page-link"
      
    
     
      
     
      
    />
  );
};

export default Pagination;
