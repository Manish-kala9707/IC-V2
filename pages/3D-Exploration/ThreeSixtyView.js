import React from 'react'

const ThreeSixtyView = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <iframe
        src="https://videoserver.nvli.in/nvli/360video/Qutb_Minar/app-files/index.html"
        title="Qutb Minar 360 Video"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ThreeSixtyView

