import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../pages/styles.scss"
import dino from "../images/dino.png"

const IndexPage = () => (
  // <Layout>
  <div class="container">
    <div className="marginer">

    <SEO title="Study Dino" />

<div class="top-bar">
  <Link to="/shop/" class="links">Shop</Link>
  <span class="coins">30</span>
</div>

<p class="greetings">Hi DynamicallyChanged</p>

<div className="start-grp">

  <div className="start-grp__top">
    <button className="time-adjust minus">-</button>
    <input type="time" className="time-input" min="00:10" max="08:00" required  />
    <button className="time-adjust plus">+</button>
  </div>

  <a href="" class="eightbit-btn">START</a>

</div>

<div className="img-container">
  <img class="start-dino" src={dino} alt="dino" />
</div>


    </div>
    




  </div>



  // </Layout>
)

export default IndexPage
