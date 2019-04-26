import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Intro from "@components/Intro"
const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         description
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <Head title="Home" />
      <Intro fixed={true} />
    </Layout>
  )
}

export default IndexPage
