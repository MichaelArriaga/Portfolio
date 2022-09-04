import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import real_defaultImage from "../../../static/etc/images/default-image.png";

interface PropTypes {
  title: string;
  description: string;
  path: string;
  date: string | null;
  thumbnail: any;
  readtime: string | null;
  tags: Array<String> | null;
  article: boolean;
}

const SEO = ({
  title,
  description,
  path,
  date,
  thumbnail,
  readtime,
  tags,
  article,
}: PropTypes) => {
  const { site } = useStaticQuery(query);
  //gatsby-config.js
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  }: any = site.siteMetadata;

  // Check environment to get proper url
  const env_siteUrl =
    process.env.NODE_ENV === "development" ? "http://localhost:8000" : siteUrl;

  let seo_image_path;

  if (thumbnail) {
    seo_image_path =
      thumbnail.childImageSharp.gatsbyImageData.images.fallback.src;
  } else {
    seo_image_path = real_defaultImage;
  }

  let seo_url;
  if (path) {
    seo_url = `${env_siteUrl}${path}`;
  } else {
    seo_url = `${env_siteUrl}/`;
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${env_siteUrl}${seo_image_path}`,
    url: seo_url,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
