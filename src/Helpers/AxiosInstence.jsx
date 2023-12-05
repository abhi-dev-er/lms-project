import axios from "axios";

const BASE_URL = "http//localhost:5014/api/vi";

const axiosInstence = axios.create();

axiosInstence.defaults.baseURL = BASE_URL;
axiosInstence.defaults.withCredentials = true;

export default axiosInstence;
