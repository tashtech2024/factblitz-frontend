// import Homepage from "./components/Pages/Homepage"
// import AboutPage from "./components/Pages/Aboutpage"
import "./App.css";
import { useState, useEffect } from "react";
import cors from "cors";
// import NavBar from "./components/NavBar";
import FactDisplay from "./components/FactsDisplay";
// import Form from "./components/Form";
// app.use(cors())
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
    {/* <NavBar/> */}
      {/* ********** NavBar */}
      <header>
        <nav className="NavBar">
          <a href="">Home</a>
          <a href="">About FB</a>
          <a href="">Contact Us</a>
          <a href="">Other Fun and Facts</a>
        </nav>
      </header>
      {/* Logo */}
      <img src="/FACTBLITZIMGLARGE.png" alt="" />
      <br />
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
                alt="photo1"
                style={{ width: "100%" }}
              />
            </div>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/1151429742/photo/waist-up-of-happy-african-lady-looking-at-camera-in-cafe.jpg?s=1024x1024&w=is&k=20&c=LoU7Z_Z26mrRXL8WEOtMgD_dSGmtSOOmjtdfyocF_0k="
                alt="photo2"
                style={{ width: "100%" }}
              />
            </div>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/1425100158/photo/mother-and-daughter-planting-at-home-spending-time-together-and-having-fun.jpg?s=1024x1024&w=is&k=20&c=YcQ0QK8oVEUYaSeREQg9zPF-byMdvXWGIN78-E0GOF8="
                alt="photo3"
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
      {/* FACT RENDERING */}
      <h1>“Discover the Fun in Facts!”</h1>
      <h2>Click The Icon Below</h2>
      {/* {data.facts[0]} */}
      {/* Fact Button */}
      <br />
      <button onClick={getFact}>
        <img
          src="/FACTBLITZlightBULBONLY.png"
          width="100"
          height="100"
          alt=""
          />
      </button> 
      
          <div><h2>{fact}</h2>
          </div>
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
      {/* **************************Contact Us Components */}
      <h2>Contact US</h2>
      <img
        src="https://media.istockphoto.com/id/1487506839/photo/portrait-of-multi-cultural-business-team-standing-together-in-office.webp?b=1&s=170667a&w=0&k=20&c=ifstPsghgKBxxgFoUqvKJrjiPd-ujwpIb43hdzNj6yg="
        alt="Coworker photo - two men and two women"
      />
      <h2>William L. Patton</h2>
      // <h3>WilliamLPatton@test.com</h3>
      // <h2>Diana C. Woodruff</h2>
      // <h3>DC.Woodruff@test.com</h3>
      // <h2>Vinicius Costa Dias</h2>
      // <h3>ViniciusCostaDias@test.com</h3>
      // <h2>Mandy Schwartz</h2>
      // <h3>Mandy Schwartz@test.com</h3>
      // <h1> Don't forget to join the FB Family</h1>
      <h4>Click The Button Below!</h4>
      <img
        src="https://cdn.pixabay.com/animation/2022/10/27/12/59/12-59-10-594_512.gif"
        width="100"
        height="100"
      />
      {/* Sign Up Button */}
      <br />
      <button>Click to sign up!</button>
      <br />
      <hr />
      {/* **************************Contact Us Components */}
      {/*======About Page==========================================*/}
      <h1> All About Fact Blitz!</h1>
      <h2> Created In 2008</h2>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut
        porttitor leo a diam sollicitudin tempor. Convallis tellus id interdum
        velit laoreet id donec ultrices. Dui sapien eget mi proin. Massa sapien
        faucibus et molestie ac feugiat sed. Neque volutpat ac tincidunt vitae.
        Tincidunt id aliquet risus feugiat in ante metus dictum. Ornare massa
        eget egestas purus viverra accumsan. Risus commodo viverra maecenas
        accumsan lacus vel facilisis volutpat est. Morbi tristique senectus et
        netus et malesuada.
        <br />
        Vel risus commodo viverra maecenas accumsan lacus. Ut morbi tincidunt
        augue interdum velit euismod in. Praesent tristique magna sit amet. Ut
        consequat semper viverra nam. Tincidunt arcu non sodales neque sodales
        ut etiam sit amet. Volutpat sed cras ornare arcu dui. Purus faucibus
        ornare suspendisse sed nisi lacus sed. A cras semper auctor neque vitae
        tempus quam pellentesque. Nullam eget felis eget nunc lobortis mattis
        aliquam faucibus. Vulputate enim nulla aliquet porttitor lacus luctus
        accumsan tortor posuere. Amet tellus cras adipiscing enim eu turpis
        egestas pretium aenean. Interdum posuere lorem ipsum dolor sit. Vel quam
        elementum pulvinar etiam non quam lacus suspendisse. Vitae aliquet nec
        ullamcorper sit amet risus nullam. Lorem donec massa sapien faucibus et
        molestie ac. A cras semper auctor neque vitae tempus quam pellentesque
        nec. Facilisis volutpat est velit egestas dui id. Tellus id interdum
        velit laoreet id. Suscipit adipiscing bibendum est ultricies integer
        quis auctor elit. Diam ut venenatis tellus in metus vulputate eu.
      </h4>
      <h1> Join Our Fact Family Below</h1>
      <img src="/arrow-1450_128.gif" alt="orange arrow" />
      <br />
      <button>Join Now!</button>
      {/*======About Page==========================================*/}
      <footer>
        <a className="aF" href="">
          Home
        </a>
        <a className="aF" href="">
          Contact
        </a>
      </footer>
      {/* <Form factsearch />
      {FactsData ? <FactDisplay fact={FactsData}
        getFact={getFact} /> : ""} */}
    </>
  );
}
export default App