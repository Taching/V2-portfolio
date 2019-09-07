// import React from "react"
// import Layout from "@components/Layout"
// import Head from "@components/Head"
// import Profile from "@components/Profile"
// import PropTypes from "prop-types"

// const AboutPage = () => {
//   return (
//     <Layout>
//       <Head title="About" />
//       <Profile />
//     </Layout>
//   )
// }
// export default AboutPage

// AboutPage.prototype = {
//   data: PropTypes.object.isRequired,
// }

// export const query = graphql`
//   query IndexQuery {
//     about: allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/about/" } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             skills
//             avatar {
//               childImageSharp {
//                 fluid(
//                   maxWidth: 700
//                   quality: 90
//                   traceSVG: { color: "#64ffda" }
//                 ) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
