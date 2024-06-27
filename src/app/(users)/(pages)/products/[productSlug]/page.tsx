"use client";
import React, { useCallback, useEffect, useState } from "react";
import ProductReview from "./(components)/ProductReview";
import Product from "./(components)/Product";
import Carousel from "@/app/(components)/Carousel";
import { Fetch } from "@/app/Helpers/Fetch";

interface Props {
  params: any;
}

const ProductDetails = ({ params }: Props) => {
  const [productDetails, setProductDetails] = useState<{} | null>(null);
  const csrfToken =
    "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";

  const fetchProductDetails = useCallback(async () => {
    try {
      const data = await Fetch(`products/${params.productSlug}/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
        },
      });

      // console.log(data);
      setProductDetails(data);
    } catch (err: any) {
      console.log(err);
    }
  }, [params]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  return (
    <>
      <Product productDetails={productDetails} />
      {/*  */}

      <ProductReview productDetails={productDetails} />
      <Carousel name="You Might Also Like These" />
    </>
  );
};

export default ProductDetails;
