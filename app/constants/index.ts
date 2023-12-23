import { Cookies } from "react-cookie";
export const BASEURL = 'http://localhost:3010/'
export const fileUrl = "http://campaigns.cybermatrixsolutions.com/uploads/sallon/images";
export const LOCAL_USER = 'aag-user'
export const getCookieUser = () => {
  const cookies = new Cookies();
  return cookies.get("aag_user") ?? null
}


