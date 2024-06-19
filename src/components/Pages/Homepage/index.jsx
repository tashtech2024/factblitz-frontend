// ! THIS STUFF IS IN APP.JSX AND RENDERING 

//* Where I will render facts - from this page - fact display will hold the data?

/* eslint-disable react/prop-types */

import { useContext } from "react";
import NavBar from "../../NavBar.jsx"
import FactDisplay from "../../FactsDisplay/index.jsx";
import Footer from "../../Footer.jsx"

function Homepage (){
return(
    <div>
            <NavBar/>
 {/* BOOT STRAP IMAGES --------------------------------------------------------------------- */}
 <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img
                src="https://media.istockphoto.com/id/1468484722/photo/black-woman-phone-and-typing-in-office-for-contact-data-management-app-and-reading-business.jpg?s=1024x1024&w=is&k=20&c=uVoWoKGX52Op21UdazTbC4sWBOtpxQ2qeO03Mw1G0ZI="
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/1151429742/photo/waist-up-of-happy-african-lady-looking-at-camera-in-cafe.jpg?s=1024x1024&w=is&k=20&c=LoU7Z_Z26mrRXL8WEOtMgD_dSGmtSOOmjtdfyocF_0k="
                alt="Chicago"
                style={{ width: "100%" }}
              />
            </div>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/1425100158/photo/mother-and-daughter-planting-at-home-spending-time-together-and-having-fun.jpg?s=1024x1024&w=is&k=20&c=YcQ0QK8oVEUYaSeREQg9zPF-byMdvXWGIN78-E0GOF8="
                alt="New york"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* BOOT STRAP IMAGES --------------------------------------------------------------------- */}
      {/* Fact Button */}
      <br />
      <button onClick={FactDisplay}>
        <img
          src="/FACTBLITZlightBULBONLY.png"
          width="100"
          height="100"
          alt=""
        />
        <FactDisplay/>
      </button>
      <h3> Sign Up to become a Member of the Fact Family and add Facts! </h3>
      <img
        src="https://cdn.prod.website-files.com/64625c027dfd2204b73d973d/6555024a5d0ce0083a745b01_Indicator%20-%20Scroll%20Down%20-%20Timeline%201%20(1).gif"
        width="100"
        height="100"
      />
      <br />
      <button>Click to sign up!</button>
      <br />
      <br />
      <hr></hr>
        <Footer/>
        </div>
    )
}

export default Homepage; 










// {/* <h1> Home Page</h1>
//           {/* Logo */}
//       <img src="/FACTBLITZIMGLARGE.png" alt="" />
//       <h1>Facts Blitz</h1>
//       {/* Fact Button */}
//       <button onClick={FactDisplay}>
//         <span>Fact Me Please!</span></button> */}