import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <ol>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title
          const date = node.frontmatter.date
          return (
            <li>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
