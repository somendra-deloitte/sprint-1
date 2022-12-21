import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Otp from "./Components/OTP/Otp";
import Background from "./Components/Background/Background";
function App() {
  return (
    <div className="App">
      <Router>
        <Background></Background>
        <Routes>
          <Route exact path = "/otp" element = {<Otp></Otp>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
