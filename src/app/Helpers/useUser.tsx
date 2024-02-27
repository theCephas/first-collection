"use client";
import React, { useCallback, useEffect } from "react";
import { getToken } from "./Helpers";
import { Fetch } from "./Fetch";

const csrfToken =
  "FfZcTHEVY2KcYoWknhgtHPZH8rTTAfF7auI3kFNxMoFu1J9kHqi7rG0JTJjByzW8";

type user = {
  email: string;
  firstName: string;
  lastName: string;
  token?: string;
};

export const useUser = () => {
  const [user, setUser] = React.useState<user | null>(null);
  const fetchUser = useCallback(async () => {
    const { token } = getToken();

    try {
      const data = await Fetch("accounts/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
          Authorization: `Bearer ${token}`,
        },
      });

      const [firstName, lastName] = data.full_name.split("_");

      const userInfo = { email: data.email, firstName, lastName, token };

      setUser(userInfo);
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return user;
};
