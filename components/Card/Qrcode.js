import React from "react";
import QRCode from "react-qr-code";
import CardStoryDetails from "./CardStoryDetails";

function Qrcode(props) {
    // const currentUrl = window.location.href;

  return (
    <div>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
        <QRCode size={506} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={props.value} viewBox={`0 0 256 256`} />
      </div>
    </div>
  );
}

export default Qrcode;