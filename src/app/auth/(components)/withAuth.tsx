import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getToken } from "../../Helpers/Helpers";

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
      const userToken = getToken();

      if (userToken?.split("=")[1] && path.includes("/auth")) {
        router.push("/dashboard/overview");
      }

      if (!userToken?.split("=")[1] && path.includes("/dashboard")) {
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
