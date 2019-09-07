import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "@components/Layout"
import Head from "@components/Head"
import Intro from "@components/Intro"
import PropTypes from "prop-types"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Home" />
      <Intro fixed={true} />
    </Layout>
  )
}
export default IndexPage

IndexPage.prototype = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query IndexQuery {
    index: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/index/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
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
