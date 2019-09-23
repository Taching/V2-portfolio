import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/Layout"
import Head from "@components/Head"
import Hero from "@components/Hero"
import PropTypes from "prop-types"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero data={data.hero.edges} />
    </Layout>
  )
}
IndexPage.prototype = {
  data: PropTypes.object.isRequired,
}
export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            date
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
