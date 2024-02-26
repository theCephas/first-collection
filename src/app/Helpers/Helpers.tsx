const setCookie = (data: any) => {
  document.cookie = `token=${data.access}; path=/;`;
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
  const accesToken = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));

  const token = accesToken?.replace("token=", "");

  return token;
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
