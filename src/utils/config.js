export const BASE_URL = "https://movienew.cybersoft.edu.vn/api/";

export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNSIsIkhldEhhblN0cmluZyI6IjI4LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NTIzMjAwMDAwMCIsIm5iZiI6MTY2MjMxMDgwMCwiZXhwIjoxNjg1Mzc5NjAwfQ.FtGbsXl4qyqTRfJrunro0mQ7b-tNs8EWbhb7JDTzloE';

export const GP05 = 'GP05';

export const USER_LOGIN = "USER_LOGIN";

export const userLocalStorage = {
  set: (userData) => {
    let userJson = JSON.stringify(userData);
    localStorage.setItem(USER_LOGIN, userJson);
  },
  get: () => {
    let userJson = localStorage.getItem(USER_LOGIN);
    if (userJson !== null) {
      return JSON.parse(userJson);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_LOGIN);
  },
};