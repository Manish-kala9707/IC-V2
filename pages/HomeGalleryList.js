import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"; 
import React, { useState, useEffect, lazy, Suspense } from "react";   
import Divider from "../image/SwirlDivider.png"; 
import { useContext } from "react";
import { ContextData } from "../pages/Store/FetchApiData" 
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Pagination2 from "../components/Pagination/Pagination2";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { Container, Row, Col } from "react-bootstrap"; 
import { ArrowLeft } from 'react-feather';

const Card = lazy(() => delayForDemo(import('../components/Card/Card')));
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const HomeGalleryList = () => {
  const { fetchedData, title, nid, totalPages, total_items, current_page, items_per_page, filterSearchdata } = useContext(ContextData)
  console.log("filterSearchdata++++",fetchedData)
const location=useLocation()
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [pageNumber, updatePageNumber] = useState([0]);
  const [detailData, setDetailData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dcTypevalue, setDctypevalue] = useState([]);
  const [filterArray,setFilterArray]=useState([])
  const [filterArray2,setFilterArray2]=useState([])
  // let { info, search_results } = fetchedData;
  const [pagestate, setpageState] = useState()
  const [id, setId] = useState()
  const [selectedFilters, setSelectedFilters] = useState([]);
  const start = current_page * items_per_page + 1;
  const end = Math.min((current_page + 1) * items_per_page, total_items);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (filterSearchdata) {
        const newArray = filterSearchdata.flatMap(outerData =>
            outerData.flatMap(innerData =>
                innerData.field_dc_type_1 || []
            )
        );
        const newArray2 = filterSearchdata.flatMap(outerData =>
          outerData.flatMap(innerData =>
              innerData.field_parent_library_name || []
          )
      );
        setFilterArray(prevArray => [...prevArray, ...newArray]);
        setFilterArray2(prevArray => [...prevArray, ...newArray2]);
    }
}, [filterSearchdata])

const [photos, setPhotos] = useState([]);
const [index, setIndex] = useState(-1);

// Fetch data from the API
useEffect(() => {
    const fetchPhotos = async () => {
        try {
            const response = await fetch('https://apitesting.nvli.in/rest-v1/gallery');
            const data = await response.json();
            const formattedPhotos = data.rows.search_results.map((item) => {
                // Extract src and alt from field_gallery_1
                const srcMatch = item.field_gallery_1.match(/src="([^"]*)"/);
                const altMatch = item.field_gallery_1.match(/alt="([^"]*)"/);
                const src = srcMatch ? `http://icvtesting.nvli.in${srcMatch[1]}` : '';
                const alt = altMatch ? altMatch[1] : 'Image';

                return {
                    src,
                    width: 400, // Default width
                    height: 250, // Default height
                    alt,
                };
            });
            setPhotos(formattedPhotos);
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    fetchPhotos();
}, []);

const slides = photos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
}));

const backtopre = () => {
    window.open('/', '_parent');
};

  return (
    <div className="App">

      {location && !location?.pathname?.includes("title") && <Container  className="archive-header">
        <Row>
          <Col>
            <h1>Gallery</h1>
            <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
          </Col>
        </Row>
      </Container>}

      {location && !location?.pathname?.includes("title") &&
      <Container>       
      <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={200} onClick={({ index }) => setIndex(index)} />
      <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
  </Container>
      }
        
      {location && !location.pathname.includes("title") && <Pagination2 totalPages={totalPages} baseUrl="/galleryview" />}
    </div>
  );
};
export default HomeGalleryList;
 
