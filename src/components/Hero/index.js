import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
