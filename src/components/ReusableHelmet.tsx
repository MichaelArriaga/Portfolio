import React from "react";
import { Helmet } from "react-helmet";
import defaultImage from "../../static/etc/images/default-image.png";

const ReusableHelmet = ({ title, description }: any) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  );
};

export default ReusableHelmet;
