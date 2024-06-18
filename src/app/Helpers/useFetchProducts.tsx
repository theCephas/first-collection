import React, { useCallback, useEffect, useState } from "react";
import { Fetch } from "./Fetch";
const csrfToken =
  "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await Fetch("products/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
        },
      });

      if (data.detail || data.email || data.password) {
        throw new Error(
          data.detail
            ? data.detail
            : data.email
            ? data.email[0]
            : data.password
            ? data.password[0]
            : ""
        );
      }

      setProducts(data);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading };
};
