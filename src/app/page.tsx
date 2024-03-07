"use client";
import Herosection from "./components/herosection";
import Handpicked from "./components/handpickedforu";
import PageWrapper from "./components/PageWrapper";
import ProductsHero from "./products/(components)/ProductsHero";
import Newarrivals from "./components/newarrivals";
import Testimonials from "./components/testimonials";
import Subscription from "./components/subscription";

export default function Home() {
  return (
    // <PageWrapper>
    <>
      <div className="bg-[#fffafa]">
        <Herosection />
      </div>
      <Handpicked />
      <ProductsHero />
      <Newarrivals />
      <Testimonials />
      <Subscription />
    </>
    // </PageWrapper>
  );
}
