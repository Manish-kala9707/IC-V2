import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import Divider from "../forts/images/FortsofIndia.png";
import { ContextData } from "../../pages/Store/FetchApiData";
import Pagination2 from "../../components/Pagination/Pagination2";
import InternalSearchCard from "../../components/Card/InternalSearchCard";
import CounterCard from "../../components/Card/CounterCard";
import Card from "../../components/Card/Card";
import ErrorPage from "../../components/Card/ErrorPage";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
const History = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    response,
  } = useContext(ContextData);

  const { t } = useTranslation();

  return (
    <>
      {!response.ok ? (
        <ErrorPage />
      ) : (
        <>
          {location.pathname.includes("title=") ? (
            fetchedData &&
            fetchedData.length > 0 &&
            fetchedData
              .filter((x) => x.nid == nid)
              .map((x) => {
                return fetchedData && fetchedData.length > 0 ? (
                  fetchedData
                    .filter((x) => x.nid == nid)
                    .map((x) => {
                      return <CardStoryDetails key={x.nid} detailData={x} />;
                    })
                ) : (
                  <ShimmerCardDetails />
                );
              })
          ) : (
            <>
              {location && !location?.pathname?.includes("title") &&   <>   <Container className="archive-header">
                    <Row>     <Col md={6} className="offset-md-3">
                      <img
                        src={Divider}
                        alt="Caption Divider"
                        className="icon"
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "contain",
                          marginBottom: "15px",
                        }} />
                      <h1 className="text-center">{t("History")}</h1>
                      <div class="col pt-3"><div class="line-with-dspace"><div class="linedpsace"></div></div></div>
                    </Col></Row>
                  </Container></>}
  
        {location && !location?.pathname?.includes("title") &&
           <><Container fluid className="mb-2">
            <Row >
              <Col md={12} className="mt-4 ">
              <div className="fortcardbg rounded p-5 ">
                <p>
                Indian history is a rich mosaic of people and traditions. The political history of this land has been an unending saga of the rise and fall of countless kingdoms and dynasties. The once mighty empires have inevitably been lost to time. The monuments and structures built by the rulers and conquerors, however, still stand as tangible reminders of this past. Forts, especially, remind us of the glory, innovation and might of these empires.
</p><p>
From the Indus Valley Civilization to the days of the British rule, fortifications have been an abiding feature of our architectural heritage. Forts of the Indian subcontinent have architecturally evolved over time in tandem with the political developments of the country. Indigenous traditions have harmoniously blended with influences that travelled with conquerors from far off lands. The present section aims to offer a broad overview of the evolution of forts in this land. </p></div>
              </Col>
            </Row>
          </Container><Container fluid>
              <Row className="fortssearchrow pr-2">
                <Col lg={6} md={6}></Col>
                <CounterCard pageNumber={pageNumber} total_items={total_items} items_per_page={items_per_page} t={t} />
              </Row>
            </Container></>
        }
        
 
              <Container fluid className="mt-3">
                {/* <Container fluid style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}> */}
                <Row>
                  {fetchedData.map((data, index) => {
                    return (
                      <Col lg={4} md={4} sm={12} key={index}>
                        <div
                          className="children-card-food"
                          style={{ margin: "4px" }}
                        >
                          <img
                            src={`http://icvtesting.nvli.in${data.field_forts_of_india_thumbnail}`}
                            className="img img-responsive"
                            alt="rarebook"
                          />
                          <div className="children-name" style={{ top: "30%" }}>
                            <p className="text-center">{data.title}</p>
                          </div>
                          <div className="children-username"></div>
                          <Button
                            className="children-icons"
                            variant="outline-light"
                            onClick={() =>
                              navigate(
                                `${location.pathname}/title=${data.title}/nid=${data.nid}`
                              )
                            }
                          >
                            Explore
                          </Button>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};

export default History;
