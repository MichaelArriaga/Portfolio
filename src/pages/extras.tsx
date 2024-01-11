import React from "react";
import SidebarLayout from "../components/layouts/SidebarLayout";

const Extras = () => {
  return (
    <SidebarLayout
      meta_title="Mike Ray Arriaga, Product Engineer - Extras"
      meta_description="Mike Ray Arriaga, Product Engineer - Extras"
      highlighted_hero_link={"extras"}
    >
      <div className="md:max-w-screen-sm mx-auto">
        <h3 className="text-lg text-gray-900 mb-3 md:mb-5 font-bold antialiased">
          My Extras
        </h3>
      </div>
    </SidebarLayout>
  );
};

export default Extras;
