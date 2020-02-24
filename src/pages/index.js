import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../pages/styles.scss"

const IndexPage = () => (
  <Layout>
    <div class="bg-container"> 
    <SEO title="Study Dino" />
    <p>Hi Username</p>
    <a href="" class="eightbit-btn">START</a>
    <div class="bottombar">
      <Link to="/inventory/">inventory-icon</Link>
    </div>
    </div>
    
    
  </Layout>
)

export default IndexPage
