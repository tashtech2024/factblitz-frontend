import React from "react"
import NavBar from "../../NavBar"
import CenteredLink from "../../CenterLinks/CenterLink";
import CenteredLinkTwo from "../../CenterLinks/CenterLink2";
import CenteredLinkThree from "../../CenterLinks/CenterLink3";
import SigninButton from "../../SigninButton";
import Footer from "../../Footer";
// import "../ReferencePage/ReferencePage.module.css";

function referencePage (){
    return(
        <div>
            <NavBar/>
            
     {/* Logo */}
     <img src="/FACTBLITZIMGLARGE.png" alt="" />

            <h1>Other Fun Fact Pages</h1>
        
     {/* <div id="LinkCenter">
     <p>
        <a href="https://www.mentalfloss.com/" target="_blank" rel="noopener noreferrer">Mental Floss</a>
      </p>
     </div> */}

     <CenteredLink/>
  
            <li>Description: Mental Floss offers a wide range of articles on various topics, including history, science, pop culture, and more. It’s known for its quirky and fascinating facts.</li>
            <CenteredLinkTwo/>
            <li>Description: Fact Retriever provides a vast collection of fun and interesting facts across different categories such as animals, history, science, and entertainment.</li>
            <CenteredLinkThree/>
            <lil>Description: The Fact Site is dedicated to sharing fun and random facts about a variety of subjects, including celebrities, technology, and everyday life.
These websites are great resources for discovering new and intriguing information.</lil>

<h1>"Weekly Quote"</h1>
<h2>“Believe in yourself and all that you are. Remember, the only way to discover the limits of the possible is to go beyond them into the impossible.” - Arthur C. Clarke</h2>
    
<h3> Sign Up to become a Member of the Fact Family and add Facts! </h3>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWJpcDhleWI1ZXVwNjZrazA3eHptbWZjNnJ6Nzc0bGY3cnd4dnVkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JQ4D3Dm2eKn5rdcGZY/giphy.webp"
        width="100"
        height="100"
      />
      <br />
<SigninButton/>
      <br />
      <br />
      <hr></hr>
<Footer/>
        </div>
    )
}

export default referencePage;