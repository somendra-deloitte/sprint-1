import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Otp from "./Components/OTP/Otp";
import Background from "./Components/Background/Background";
import Reset from "./Components/Reset/Reset";

function App() {
  return (
    <div className="App">
      <Router>
        <Background></Background>
        <Routes>
          <Route exact path = "/otp" element = {<Otp></Otp>}></Route>
          <Route exact path = "/reset-password" element = {<Reset></Reset>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
