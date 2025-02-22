import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "something_ur_url",
})

export default axiosInstance
