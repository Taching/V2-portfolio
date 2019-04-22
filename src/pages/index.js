import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>{data.site.siteMetadata.description}</h2>
      <Link to="/about">About me.</Link>
    </Layout>
  )
}

export default IndexPage
