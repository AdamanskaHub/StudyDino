import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../pages/styles.scss"
import dino from "../images/dino.png"

const greetings = ["Hello, I hope you're ready to focus","Hey, let's do this", "Other greeting"];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

console.log("random month", randomGreeting);

const IndexPage = () => (
  // <Layout>
  <div className="container">
    <div className="marginer">

      <SEO title="Study Dino" />

      <div className="top-bar">
        <Link to="/shop/" className="links">Shop</Link>
        <span className="coins">30</span>
      </div>

<p className="greetings">{randomGreeting}</p>

      <div className="start-grp">

        <div className="start-grp__top">
          <button className="time-adjust minus">-</button>
          <input type="time" className="time-input" min="00:10" max="08:00" required />
          <button className="time-adjust plus">+</button>
        </div>

        <a href="" className="eightbit-btn">START</a>

      </div>

      <div className="img-container">
        <img className="start-dino" src={dino} alt="dino" />
      </div>


    </div>
  </div>



  // </Layout>
)

export default IndexPage
