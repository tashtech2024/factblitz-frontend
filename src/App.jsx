// import Homepage from "./components/Pages/Homepage"
// import AboutPage from "./components/Pages/Aboutpage"
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState, useEffect } from "react";
import Homepage from "./components/Pages/Homepage"
import AboutPage from "./components/Pages/AboutPage/index.jsx";
import ReferencePage from "./components/Pages/ReferencePage/index.jsx";
import ContactPage from "./components/Pages/ContactPage/index.jsx";
import SignInLoginPage from "./components/Pages/signloginPage/index.jsx";

import cors from "cors";
import FactDisplay from "./components/FactsDisplay";
// import Form from "./components/Form";
// app.use(cors())

import "./App.css";




function App(){
const api = "https://dog-api.kinduff.com/api/facts?"
const [fact, setFact ] = useState(null); 
const getFact = async () => {
  try{
    const res = await fetch(api)
const data = await res.json(); 
console.log(data.facts[0]);
setFact(data.facts[0])
} catch (e) {
  console.log(e);
}};
  useEffect(() => {
    getFact();
  }, []);
  return (
    <>
    <Router>
   <Routes>
   <Route path="/" element={<Homepage />}>
      </Route> 

      <Route path="/AboutPage" element={<AboutPage/>}>
</Route>    

<Route path="/ContactPage" element={<ContactPage/>}>
</Route> 

<Route path="/ContactPage" element={<ContactPage/>}>
</Route> 

<Route path="/referencePage" element={<ReferencePage/>}>
</Route>   

<Route path="/SignInLoginPage" element={<SignInLoginPage/>}>
</Route>   

   </Routes>
    </Router>
 
    </>
  );
}
export default App

{/* <h1>Facts Blitz</h1>
<p>{fact}</p>
<button onClick={getFact}>
      <img
        src="/FACTBLITZlightBULBONLY.png"
        width="100"
        height="100"
        alt=""
        />
    </button> */}