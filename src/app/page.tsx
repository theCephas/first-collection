import Image from "next/image";
import Header from "./components/header";
import Herosection from "./components/herosection";
import Handpicked from "./components/handpickedforu";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-[#fffafa]">
        <Herosection />
      </div>
      <Handpicked />
    </PageWrapper>
  );
}
