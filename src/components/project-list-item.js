import React from 'react';
import { Link } from 'gatsby';
import styles from '../components/project-list-item-css.module.css';

const CategoryLabel = (props) => (
    <p className={styles.projectLabel}>{props.tag}</p>
)

const ProjectListItem = (props) => (
    <Link to="/" className={styles.projLink}>{props.title} </Link>
)


// export default ProjectListItem;
// export default CategoryLabel;

export {
  ProjectListItem,
  CategoryLabel
}