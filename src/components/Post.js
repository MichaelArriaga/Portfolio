import React from 'react';
import * as styles from '../pages/blog-css.module.css';

import { Link } from 'gatsby';

const Post = function ({ path, title, postdate }) {
  return (
    <div>
      <li className={styles.postItem}>
        <Link to={path} className={styles.postLink}>
          {title}
        </Link>
        <p className={styles.inlineDate}>{postdate}</p>
      </li>
    </div>
  );
};

export default Post;
