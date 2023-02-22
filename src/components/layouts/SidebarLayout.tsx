import React, { ReactNode, useState } from "react";
import HeroHeader from "../general/HeroHeader";
import Footer from "../Footer";
import EmailListSignupForm from "../email_lists/EmailListSignupForm";

interface PropTypes {
  children: ReactNode;
  highlighted_hero_link: string;
}

const SidebarLayout = ({ highlighted_hero_link, children }: PropTypes) => {
  return (
    <div id="innerBody" className="">
      <div
        style={{ minWidth: 300, minHeight: "100vh" }}
        className="w-full sm:flex sm:flex-row sm:justify-start items-start px-4"
      >
        {/* left panel start */}
        <div
          style={{ width: 350, height: "100vh", minHeight: "100vh" }}
          className="hidden sm:block w-64 mr-4 border-r border-gray-400"
        >
          <div style={{ marginTop: 45 }}></div>
          <div style={{}}>
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>

          <div className="mb-4">
            <EmailListSignupForm />
            <div className="w-full mb-4"></div>
          </div>
        </div>
        {/* left panel end */}

        {/* right panel content start */}
        <div
          style={{ maxWidth: 600 }}
          className="w-full flex flex-col justify-start items-center sm:pl-5 sm:max-w-screen-sm mb-3 mt-10 "
        >
          <div className="w-full sm:hidden">
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>
          {children}
        </div>
        {/* right panel content end */}
      </div>
      <Footer />
    </div>
  );
};

export default SidebarLayout;
