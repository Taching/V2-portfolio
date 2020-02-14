import axios from "axios"

const api_key = "d2e7b4782af9031eeff315ab481672b6"
const user = "taching"

export default axios.create({
  baseURL: `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${api_key}&format=json`,
  responseType: "json",
})
