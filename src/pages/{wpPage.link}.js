import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout/Layout"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`

const PageTemplate = ({ data }) => (
  <Layout>
    {console.log(data)}
    <p>PageHero</p>
    <Wrapper>
      <p>Sidebar</p>
      <p>Content</p>
    </Wrapper>
  </Layout>
)

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            link
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            link
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`
