import React from 'react';
import { Link } from 'gatsby';
import styles from './project-list-css.module.css';


const CategoryLabel = (props) => (
  <p className={styles.projectLabel}>{props.tag}</p>
)

const ProjectListItem = (props) => (
  <Link to={props.path} className={styles.projLink}>{props.title} </Link>
)


class ProjectItem extends React.Component {
  render() {
    return (
      <li className={styles.projectListLi}>
      <ProjectListItem path={this.props.path} title={this.props.title} />
      { this.props.tags.map((tag) => {
        return <CategoryLabel tag={tag} key={tag.key}/>
      })}

    </li>
    )
  }
}

export default ProjectItem;

