import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
            fields {
              slug
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
          const slug = node.fields.slug
          return (
            <div key={slug}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
