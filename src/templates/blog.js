import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "@components/BlogLayout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "@components/Head"
import { CoverContainer, Contents } from "../styles/BlogStyle"

//TODO reading time in blog
// const readingTime = require("reading-time")

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MM.DD.YY")
      cover {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <BlogLayout>
      <Head title={props.data.contentfulBlogPost.title} />
      <CoverContainer>
        <img alt="cover" src={props.data.contentfulBlogPost.cover.file.url} />
      </CoverContainer>
      <Contents>
        <h4>{props.data.contentfulBlogPost.publishedDate}</h4>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </Contents>
    </BlogLayout>
  )
}

export default Blog
