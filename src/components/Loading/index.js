import React from "react"
import { BarLoader } from "react-spinners"
import { Spinner } from "./style.js"

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  render() {
    return (
      <Spinner>
        <BarLoader
          size={50}
          color={"#00CC83"}
          isLoading={this.state.isLoading}
        />
      </Spinner>
    )
  }
}
export default Loading
