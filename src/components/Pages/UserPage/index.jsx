import { useState, useRef } from "react";
import react from "react";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import CreateFactForm from "../../FactApp/CreateFactForm/index.jsx"
import Fact from "../../FactApp/Fact/index.jsx"

import "../../../../src/App.css";


function UserPage () {
    return (
        
      <div className="UserPage">
         {/* Logo */}
      <img src="/FACTBLITZIMGLARGE.png" alt="" />
      <h1>Facts App! </h1>
<CreateFactForm/>
<Fact/>
        <h1></h1>
        </div>
    );
};

export default UserPage; 