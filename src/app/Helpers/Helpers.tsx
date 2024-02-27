const setCookie = (data: any) => {
  document.cookie = `token=${data.access}; expires=${new Date(
    new Date().getTime() + 7200 * 1000
  ).toUTCString()}; path=/;`;

  document.cookie = `refresh=${data.refresh}; expires=${new Date(
    new Date().getTime() + 30 * 24 * 3600 * 1000
  ).toUTCString()}; path=/;`;
};
export { setCookie };

export const clearCookie = () => {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
};

export const getToken = () => {
  const cookiesArray = document.cookie.split(";");

  const tokens: any = {};
  cookiesArray.forEach(function (cookie) {
    const [cookieName, cookieValue] = cookie.trim().split("=");

    tokens[cookieName] = cookieValue;
  });

  return tokens;
};

export const isEmpty = (param: string | null | any) =>
  param === null || typeof param === "undefined" || param.length == 0;

export const isValidEmail = (str: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
};

export const validPassword = (str: string) => {
  if (
    str.length >= 8 &&
    /\d/.test(str) &&
    (/[!@#$%^&*]/.test(str) || /[A-Z]/.test(str))
  ) {
    return true;
  } else return false;
};
