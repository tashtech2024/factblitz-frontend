import "./App.css";
// import FactDisplay from "./components/FactsDisplay";
// import Homepage from "./components/Pages/Form";
// // import NavBar from './components/NavBar'
// import Form from "./components/Pages/Form";
// // import FactDisplay from './components/FactsDisplay'
import { useState, useEffect} from "react";

function App() {
  const [fact, setfact] = useState(null);

  // * Get Fact
  const getFact = async (searchFact) => {
    try {
      const res = await fetch(
        "//dog-facts-api.herokuapp.com/api/v1/resources/dogs/all${apiKey}&f=${setfact}" + 1
      );

      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFact("data");
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
      <button>Fact Me Please!</button>
      {/* <Form factsearch />
      {FactData ? <FactDisplay fact={FactsData}
        getFact={getFact} /> : ""} */}
    </>
  );
}

export default App;
