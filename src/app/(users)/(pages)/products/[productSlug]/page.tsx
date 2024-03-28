import React from "react";
import ProductReview from "./(components)/ProductReview";
import Item1 from "../../../../../../public/item1.svg";
import Item2 from "../../../../../../public/item2.svg";
import Item3 from "../../../../../../public/item3.svg";
import Item4 from "../../../../../../public/item4.svg";
import Item5 from "../../../../../../public/item5.svg";
import Item6 from "../../../../../../public/item6.svg";
import Item7 from "../../../../../../public/item7.svg";
import Product from "./(components)/Product";
import Carousel from "@/app/(components)/Carousel";

const Slides = [
  {
    id: 1,
    url: Item2,
    name: "Gucci Leather Bag",
    price: 17000,
  },
  {
    id: 2,
    url: Item1,
    name: "Nike Air Sneakers",
    price: 17000,
  },
  {
    id: 3,
    url: Item3,
    name: 'Dior 6" heels',
    price: 17000,
  },
  {
    id: 4,
    url: Item6,
    name: "Ego Heels",
    price: 17000,
  },
  {
    id: 5,
    url: Item4,
    name: "Ophidia GG Mediu...",
    price: 17000,
  },
  {
    id: 6,
    url: Item5,
    name: "Nike Sneakers",
    price: 17000,
  },
  {
    id: 7,
    url: Item7,
    name: "Prada spiky shoe",
    price: 17000,
  },
];

interface Props {
  params: any;
}

const ProductDetails = ({ params }: Props) => {
  return (
    <>
      <Product params={params} />
      {/*  */}

      <ProductReview params={params} />
      <Carousel name="You Might Also Like These" slides={Slides} />
    </>
  );
};

export default ProductDetails;
