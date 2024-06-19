// ! THIS STUFF IS IN APP.JSX AND RENDERING 

// ************ Contact Page ==========//
import React from "react"
import NavBar from "../../NavBar"

function ContactPage () {
    return(
     <div>
        <NavBar/>
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

     </div>
    )
};

export default ContactPage;