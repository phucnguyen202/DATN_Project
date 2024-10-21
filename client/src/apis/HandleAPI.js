
import axiosClient from "./AxiosClient"

const handleAPI = async (url, data, method) => {
  console.log("url::", url)
  return await axiosClient(url, {
    method: method ?? 'get',
    data
  })
}

export default handleAPI