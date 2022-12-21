import React from 'react'
import "./Otp.css";
export default function OTP() {
  return (
    <div className='otp-main-container'>
      <div className='otp-badge-container'>
        <div className = "otp-badge-middle">
          <div className='otp-badge-inside'></div>
        </div>
      </div>

      <form className='digit-group'>
        <input type = "text" id = "digit-1" name= "digit-1" data-next = "digit-2"></input>
        <input type = "text" id = "digit-1" name= "digit-1" data-next = "digit-2"></input>
        <input type = "text" id = "digit-1" name= "digit-1" data-next = "digit-2"></input>
        <input type = "text" id = "digit-1" name= "digit-1" data-next = "digit-2"></input>
      </form>
    </div>
  )
}
