import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Div Element</h1>
    <p>Welcome to the Github Exercisa.</p>
    <Link to="/Commits/">Go to Commits</Link> <br />
  </Layout>
)

export default IndexPage
