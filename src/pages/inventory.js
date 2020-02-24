import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Inventory = () => (
  <Layout>
    <SEO title="Inventory" />
    <h1>Hi from the inventory</h1>
    <p>Welcome to the INVENTORY</p>
    <Link to="/">Go back to the dino</Link>
  </Layout>
)

export default Inventory
