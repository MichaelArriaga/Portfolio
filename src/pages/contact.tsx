import React from "react";
import SidebarLayout from "../components/layouts/SidebarLayout";
const Contact = () => {
  return (
    <SidebarLayout
      meta_title="Mike Arriaga Contact"
      meta_description="Mike Arriaga Contact"
      highlighted_hero_link="contact"
    >
      <div style={{ marginBottom: 150 }} className="">
        <h2 className={"text-xl font-bold mb-2 font-bold antialiased"}>
          /Contact
        </h2>

        <p
          className={
            "text-lg sm:text-xl mb-2 text-gray-900 font-normal antialiased"
          }
        >
          Contact me
        </p>
      </div>
    </SidebarLayout>
  );
};
export default Contact;
