import React, { useEffect, Suspense, useState, lazy } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ACPaintingBan from "../../image/ACPaintingBan.png";
import Divider from "../../image/SwirlDivider.png";
import ACPaintImg3 from "../../image/acpaintimg3.png";
import ACPaintImg4 from "../../image/acpaintimg4.png";
import ShimmersUiCard from "../../components/Card/ShimmersUiCard";
import CardStoryDetails from "../../components/Card/CardStoryDetails";
import CardDetails from "../../components/Card/CardDetails";
import Pagination2 from "../../components/Pagination/Pagination2";
import "./Paintings.css";

const Card = lazy(() => delayForDemo(import("../../components/Card/Card")));
function delayForDemo(promise) {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => promise);
}

function Paintings() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [caveNumber, setCaveNumber] = useState("Any");
  const [storyName, setStoryName] = useState("Any");
  const [nid, setNid] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [api, setApi] = useState("");

  useEffect(() => {
    const segments = location.pathname?.split("/");
    segments?.forEach((segment) => {
      if (segment.includes("page=")) {
        setPageNumber(+segment.split("=")[1]);
      } else if (segment.includes("nid=")) {
        setNid(+segment.split("=")[1]);
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    const url = `https://icvtesting.nvli.in/rest-v1/ajanta-painting?${caveNumber !== "Any" ? `field_ajanta_cave_type_value=${caveNumber}&` : ""}${
      storyName !== "Any" ? `field_storywise_value=${storyName}&` : ""
    }page=${pageNumber > 0 ? pageNumber - 1 : 0}`;

    const timer = setTimeout(() => setApi(url), 500);
    return () => clearTimeout(timer);
  }, [pageNumber, storyName, caveNumber]);

  useEffect(() => {
    const fetchData = async () => {
      if (!api) return;
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        setFetchedData(jsonData?.results || []);
        setTotalPages(jsonData?.pager?.total_pages || 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [api]);

  const handleSelectChange = (e) => setCaveNumber(e.target.value);
  const handleSelectChange2 = (e) => setStoryName(e.target.value);

  const applyFilter = () => {
    navigate(`/paintings/cave=${caveNumber}/story=${storyName}`);
  };

  return (
    <>
      {location.pathname.includes("title=") ? (
        fetchedData
          .filter((x) => x.nid === nid)
          .map((x) => (
            <Container className="archive-header" key={x.nid}>
              <Row>
                <Col>
                  <h1>{`${x.field_ajanta_cave_type}-${x.title}`}</h1>
                  <img src={Divider} alt="Divider" style={{ width: "90px", height: "15px" }} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    className="img-responsive"
                    src={`http://icvtesting.nvli.in${x.field_ajanta_category_thumbnail.match(/src="([^"]*)"/)[1]}`}
                    alt={x.title}
                  />
                </Col>
                <Col>
                  <h3>Descriptions:</h3>
                  <div dangerouslySetInnerHTML={{ __html: x.body }} className="unescotxt" />
                  <h3>Story:</h3>
                  <div dangerouslySetInnerHTML={{ __html: x.field_elements }} className="unescotxt" />
                </Col>
              </Row>
            </Container>
          ))
      ) : (
        <>
          <div className="ac-paint-parent-container">
            <img src={ACPaintingBan} className="acpaintbanner" alt="Ajanta Paintings Banner" />
          </div>

          <Container className="acpaint-header">
            <Row>
              <Col>
                <h1>{t("Ajanta paintings")}</h1>
              </Col>
            </Row>
          </Container>

          <div className="acpaint-image-container">
            <div className="acpaint-image-item">
              <video
                src="https://videoserver.nvli.in/nvli/AJANTA/ArtofAjanta.mp4"
                controls
                controlsList="nodownload"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: "100%", borderRadius: "8px", height: "90%", border: "2px solid white" }}
              />
              Art of Ajanta
            </div>

            <div className="acpaint-image-item">
              <video
                src="https://videoserver.nvli.in/nvli/AJANTA/PaintProcess.mp4"
                controls
                controlsList="nodownload"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{ width: "100%", borderRadius: "8px", height: "90%", border: "2px solid white" }}
              />
              <div className="acpaint-caption">The process of making the Ajanta paintings</div>
            </div>
          </div>

          {/* Descriptive Sections + Filters */}
          {/* Keep your narrative and slider section here as-is */}

          <Container className="acpaint-header">
            <Row>
              <Col>
                <h1>{t("Search By")}</h1>
              </Col>
            </Row>
          </Container>

          <Container>
            <div className="row justify-content-center acpaint-custom-dropdown">
              <div className="col-md-3 mb-3">
                <select className="form-select" onChange={handleSelectChange}>
                  <option value="Any">{t("Select Cave Number")}</option>
                  <option value="Cave 1">Cave 1</option>
                  <option value="Cave 2">Cave 2</option>
                  <option value="Cave 16">Cave 16</option>
                  <option value="Cave 17">Cave 17</option>
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <select className="form-select" onChange={handleSelectChange2}>
                  <option value="Any">{t(" Select Story-wise")}</option>
                  <option value="Bodhisatva as an Animal">Bodhisatva as an Animal</option>
                  <option value="Bodhisatva as a King">Bodhisatva as a King</option>
                  <option value="Bodhisatva as a Prince">Bodhisatva as a Prince</option>
                  <option value="Bodhisatva as a Naga">Bodhisatva as a Naga</option>
                  <option value="Bodhisatva as an Ascetic">Bodhisatva as an Ascetic</option>
                  <option value="Bodhisatva as Indra">Bodhisatva as Indra</option>
                  <option value="Bodhisatva as Minister">Bodhisatva as Minister</option>
                  <option value="Paintings with the Buddha">Paintings with the Buddha</option>
                  <option value="Paintings about the birth and youth of the Buddha">Paintings about the birth and youth of the Buddha</option>
                </select>
              </div>

              <div className="col-md-1 mb-3 d-flex justify-content-center">
                <Button className="acpaint-search-button" onClick={applyFilter}>
                  {t("Apply")}
                </Button>
              </div>
            </div>
          </Container>

          {/* Results Section */}
          <Container fluid>
            <Row>
              <div className="page-content">
                <Suspense fallback={<ShimmersUiCard />}>
                  <Card page="/" search_results={fetchedData} className="page-content" />
                </Suspense>
              </div>
            </Row>
          </Container>
        </>
      )}

      {/* Pagination */}
      {location && !location.pathname.includes("title") && (
        <Pagination2 totalPages={totalPages} baseUrl="/paintings" />
      )}
    </>
  );
}

export default Paintings;
