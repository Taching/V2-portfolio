import React from "react"
import API from "../../../utils/API"
import Loading from "@components/Loading"
import {
  SpotifyStyle,
  LastFmLogo,
  Toptext,
  Player,
  RepeatIcon,
} from "./style.js"
import SpotifyIcon from "../../Icons/Spotify"
import LastFm from "../../Icons/Lastfm"
import Repeat from "../../Icons/Repeat"
class Spotify extends React.Component {
  state = {
    isLoading: true,
    songList: [],
  }
  async componentDidMount() {
    try {
      let musicData = await API.get()
      musicData = musicData.data.toptracks.track
      this.setState({ songList: musicData, isLoading: false })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { songList, isLoading } = this.state
    return (
      <SpotifyStyle>
        {isLoading ? <Loading isLoading /> : null}
        <LastFmLogo>
          <a href="https://www.last.fm/user/taching/library">
            <LastFm width="40px" height="40px" />
          </a>
        </LastFmLogo>
        <Toptext>
          <a href="https://open.spotify.com/user/tachingers?si=NSdCKhY9S8OKpCMs-i7O1g">
            <p>song that I cant live without this month</p>
            <p>On Repeat in</p>
            <SpotifyIcon width="25px" height="25px" />
          </a>
        </Toptext>
        {songList.slice(0, 5).map((song, index) => (
          <Player key={index}>
            <span>0{index + 1}.</span>
            <ul>
              <li>
                <a href={song.url}>{song.name}</a>
              </li>
              <li className="artist">
                <h4>
                  <a href={song.artist.url}>{song.artist.name}</a>
                </h4>
              </li>
              <li>
                <RepeatIcon>
                  <Repeat width="30px" height="30px" />
                  <span
                    className={`count ${
                      song.playcount < 10 ? "lessdigit" : ""
                    }`}
                  >
                    {song.playcount}
                  </span>
                </RepeatIcon>
              </li>
            </ul>
            {/* <p>{Math.floor(song.duration / 60)}min.</p> */}
          </Player>
        ))}
      </SpotifyStyle>
    )
  }
}

export default Spotify
