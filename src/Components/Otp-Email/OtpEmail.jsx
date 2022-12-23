import React from 'react'
import "./OtpEmail.css"
import { useNavigate } from 'react-router-dom'

export default function OtpEmail() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/otp");
  }
  return (
    <div className='otp-email-container'>
        <div className='otp-mail-box-container'>
            <div className='otp-mail-box'>
                <div className='otp-white-badge'></div>
            </div>
        </div>

        <div className = 'otp-resend-text'>
            <span>We have sent a password reset link to your registered email ID ********xx</span>
        </div>

        <div className = 'otp-link-text'>
            <span>Click on the ‘Reset Password’ link sent to create a new password</span>
        </div>

        <div className='otp-recieve-link'>
            <span style={{
                fontFamily: 'Roboto',

                
            }}>Didn’t receive the link ?</span>
            <span style={{fontWeight : "bold", marginLeft : "2%"}} onClick = {handleClick}>
                Resend</span>
        </div>
    </div>
  )
}
