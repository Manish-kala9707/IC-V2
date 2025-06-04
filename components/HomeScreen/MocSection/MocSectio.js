import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import MocDetails from "../../Card/MocDetails";
import "glider-js/glider.min.css";
import "./MOCSection.css";
import { useTranslation } from "react-i18next";

const Moc = () => {
  const [IcMoclist, setIcMoclist] = useState([]);
  const [external, setExternal] = useState([]);
  const location = useLocation();
  const { t } = useTranslation();

  const getApiPrefix = () => (location.pathname.includes("lang=hi") ? "/hi" : "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiPrefix = getApiPrefix();
        const response = await fetch(
          `https://icvtesting.nvli.in${apiPrefix}/rest-v1/moc-organisations`
        );
        const data = await response.json();
        const sortedData = data.results.sort((a, b) =>
          a?.title?.localeCompare(b?.title)
        );
        setIcMoclist(sortedData);
      } catch (error) {
        console.error("Error fetching MoC organizations:", error);
      }
    };
    fetchData();
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiPrefix = getApiPrefix();
        const response = await fetch(
          `https://icvtesting.nvli.in${apiPrefix}/rest/externalLinks`
        );
        const data = await response.json();
        const sortedData = data.results.sort((a, b) =>
          a?.title?.localeCompare(b?.title)
        );
        setExternal(sortedData);
      } catch (error) {
        console.error("Error fetching external links:", error);
      }
    };
    fetchData();
  }, [location.pathname]);

  return (
    <>
      {!location.pathname.includes("title=") ? (
        <Container className="moc-header">
          <Row>
            <Col lg={8} md={8}>
              <h4 className="Moc-title">{t("MoC Organisations")}</h4>
              <div className="moc-grid-container">
                {IcMoclist.map((item, index) => (
                  <div key={index} className="moc-card-wrapper">
                    <Link
                      to={`MoCorganization/title=${item.title.replace(/\s/g, "")}/nid=${item.nid}`}
                    >
                      <img
                        src={`https://icvtesting.nvli.in${item?.field_moc_organization_image}`}
                        alt={item?.title}
                        className="moc-img"
                      />
                    </Link>
                    <div>
                      <h5>{item?.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={4} md={4}>
              <h4 className="Moc-title">{t("External Links")}</h4>
              <div className="external-grid-container">
                {external.map((item, index) => (
                  <div key={index} className="moc-card-wrapper">
                    <Link to={item.field_extenal_link}>
                      <img
                        src={`https://icvtesting.nvli.in${item?.field_external_website_image}`}
                        alt={item?.title}
                        className="moc-img"
                      />
                    </Link>
                    <div>
                      <h5>{item?.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        IcMoclist &&
        IcMoclist.filter(
          (x) => x.nid == new URLSearchParams(location.search).get("nid")
        ).map((x) => {
          return <MocDetails key={x.nid} detailData={x} />;
        })
      )}
    </>
  );
};

export default Moc;
