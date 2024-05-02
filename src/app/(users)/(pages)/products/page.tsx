"use client";
import React, { useCallback, useEffect, useState } from "react";
import ProductsHero from "./(components)/ProductsHero";
import FilterSection from "./(components)/FilterSection";
import ProductCard from "@/app/(components)/ProductCard";
import { Fetch } from "@/app/Helpers/Fetch";
import Pagination from "./(components)/Pagination";

const Products = () => {
  const [pageNum, setPageNum] = useState(1);
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState([]);
  const csrfToken =
    "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";
  const numPages = Math.ceil(products.length / 25);
  const paginationNums: number[] = Array.from(
    { length: numPages },
    (_, index) => index + 1
  );
  const startindex = (pageNum - 1) * 25;

  useEffect(() => {
    setProductsPerPage(products.slice(startindex, pageNum * 25));
  }, [products, pageNum, startindex]);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await Fetch("products/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
        },
      });

      setProducts(data);
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <ProductsHero />
      <section className="mt-12 max-w-[67.5rem] mx-auto flex flex-col lg:grid lg:grid-cols-6 gap-6 px-6 xl:px-0">
        <FilterSection />
        <aside className="col-span-5 flex flex-col items-center mb-14">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-fit gap-6">
            {productsPerPage.length > 0
              ? productsPerPage.map((item: any, i) => (
                  <ProductCard
                    key={i + 1}
                    classes={""}
                    imageSrc={`https://first-collectionz.onrender.com${
                      item.image || ""
                    }`}
                    name={item.name?.toUpperCase()}
                    price={item.price}
                    id={item.id}
                  />
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <div key={num} className="px-[0.5rem] max-w-[300px] w-[100%]">
                    <div className="w-[100%] h-[150px] md:h-[170px] lg:h-[220px] animate-pulse bg-gray-300 rounded-[1rem]"></div>
                  </div>
                ))}
          </div>

          {/* Pagination */}
          {products.length > 0 && (
            <Pagination
              pageNum={pageNum}
              setPageNum={setPageNum}
              paginationNums={paginationNums}
            />
          )}
        </aside>
      </section>
    </>
  );
};
export default Products;
