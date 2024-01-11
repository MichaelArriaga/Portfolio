import React from "react";
import { Link } from "gatsby";

type PropTypes = {
  name: string;
  technologies: string[];
  to: string;
  externalLink: boolean;
  latest?: boolean;
};

type LinkTypes = {
  to: string;
  name: string;
  latest?: boolean;
};

const ProjectItem: React.FC<PropTypes> = ({
  name,
  technologies,
  to,
  externalLink,
  latest,
}): JSX.Element => {
  return (
    <div className={"md:max-w-xl mx-auto mb-2"}>
      {externalLink ? (
        <ExternalLink to={to} name={name} latest={latest} />
      ) : (
        <InternalLink to={to} name={name} latest={latest} />
      )}
    </div>
  );
};

export default ProjectItem;

const ExternalLink: React.FC<LinkTypes> = ({ to, name, latest }) => {
  return (
    <a
      href={to}
      className="relative flex items-center justify-start mb-1"
      target={"_blank"}
      rel={"noreferer"}
    >
      <h3
        style={{ lineHeight: 1 }}
        className={
          "text-2xl text-gray-900 text-left flex flex-wrap justify-start underline items-center font-medium antialiased mb-1"
        }
      >
        <span className="mr-2">{name}</span>
      </h3>
    </a>
  );
};

const InternalLink: React.FC<LinkTypes> = ({
  to,
  name,
  latest,
}): JSX.Element => {
  return (
    <Link to={to} className="relative flex items-center justify-start mb-1">
      <h3
        style={{ lineHeight: 1 }}
        className={
          "text-2xl text-gray-900 text-left flex flex-wrap justify-start underline items-center font-medium antialiased mb-1"
        }
      >
        <span className="mr-2">{name}</span>
      </h3>
    </Link>
  );
};

const NewTag: React.FC = (): JSX.Element => {
  return (
    <h3
      style={{
        fontSize: 13,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        transform: "rotate(10deg)",
        position: "absolute",
        left: 340,
        bottom: 20,
      }}
      className="cursor-default tracking-tighter antialiased font-black text-white rounded bg-gray-800"
    >
      NEW!
    </h3>
  );
};

const TechTag: React.FC<{ name: string }> = ({ name }): JSX.Element => {
  return (
    <h3
      style={{
        fontSize: 13,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: "#76d3ca",
      }}
      className="cursor-default text-xs antialiased font-semibold text-gray-900 px-1 mr-1 rounded"
    >
      {name}
    </h3>
  );
};
