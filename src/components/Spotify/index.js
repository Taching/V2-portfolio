import React from "react"
import axios from "axios"

class Spotify extends React.Component {
  state = {
    isloading: false,
    lovedtracks: [],
  }

  async componentDidMount() {
    const api_key = "d2e7b4782af9031eeff315ab481672b6"
    const user = "taching"
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${user}&api_key=${api_key}&format=json`
      )
      .then(res => {
        const lovedtracks = res.data.lovedtracks.track
        this.setState({ isloading: !isloading, lovedtracks })
        console.log(this.state.isloading)
      })
  }
  render() {
    const { isloading, lovedtracks } = this.state

    return <ul>{(console.log(lovedtracks), console.log(isloading))}</ul>
  }
}

export default Spotify
