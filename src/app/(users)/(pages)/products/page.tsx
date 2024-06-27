"use client";
import React, { useEffect, useState } from "react";
import ProductsHero from "./(components)/ProductsHero";
import FilterSection from "./(components)/FilterSection";
import ProductCard from "@/app/(components)/ProductCard";
import Pagination from "./(components)/Pagination";
import { useFetchProducts } from "@/app/Helpers/useFetchProducts";
import { PackageX } from "lucide-react";

const Products = () => {
  const [pageNum, setPageNum] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState([]);
  const { products, isLoading }: { products: any; isLoading: boolean } =
    useFetchProducts();
  const numPages = Math.ceil(products.length / 25);
  const paginationNums: number[] = Array.from(
    { length: numPages },
    (_, index) => index + 1
  );
  const startindex = (pageNum - 1) * 25;

  useEffect(() => {
    // console.log(products);
    setProductsPerPage(products.slice(startindex, pageNum * 25));
  }, [products, pageNum, startindex]);

  const filterByPrice = (text: string) => {
    const avg = Math.ceil(products.length * 0.3);

    const prices = products;

    prices.sort((a: any, b: any) => a.price - b.price);

    if (text === "lowest") {
      const lowestPrices = prices.slice(0, avg);
      setProductsPerPage(lowestPrices.slice(startindex, pageNum * 25));
    }

    if (text === "highest") {
      const topPrices = prices.slice(-avg).reverse();
      setProductsPerPage(topPrices.slice(startindex, pageNum * 25));
    }
  };

  return (
    <>
      <ProductsHero />
      <section className="mt-12 max-w-[67.5rem] mx-auto flex flex-col lg:grid lg:grid-cols-6 gap-6 px-6 xl:px-0">
        <FilterSection filter={filterByPrice} />
        <aside className="col-span-5 flex flex-col items-center mb-14">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-fit gap-6">
            {productsPerPage.length > 0 ? (
              productsPerPage.map((item: any, i) => (
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
            ) : isLoading ? (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="px-[0.5rem] max-w-[300px] w-[100%]">
                  <div className="w-[100%] h-[150px] md:h-[170px] lg:h-[220px] animate-pulse bg-gray-300 rounded-[1rem]"></div>
                </div>
              ))
            ) : (
              <div className="mt-12 flex flex-col gap-8 items-center col-span-5 text-orange-600 text-xl">
                <PackageX size={200} />
                <span>We are Out of Stocks</span>
              </div>
            )}
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
