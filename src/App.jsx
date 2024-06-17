// import Homepage from "./components/Pages/Homepage"
// import AboutPage from "./components/Pages/Aboutpage"
import "./App.css";
import { useState, useEffect} from "react";

function App() {
  const [fact, setfact] = useState(null);

  // * Get Fact
  const getFact = async (searchFact) => {
    try {
      const res = await fetch(
        " http://dog-api.kinduff.com/api/facts?number5" + 1
      );

      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFact('data');
  }, []);

  return (
    <>
      {/* ********** NavBar */}
      <header>
        <nav className="NavBar">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Log in/SignUp</a>
          <a href="">UserPage</a>
        </nav>
      </header>
      {/* Logo */}
      <img src="/FACTBLITZIMGLARGE.png" alt="" />
      <h1>Facts Blitz</h1>
      {/* Fact Button */}
      <button onClick={getFact}><img src="/FACTBLITZlightBULBONLY.png"width="100" height="100" alt="" /></button>
      <h3> Sign Up to become a Member of the Fact Family and add Facts! </h3>


    <button>Click to sign up!</button>
    <br/>
    
      <footer>
        <a className="aF"
        href="">Home</a>
          <a className="aF"
        href="">Contact</a>
      </footer>
    </>
  );
}

export default App;
