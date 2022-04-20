import React from "react";
import { Helmet } from "react-helmet";
import defaultImage from "../../static/etc/images/default-image.png";

const env_siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://mike-ray.netlify.app";

const ReusableHelmet = ({ title, description }: any) => {
  const imageUrl = `${env_siteUrl}/${defaultImage}`;
  console.log("imageUrl:", imageUrl);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default ReusableHelmet;
