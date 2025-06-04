

import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { ContextData } from "../../../pages/Store/FetchApiData"; 

export default function Disclaimer() {
  const { t } = useTranslation();
  const location = useLocation();
  const [bodyContent, setBodyContent] = useState("");
  
  
  
   const {
      fetchedData,
      title,
      nid,
      totalPages,
      total_items,
      items_per_page,
      current_page,
      pagename,
      pageNumber,
      filterSearchdata,
      filterSearchdata2,
      error,
      response
    } = useContext(ContextData);

    useEffect(() => {
      if (Array.isArray(fetchedData) && fetchedData.length > 0) {
        const data = fetchedData[0];
        setBodyContent(data.body || "");
        
      } else {
        console.warn("Fetched data is not in expected format", fetchedData);
      }
    }, [fetchedData]);

  
  console.log("fetchData", fetchedData)

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>
        <strong>{title}</strong>
      </h2>

      <div
        className="content-body"
        dangerouslySetInnerHTML={{ __html: bodyContent }}
      />
    </Container>
  );
}
