import React from "react";
import "./Otp.css";
export default function OTP() {
  return (
    <div className="otp-main-container">
      <div className="otp-badge-container">
        <div className="otp-badge-middle">
          <div className="otp-badge-inside"></div>
        </div>
      </div>

      <div className="otp-verify-text">VERIFY OTP</div>

      <div className="otp-message-container">
        <p>We have sent the OTP to your registered Phone number</p>
        <p style={{ position: "absolute", left: "20%" }}> ********xx</p>
      </div>

      <form className="digit-group">
        <input
          type="text"
          id="digit-1"
          name="digit-1"
          data-next="digit-2"
        ></input>
        <input
          type="text"
          id="digit-1"
          name="digit-1"
          data-next="digit-2"
        ></input>
        <input
          type="text"
          id="digit-1"
          name="digit-1"
          data-next="digit-2"
        ></input>
        <input
          type="text"
          id="digit-1"
          name="digit-1"
          data-next="digit-2"
        ></input>
      </form>

      <div className="otp-resend-text">
        <div style={{ color: "#666666", marginRight: "3px" }}>
          Resend OTP in
        </div>
        <div style={{ fontWeight: "bold" }}>00:23</div>
      </div>

      <div className="otp-help-container">
        <div style={{ color: "#666666" }}>Having trouble logging in ?</div>
        <div style={{ fontWeight: "bold" }}>Get help</div>
      </div>
    </div>
  );
}
