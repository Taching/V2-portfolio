import React from "react"
import API from "../../../utils/API"

class Spotify extends React.Component {
  state = {
    isloading: false,
    lovedtracks: [],
  }

  async componentDidMount() {
    try {
      let musicData = await API.get()
      musicData = musicData.data.lovedtracks.track
      console.log(musicData)
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { isloading, lovedtracks } = this.state

    return <ul>{(console.log(lovedtracks), console.log(isloading))}</ul>
  }
}

export default Spotify
