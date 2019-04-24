import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />
      <ol>
        {posts.map(({ node }) => {
          const title = node.title
          const publishedDate = node.publishedDate
          const slug = node.slug
          return (
            <ol key={slug}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </ol>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
