import React, { ReactNode, useState } from "react";
import HeroHeader from "../general/HeroHeader";

interface PropTypes {
  children: ReactNode;
  highlighted_hero_link: string;
}

const SidebarLayout = ({ highlighted_hero_link, children }: PropTypes) => {
  return (
    <div id="innerBody" className="">
      <div
        style={{}}
        className="w-full flex flex-col justify-start items-center md:flex-row md:justify-start md:items-start"
      >
        {/* left panel start */}
        <div
          style={{}}
          className="hidden md:block border-r min-w-[400px] max-w-[500px] h-screen  border-gray-400 px-4"
        >
          <div style={{}} className="mt-8 md:mt-14">
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>
        </div>
        {/* left panel end */}

        {/* right panel content start */}
        <div className="w-full flex max-w-[500px] flex-col justify-start items-center md:max-w-screen-sm mt-16 px-6">
          <div className="w-full md:hidden">
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>
          {children}
        </div>
        {/* right panel content end */}
      </div>
    </div>
  );
};

export default SidebarLayout;
