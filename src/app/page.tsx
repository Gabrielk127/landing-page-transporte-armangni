"use client";

import Header from "@/components/Sections/Header";
import SectionOne from "@/components/Sections/SectionOne";
import SectionTwo from "@/components/Sections/SectionTwo";
import SectionThree from "@/components/Sections/SectionThree";
import SectionFour from "@/components/Sections/SectionFour";

export default function Home() {
  return (
    <div className="bg-[#001725]">
      <div className="min-h-screen ">
        <Header />
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 ">
          <SectionOne />
        </div>
        <div className="bg-[#001725]">
          <SectionTwo />
        </div>

        <div className="bg-[#001725]">
          <SectionThree />
        </div>

        <div className=" bg-gray-900">
          <SectionFour />
        </div>
      </div>
    </div>
  );
}
