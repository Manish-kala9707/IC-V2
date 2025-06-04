import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Crossfade() {
  const videoRef = useRef(null);
  const location = useLocation();
  const { t } = useTranslation();

  const basePath = 'https://videoserver.nvli.in/nvli/ICP2homepage/';
  const isHindi = location.pathname.includes("lang=hi");
  const fileName = isHindi ? "Homepage_video_hindi" : "Homepage_Video";

  const mp4Src = `${basePath}${fileName}.mp4`;
  const webmSrc = `${basePath}${fileName}.webm`;

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadedData = () => {
        video.play().catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.load();

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [mp4Src, webmSrc]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.responsiveContainer}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={styles.video}
        >
          <source src={mp4Src} type="video/mp4" />
          <source src={webmSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  responsiveContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Crossfade;
