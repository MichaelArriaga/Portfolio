import { Link } from 'gatsby';
import mikeicon from '../../static/etc/images/icons/mike-icon.png';
import React from 'react';

const Header = () => (
  <div className={''}>
    <ul>
      <li className={''}>
        <Link to="/" className={''}>
          <img src={mikeicon} alt="not loaded" />
        </Link>
      </li>
      <li className={''}>
        <Link to="/contact" className={''} activeClassName={''}>
          Contact
        </Link>
      </li>
      <li className={''}>
        <Link to="/blog" className={''} activeClassName={''}>
          Blog
        </Link>
      </li>
      <li className={''}>
        <Link to="/about" className={''} activeClassName={''}>
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
