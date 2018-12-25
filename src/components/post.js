import React from 'react';
import styles from '../pages/blog-css.module.css';

import { Link } from 'gatsby';




const Post = function(props) {
  return (
    <div>
        <li className={styles.postItem}>
          <Link to={props.path} className={styles.postLink}>
          {props.title}
          </Link>
        <p className={styles.inlineDate}>{props.postdate}</p>
        </li>
    </div>
  )
}

export default Post;