import axios from "axios";
import { API_URL, API_KEY } from "../Constant";

class MovieApiService {
  static movieDetails(title, year) {
    return axios.get(`${API_URL}?t=${title}&y=${year}&apikey=${API_KEY}`);
  }
}
export default MovieApiService;
