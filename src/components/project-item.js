import React from 'react';
import { Link } from 'gatsby';
import styles from '../pages/index-css.module.css';


const CategoryLabel = (props) => (
  <p className={styles.projectLabel} style={{color: props.color, background: props.bg}}>{props.tag}</p>
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
        return <CategoryLabel tag={tag.text} color={tag.color} bg={tag.bg} key={tag.id}/>
      })}

    </li>
    )
  }
}

export default ProjectItem;

