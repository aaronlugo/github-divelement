import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CommitsData from "../components/commits"
import {Container} from "react-bootstrap"

const Commits = () =>
 (
    <Layout>
      <SEO title="Commits" />
      <Container>
        <h1>Commits History</h1>
        <CommitsData />
        <Link to="/">Go back to the homepage</Link>
      </Container>
      
    </Layout>
  )

export default Commits
