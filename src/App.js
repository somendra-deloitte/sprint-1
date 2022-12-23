import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Otp from "./Components/OTP/Otp";
import Background from "./Components/Background/Background";
import Reset from "./Components/Reset/Reset";
import Signup from "./Components/Signup/Signup";
import SignIn from "./Components/SignIn/SignIn";
import Forgotpass from "./Components/ForgotPass/Forgotpass";
import OtpEmail from "./Components/Otp-Email/OtpEmail";
function App() {
  return (
    <div className="App">
      <Router>
        <Background></Background>
        <Routes>
          <Route exact path = "/otp" element = {<Otp></Otp>}></Route>
          <Route exact path = "/reset-password" element = {<Reset></Reset>}></Route>
          <Route exact path = "/signup" element = {<Signup></Signup>}></Route>
          <Route exact path = "/signin" element = {<SignIn></SignIn>}></Route>
          <Route exact path = "/fp" element = {<Forgotpass></Forgotpass>}></Route>
          <Route exact path = "/reset-email" element = {<OtpEmail></OtpEmail>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
