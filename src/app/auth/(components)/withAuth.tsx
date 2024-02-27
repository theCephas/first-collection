"use client";
import { useRouter } from "next/navigation";

import React, { useCallback, useEffect } from "react";
import { getToken } from "../../Helpers/Helpers";
import { Fetch } from "@/app/Helpers/Fetch";

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    const csrfToken =
      "FfZcTHEVY2KcYoWknhgtHPZH8rTTAfF7auI3kFNxMoFu1J9kHqi7rG0JTJjByzW8";

    const autoLogin = useCallback(async () => {
      const { refresh, token, persist } = await getToken();

      if (token) return;

      if ((await refresh) && persist) {
        try {
          const data = await Fetch("accounts/token/refresh/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              "X-CSRFToken": csrfToken,
            },
            body: { refresh },
          });

          if (data?.access) {
            document.cookie = `token=${data.access}; expires=${new Date(
              new Date().getTime() + 7200 * 1000
            ).toUTCString()}; path=/;`;

            window.location.reload();
          }
        } catch (err: any) {}
      }
    }, []);

    useEffect(() => {
      autoLogin();
    }, [autoLogin]);

    const { token, refresh } = getToken();
    useEffect(() => {
      if (token && window.location.pathname === "/auth/login") {
        router.push("/products");
      }
      if (!token) {
        router.push("/auth/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const wrappedComponent = React.createElement(WrappedComponent, props);
    return wrappedComponent;
  };

  return Wrapper;
};

export default withAuth;
