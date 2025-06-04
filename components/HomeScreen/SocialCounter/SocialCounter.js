import React from "react";
import "./SocialCounter.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // close match for X

const SocialCounter = () => {
  const visitorCount = "11111111".split(""); // example count

  return (
    <div className="social-counter-container">
      {/* Social Media Section */}
      <div className="box social-box">
        <div className="social-row">
          <div className="social-item">
            <FaInstagram className="icon" />
            <div>
              <div className="label">Instagram</div>
              <div className="handle">@indiancultureportal</div>
            </div>
          </div>
          <div className="social-item">
            <FaFacebookF className="icon" />
            <div>
              <div className="label">Facebook</div>
              <div className="handle">@INDCulturePortal</div>
            </div>
          </div>
          <div className="social-item">
            <RxCross2 className="icon" />
            <div>
              <div className="label">X</div>
              <div className="handle">@_indianculture</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Counter Section */}
      <div className="box visitor-box">
        <div className="visitor-label">Visitors who have stopped by</div>
        <div className="visitor-digits">
          {visitorCount.map((digit, index) => (
            <div key={index} className="digit-box">
              {digit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialCounter;
