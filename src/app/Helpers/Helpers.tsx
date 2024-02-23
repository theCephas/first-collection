const setCookie = (data: any) => {
  document.cookie = `token=${data.user.token}; path=/;`;
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
  const token = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));
  return token;
};

// export const Token = () => {
//   const token = document?.cookie?.substring("token=".length);
//   localStorage.setItem("token", token);
//   if (!token) window.location.href = "/auth/login";
//   return token;
// };
