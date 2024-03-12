"use client";
import Herosection from "./components/herosection";
import Handpicked from "./components/handpickedforu";
import PageWrapper from "./components/PageWrapper";
import Newarrivals from "./components/newarrivals";
import Testimonials from "./components/testimonials";
import Subscription from "./components/subscription";
import ProductsHero from "./(users)/(pages)/products/(components)/ProductsHero";

export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-[#fffafa]">
        <Herosection />
      </div>
      <Handpicked />
      <ProductsHero />
      <Newarrivals />
      <Testimonials />
      <Subscription />
    </PageWrapper>
  );
}
