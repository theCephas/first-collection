"use client";

import React from "react";
import Item1 from "../../../public/item1.svg";
import Item2 from "../../../public/item2.svg";
import Item3 from "../../../public/item3.svg";
import Item4 from "../../../public/item4.svg";
import Item5 from "../../../public/item5.svg";
import Item6 from "../../../public/item6.svg";
import Item7 from "../../../public/item7.svg";
import Image from "next/image";
import ProductCard from "../productcard/ProductCard";

const Handpicked: React.FC = () => {
  return (
    <div className="pl-8 lg:pl-10 ">
      <div>
        <p>Handpicked for you</p>
      </div>
      <div className="py-5">
        <ProductCard imageSrc={Item1} name="Nike Air Sneakers" price={17000} />
      </div>
    </div>
  );
};

export default Handpicked;
