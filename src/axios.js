import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-react-f6828.cloudfunctions.net/api",
  // "http://localhost:5001/react-f6828/us-central1/api",
});

export default instance;
