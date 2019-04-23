import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/Head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>{data.site.siteMetadata.description}</h2>
      <Link to="/about">About me.</Link>
    </Layout>
  )
}

export default IndexPage
