import { useState, useEffect } from "react";
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
import SwrilDivider from "./SwrilDivider";
import { ArrowLeft } from 'react-feather';

function HomeGalleryList() {
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
        <>
            <Container fluid>
                <Row>
                    <Col sm={1}>
                        <ArrowLeft className='backtoprevious' onClick={backtopre} size={45} />
                    </Col>
                </Row>
                <Container className='homegallerylit-header'>
                    <Row>
                        <Col>
                            <h1>GalleryList</h1>
                            <SwrilDivider />
                        </Col>
                    </Row>
                </Container>
                <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={200} onClick={({ index }) => setIndex(index)} />
                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </Container>
        </>
        {location && !location.pathname.includes("title") && <Pagination2 totalPages={totalPages} baseUrl="/galleryview" />}
    );
}

export default HomeGalleryList;
