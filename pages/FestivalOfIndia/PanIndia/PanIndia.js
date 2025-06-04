import React from "react";
import { useContext } from "react";
// import './FreedomArchive.css';
import PanIndiBan from "../../../image/PanIndiBan.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PanIndia.css";
import SwrilDivider from "../../../components/SwrilDivider";
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextData } from "../../Store/FetchApiData";
import PanThumbnails1 from "../../../image/panindiimg1.png";
import PanThumbnails2 from "../../../image/panindiimg2.png";
import PanThumbnails3 from "../../../image/panindiimg3.png";
import PanThumbnails4 from "../../../image/panindiimg4.png";
import ErrorPage from "../../../components/Card/ErrorPage";
import CounterCard from "../../../components/Card/CounterCard";
import { useTranslation } from "react-i18next";
import Card from "../../../components/Card/Card";
import Pagination2 from "../../../components/Pagination/Pagination2";
import CardStoryDetails from "../../../components/Card/CardStoryDetails";
import ShimmerCardDetails from "../../../components/Card/ShimmerCardDetails";
import FestivalsOfIndiaDetails from "../FesivalsOfIndiaDetails";
import PanIndiaDetails from "./PanIndiaDetails";
function PanIndia() {
  var settings1 = {
    dots: false,
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          draggable: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
          draggable: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          // initialSlide: 1,
          dots: false,
          arrows: false,
          draggable: true,
          autoplay: false,
        },
      },
    ],
  };

  const { t } = useTranslation();
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

  console.log("first", fetchedData);
  return (
    <>
      <Container
        fluid
        style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}
      >
        {/* <Slider1 {...settings1}>
                    <div>
                       
                        <div className="fipanindia-card-2"><img src={PanThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '120px', top: '215px' }}><p>Easter</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                        </div>
                    </div>

                   
                    <div>
                       
                        <div className="fipanindia-card-2"><img src={PanThumbnails1} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '130px', top: '215px' }}><p>Images</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>
                        </div>
                    </div>

                    <div>
                       
                        <div className="fipanindia-card-2"><img src={PanThumbnails2} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '120px', top: '215px' }}><p>Mahashivratri</p></div>
                            <div className="fipanindia-username" ></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                            
                        </div>
                    </div>

                    <div>
                      
                        <div className="fipanindia-card-2"><img src={PanThumbnails3} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '120px', top: '215px' }}><p>Good friday</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                          
                        </div>

                    </div>

                    <div>
                       
                        <div className="fipanindia-card-2"><img src={PanThumbnails4} className="img img-responsive" alt='rarebook' />
                            <div className="fipanindia-name" style={{ left: '140px', top: '215px' }}><p>Holi</p></div>
                            <div className="fipanindia-username"></div>
                            <Button className='fipanindia-icons' variant="outline-light" onClick="">Explore</Button>

                            
                        </div>
                    </div>

                    
                </Slider1> */}
        {fetchedData &&
          fetchedData.map((data) => {
            <div>
              <div className="fipanindia-card-2">
                <img
                  src={data.field_thumbnail_image}
                  className="img img-responsive"
                  alt="rarebook"
                />
                <div
                  className="fipanindia-name"
                  style={{ left: "120px", top: "215px" }}
                >
                  <p>{data.title}</p>
                </div>
                <div className="fipanindia-username"></div>
                <Button
                  className="fipanindia-icons"
                  variant="outline-light"
                  onClick=""
                >
                  {t("Explore")}
                </Button>
              </div>
            </div>;
          })}

        <>
          {!response.ok ? (
            <ErrorPage response={response} />
          ) : (
            <div className="App">
              {location && !location?.pathname?.includes("title") && (
                <>
                  {" "}
                  <Container className="fipanindia-header">
                    <Row>
                      <Col>
                        <h4>{t("Pan India Festivals")}</h4>
                        <SwrilDivider />
                      </Col>
                    </Row>
                  </Container>
                  <Container className="fipanindia-cover">
                    <Row className="justify-content-md-center">
                      <Col>
                        {location.pathname.includes("lang=hi") ? (
                          <p>
                            सांस्कृतिक रूप से समृद्ध देश भारत में कई तरह के
                            त्यौहार मनाए जाते हैं और पूरे देश में इन त्यौहारों
                            की अपनी अलग-अलग धूम-धाम होती है। ऐसे कई त्यौहार हैं
                            जो साल भर की भावना को निर्धारित करते हैं और इनमें से
                            कई त्यौहार पूरे देश में समुदायों में मनाए जाते हैं।
                            जबकि मूल विश्वास प्रणालियाँ मोटे तौर पर समान हैं, इन
                            त्यौहारों में रीति-रिवाजों, परंपराओं और उत्सव के
                            अनुष्ठानों के संदर्भ में क्षेत्रीय भिन्नताएँ हैं।
                            किसी विशेष आयोजन का देश भर के विभिन्न समुदायों में
                            असंख्य क्षेत्रीय अर्थ हो सकते हैं। ये त्यौहार
                            विभिन्न तरीकों को उजागर करते हैं जिनसे उत्सवों को एक
                            बड़े, एकीकृत, अखिल भारतीय संदर्भ में चिह्नित किया
                            जाता है।
                          </p>
                        ) : (
                          <p>
                            India, a culturally rich country, hosts a variety of
                            festivals, and the celebrations have their own
                            distinct extravaganzas across the country. There are
                            numerous festivals that set the spirit for the year,
                            and several of these festivals are celebrated in
                            communities across the country. While the core
                            belief systems remain broadly similar, these
                            festivals are marked by regional variation in terms
                            of customs, traditions, and rituals of celebration.
                            A particular event can have a myriad of regional
                            meanings in different communities across the
                            country. These festivals highlight the various ways
                            in which the festivities are marked within a larger,
                            unified, pan-Indian context.
                          </p>
                        )}
                      </Col>
                    </Row>
                  </Container>
                </>
              )}

              {location && !location?.pathname?.includes("title") && (
                <Container>
                  <Row>
                    <Col lg={6} md={6}></Col>
                    <CounterCard
                      pageNumber={pageNumber}
                      total_items={total_items}
                      items_per_page={items_per_page}
                      t={t}
                    />
                  </Row>
                </Container>
              )}
              {location && location?.pathname?.includes("title") ? (
                fetchedData && fetchedData.length > 0 ? (
                  fetchedData
                    .filter((x) => x.nid == nid)
                    .map((x) => {
                      return <PanIndiaDetails key={x.nid} detailData={x} />;
                    })
                ) : (
                  <ShimmerCardDetails />
                )
              ) : (
                <Container>
                  <Row>
                    <div className="page-content">
                      <Card
                        page="/"
                        search_results={fetchedData}
                        response={response}
                        className="page-content"
                      />
                    </div>
                  </Row>
                </Container>
              )}
              {location && !location.pathname.includes("title") && (
                <Pagination2 totalPages={totalPages} baseUrl="/videos" />
              )}
            </div>
          )}
        </>
      </Container>
    </>
  );
}

export default PanIndia;
