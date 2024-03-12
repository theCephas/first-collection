"use client";
import React, { useEffect, useState } from "react";

export const useHideLayout = () => {
  const [hide, setHide] = useState(false);
  const route = window?.location.pathname;

  useEffect(() => {
    if (route.includes("/auth")) {
    } else {
      setHide(false);
    }
  }, [route]);

  return { hide };
};
