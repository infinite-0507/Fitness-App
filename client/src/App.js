import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import  SignUp  from "./components/Signup.jsx";
import Details from "./components/Details.jsx";
import Plans from "./components/Plans.jsx";
import Merge from "./components/Merge.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Weightgain from "./components/Weightgain.jsx";
import Weightloss from "./components/Weightloss.jsx";
import Trackerls from "./components/Trackerls.jsx";
import Trackerwg from "./components/Trackerwg.jsx";
import Finalwg from "./components/Finalwg.jsx";
import Finalwl from "./components/Finalwl.jsx";

import "./styles/Details.scss";


function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Details" element={<Details/>}/>
        < Route path="/Plans" element={<Plans/>}/>
        < Route path="/" element={<Merge/>}/>
        <Route path="/Weightloss" element={<Weightloss/>}/>
        <Route path="/Weightgain" element={<Weightgain/>}/>
        <Route path="/Trackerls" element={<Trackerls/>}/>
        <Route path="/Trackerwg" element={<Trackerwg/>}/>
        <Route path="/Finalwg" element={<Finalwg/>}/>
        <Route path="/Finalwl" element={<Finalwl/>}/>
      </Routes>
      

    </Router>
  )
}

export default App;