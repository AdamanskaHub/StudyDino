import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import "../pages/styles.scss"

const Shop = () => (
  <div className="container">
    <div className="marginer">
      <SEO title="Shop" />

      <div className="top-bar">
        <Link to="/" className="links">Exit</Link>
        <span className="coins">30</span>
      </div>

      <p>Welcome to the Shop</p>

      <div className="shop-container">
        <div className="item">
          
        </div>
      </div>

    </div>
  </div>
)

export default Shop
