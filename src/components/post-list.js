import React from 'react';

import styles from '../pages/blog-css.module.css';



const PostList = function(props) {
  return (
    <div>
      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>{props.sectiontitle}</h3>
          <ul>
          { props.children }
          </ul>
    </section>
    </div>
  )
}


export default PostList;