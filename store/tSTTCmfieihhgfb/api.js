import axios from "axios"
import {
  TST_TC473_MFIEIHHGFB_PASSWORD,
  TST_TC473_MFIEIHHGFB_USERNAME
} from "react-native-dotenv"
const tSTTCmfieihhgfb = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_MFIEIHHGFB_PASSWORD,
    password: TST_TC473_MFIEIHHGFB_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473mfieihhgfb_get_getUserDetails_read(payload) {
  return tSTTCmfieihhgfb.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473mfieihhgfb_get_getUserDetails_read }
