import { Cookies } from "react-cookie";
export const BASEURL = 'http://localhost:3010/'
const cookies = new Cookies();
export const fileUrl = "http://campaigns.cybermatrixsolutions.com/uploads/sallon/images";
export const selectedToken = cookies.get("aag_user")
  ? cookies.get("aag_user")
  : null;

export const LOCAL_USER = 'aag-user'
