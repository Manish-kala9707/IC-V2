import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Carousel, Modal, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const zoomLevels = {
  Ahmedabad: 12,
  Lucknow: 12,
  Thanjavur: 13,
  Varanasi: 13,
  Delhi: 12,
  NorthDelhi: 12,
  Nizamuddin: 14,
  Patna: 12,
  Mehrauli: 14,
  Kolkata: 12,
  Bhopal: 12,
  Madurai: 13,
  Shahjahanabad: 12,
};

const cityCoordinates = {
  Ahmedabad: [23.0225, 72.5714],
  Lucknow: [26.8467, 80.9462],
  Thanjavur: [10.7867, 79.1378],
  Varanasi: [25.3176, 82.9739],
  Delhi: [28.6139, 77.209],
  NorthDelhi: [28.751, 77.1177],
  Nizamuddin: [28.5916, 77.2507],
  Patna: [25.5941, 85.1376],
  Mehrauli: [28.5205, 77.1787],
  Kolkata: [22.5726, 88.3639],
  Bhopal: [23.2599, 77.4126],
  Madurai: [9.9252, 78.1198],
  Shahjahanabad: [28.6563, 77.231],
};

function StateMap() {
  const [fetchedData, setFetchedData] = useState(null);
  const [title, setTitle] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [pinDetails, setPinDetails] = useState(null);
  const [api, setApi] = useState("");
  const [filters, setFilters] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const segments = location?.pathname?.split("/");
    segments.forEach((x) => {
      if (x.includes("title=")) {
        setTitle(x.split("=")[1]);
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const markerParam = filters.join(",");
      const apiUrl = `https://v2-hwnu.onrender.com/rest-v1/historical_cities?city=${title}${
        markerParam ? `&marker=${encodeURIComponent(markerParam)}` : ""
      }`;
      setApi(apiUrl);
    }, 1000);
    return () => clearTimeout(timer);
  }, [title, filters]);

  useEffect(() => {
    if (!api) return;
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        setFetchedData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [api]);

  const cleanTitle = decodeURIComponent(title || "").replace(/\s+/g, "");
  const center = cityCoordinates[cleanTitle] || cityCoordinates["Delhi"];
  const zoom = zoomLevels[cleanTitle] || 12;

  const popUpHandler = (x) => {
    setPinDetails(x);
    setModalShow(true);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setFilters((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  console.log("first",fetchedData)
  return (
    <>
      {fetchedData ? (
        <div style={{ position: "relative", zIndex: 0 }}>
          <MapContainer
            center={center}
            maxZoom={18}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{
              height: "450px",
              width: "100%",
              border: "2px solid black",
              borderRadius: "5px",
              zIndex: 0,
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {fetchedData?.results?.map((x, index) => {
              const lat = parseFloat(x.field_pin_position_x);
              const lng = parseFloat(x.field_pin_position_y);
              if (!lat || !lng) return null;
              return (
                <Marker key={x.nid || index} position={[lat, lng]}>
                  <Popup>
                    <img
                      style={{
                        height: "100px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      src={`http://icvtesting.nvli.in${x.field_marker_introduction_image}`}
                      alt="Marker"
                    />
                    <div
                      style={{ marginTop: "0px" }}
                      dangerouslySetInnerHTML={{
                        __html: x.field_marker_introduction,
                      }}
                    ></div>
                    <button onClick={() => popUpHandler(x)}>Read more</button>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>

          <div
            className="map-checkbox-container"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "white",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              zIndex: 1000,
            }}
          >
            {[
              "Built Heritage",
              "Streets and Bazaars",
              "Living Traditions",
              "Natural Heritage",
              "People/Personalities/Institutions",
            ].map((val) => (
              <label
                key={val}
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "14px",
                }}
              >
                <input
                  type="checkbox"
                  value={val}
                  checked={filters.includes(val)}
                  onChange={handleCheckboxChange}
                  style={{ marginRight: "5px" }}
                />
                {val}
              </label>
            ))}
          </div>

          {pinDetails && (
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Body>
                {pinDetails.field_marker_slide_image &&
                pinDetails.field_marker_slide_image.trim() !== "" ? (
                  <Carousel>
                    {pinDetails.field_marker_slide_image
                      .split(",")
                      .map((data, index) => (
                        <Carousel.Item key={index}>
                          <img
                            style={{ height: "300px", width: "100%" }}
                            src={`http://icvtesting.nvli.in${data.trim()}`}
                            alt={`Slide ${index + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                ) : (
                  <img
                    className="img-responsive"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src={`http://icvtesting.nvli.in${pinDetails.field_marker_introduction_image}`}
                    alt="Intro"
                  />
                )}
                <p
                  style={{ marginTop: "10px" }}
                  dangerouslySetInnerHTML={{
                    __html: pinDetails.field_marker_description,
                  }}
                ></p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setModalShow(false)}>Close</Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      ) : (
        <ShimmerCardDetails />
      )}
    </>
  );
}

export default StateMap;
