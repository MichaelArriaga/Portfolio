import React, { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

const Bold = ({ children }: PropTypes) => {
  return <span className="font-bold">{children}</span>;
};

export default Bold;
