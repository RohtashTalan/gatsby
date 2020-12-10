import React from "react"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <p>Start here!</p>
  </Layout>
)

export default IndexPage
