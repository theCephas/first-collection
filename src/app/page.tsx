import Image from "next/image";
import Header from "./components/header";
import Herosection from "./components/herosection";
import Handpicked from "./components/handpickedforu";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="bg-[#fffafa]">
        <Header />
        <Herosection />
      </div>
      <Handpicked />
    </main>
  );
}
