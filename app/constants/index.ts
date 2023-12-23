import { Cookies } from "react-cookie";
export const BASEURL = 'http://localhost:3010/'
export const getCookieUser = () => {
  const cookies = new Cookies();
  return cookies.get("aag_user") ?? null
}
export const fileUrl =
  "http://campaigns.cybermatrixsolutions.com/uploads/sallon/images";

