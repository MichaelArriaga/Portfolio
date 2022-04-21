import React from "react";
import { Helmet } from "react-helmet";
import defaultImage from "../../static/etc/images/default-image.png";

const envSiteBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://mike-ray.netlify.app";

const ReusableHelmet = ({ title, description }: any) => {
  const imageUrl = `${envSiteBaseUrl}${defaultImage}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default ReusableHelmet;
