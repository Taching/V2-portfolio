import React from "react"
import API from "../../../utils/API"
import { SpotifyStyle, Player } from "./style.js"
class Spotify extends React.Component {
  state = {
    isLoading: false,
    songList: [],
  }

  async componentDidMount() {
    try {
      let musicData = await API.get()
      musicData = musicData.data.toptracks.track
      this.setState({ songList: musicData, isLoading: true })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { songList, isLoading } = this.state
    console.log(songList)
    return (
      <SpotifyStyle>
        {isLoading
          ? songList.slice(0, 3).map((song, index) => (
              <Player key={index}>
                <p>0{index + 1}.</p>
                <ul>
                  <li>
                    <a href={song.url}>{song.name}</a>
                  </li>
                  <li>
                    <h4>
                      <a href={song.artist.url}>{song.artist.name}</a>
                    </h4>
                  </li>
                  <li>
                    repeat: <span>{song.playcount}</span>
                  </li>
                </ul>
                {/* <p>{Math.floor(song.duration / 60)}min.</p> */}
              </Player>
            ))
          : null}
      </SpotifyStyle>
    )
  }
}

export default Spotify
