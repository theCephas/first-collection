"use client";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { getToken } from "../../Helpers/Helpers";

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const { token } = getToken();
      if (!token) {
        router.push("/auth/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const wrappedComponent = React.createElement(WrappedComponent, props);
    return wrappedComponent;
  };

  return Wrapper;
};

export default withAuth;
