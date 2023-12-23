export const BASEURL = 'http://localhost:3010/';
export const fileUrl = 'http://campaigns.cybermatrixsolutions.com/uploads/sallon/images';
export const LOCAL_USER = 'aag-user';

export const setData = (name: string, data: any) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(name, data);
  }
};

export const getData = (name: string) => {
  if (typeof window !== 'undefined') {
    const data = window.localStorage.getItem(name);
    return data || null;
  }
  return null;
};

export const removeData = (name: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(name);
  }
};
