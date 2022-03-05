import React from "react";
import SidebarLayout from "../components/layouts/SidebarLayout";
import fonts from "../constants/font_names";

const Extras = () => {
  return (
    <SidebarLayout
      meta_title="Mike Ray, Seattle Product Engineer - Extras"
      meta_description="Mike Ray, Seattle Product Engineer Web Developer - Extras"
      highlighted_hero_link={"extras"}
    >
      <div className="sm:max-w-screen-sm mx-auto">
        <h3
          style={{ fontFamily: fonts.bold }}
          className="text-lg text-gray-900 mb-3 sm:mb-5"
        >
          My Extras
        </h3>
      </div>
    </SidebarLayout>
  );
};

export default Extras;
