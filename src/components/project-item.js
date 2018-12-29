import React from 'react';
import { Link } from 'gatsby';
import styles from '../pages/index-css.module.css';


const CategoryLabel = (props) => (
  <p className={styles.categoryLabel} style={{color: props.color, background: props.bg}}>{props.tag}</p>
)


class ProjectItem extends React.Component {
  render() {
    return (
      <div>
      <Link to={this.props.path} className={styles.projectContainer} style={{background: this.props.primarycolor}}>
        <p className={styles.projectHeadline}>{this.props.headline}</p>
        <img  className={ styles.projectPreviewImg} src={this.props.previewimg} alt="not loaded"/>
        <ul className={styles.projectMarkup}>
        
        <li>
          <h3 className={styles.projectTitle}>{this.props.title}</h3>
        </li>

        <li>
          <h3>
            { this.props.tags.map((tag) => {
              return <CategoryLabel tag={tag.text} color={tag.color} bg={tag.bg} key={tag.id}/>
            })}
          </h3>
        </li>
        
      </ul>
            
    </Link>
    </div>
    )
  }
}

export default ProjectItem;


