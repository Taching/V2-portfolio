import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "@components/Layout"
import Head from "@components/Head"
import { BlogWrapper, BlogTitle } from "../styles/BlogStyle"

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
      <BlogWrapper>
        {posts.map(({ node }) => {
          const title = node.title
          const publishedDate = node.publishedDate
          const slug = node.slug
          return (
            <BlogTitle key={slug}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </BlogTitle>
          )
        })}
      </BlogWrapper>
    </Layout>
  )
}

export default BlogPage
