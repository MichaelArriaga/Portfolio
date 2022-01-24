import React from 'react';
import { Link } from 'gatsby';
import mikeiconalt from '../../static/etc/images/icons/mike-icon-alt.png';

const ResponsiveHeader = () => (
  <div className={''} style={{ marginBottom: '40px' }}>
    <Link to="/">
      <img className={''} src={mikeiconalt} alt="not loaded" />
    </Link>
    <ul>
      <li className={''}>
        <Link to="/" className={''} activeClassName={''}>
          HOME
        </Link>
      </li>
      <li className={''}>
        <Link to="/about" className={''} activeClassName={''}>
          ABOUT
        </Link>
      </li>
      <li className={''}>
        <Link to="/blog" className={''} activeClassName={''}>
          BLOG
        </Link>
      </li>
      <li className={''}>
        <Link to="/contact" className={''} activeClassName={''}>
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
);

export default ResponsiveHeader;
