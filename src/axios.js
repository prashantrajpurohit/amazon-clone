import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-3802e/us-central1/api", //THE API (CLOUD FUNCTION) URL
});
export default instance;
