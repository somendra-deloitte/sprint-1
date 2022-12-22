import {React, useState} from 'react'
import "./Reset.css"

export default function Reset() {
  const [defaulText, setDefaultText] = useState("Email / Phone Number");
  const handleChange = (event) => {
    setDefaultText(event.target.value);
    console.log(defaulText);
  }
  return (
    <div className='reset-main-container'>
        <div className='reset-main-text'>
            RESET PASSWORD
        </div>
        <div className='reset-info-container'>
            Enter your email ID/phone number to receive the reset password link
        </div>
        <div className='reset-email-input-container'>
            <input placeholder={defaulText}></input>
        </div>
        <div className='reset-send-link-button'>
            <span>SEND LINK</span>
        </div>
    </div>
  )
}
