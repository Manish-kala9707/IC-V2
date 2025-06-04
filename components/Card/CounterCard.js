

import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FaThLarge, FaList, FaEye, FaCheckCircle } from "react-icons/fa";
import ShimmerCounter from "./ShimmerCounter";
import "./CounterCard.css";
const CounterCard = ({
  pageNumber,
  total_items,
  items_per_page,
  textSize,
  t,
  onResetFilters,
  onToggleView,
}) => {
  if (total_items === 0) return <ShimmerCounter />;
 
  const fromItem =
    pageNumber === 0 || pageNumber === 1 || pageNumber == null
      ? 1
      : (pageNumber - 1) * items_per_page + 1;
 
  const toItem =
    pageNumber === 0 || pageNumber === 1 || pageNumber == null
      ? items_per_page > total_items
        ? total_items
        : items_per_page
      : pageNumber * items_per_page > total_items
      ? total_items
      : pageNumber * items_per_page;
 
  return (
  <Col md={6} xs={12} lg={6}  >
<Row className="counterrow">
 {/* <Col className="list-grid-toggle-col">
    <span style={{ fontSize: "16px", fontWeight: "500", color: "#343a40" }}>
      Show as:{" "}
    </span>
    <FaThLarge
      onClick={() => onToggleView("grid")}
      title="Grid View"
      style={{
        fontSize: "22px",
        color: "#343a40",
        border: "1px solid #ced4da",
        borderRadius: "4px",
        padding: "4px",
        cursor: "pointer",
      }}
    />
    <FaList
      onClick={() => onToggleView("list")}
      title="List View"
      style={{
        fontSize: "22px",
        color: "#343a40",
        border: "1px solid #ced4da",
        borderRadius: "4px",
        padding: "4px",
        cursor: "pointer",
      }}
    />
     </Col> */}
     <Col className="perpageitemcol">
     <span style={{ fontSize: `${textSize}px`, color: "#495057" }}>
      {t("Showing")} {fromItem} - {toItem}
    </span>
     </Col>
     <Col className="totlaitemcol">
     <span style={{ fontSize: `${textSize}px`, color: "#495057" }}>
      {t("Results of")} {total_items}
    </span>
     </Col>
</Row>
    </Col>
  );
};
 
export default CounterCard;