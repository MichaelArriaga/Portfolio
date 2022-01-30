import React, { useEffect, useState, useContext, useRef } from 'react';
import fonts from '../../constants/font_names';

const Bold = ({ children }) => {
  return <span style={{ fontFamily: fonts.bold }}>{children}</span>;
};

export default Bold;
