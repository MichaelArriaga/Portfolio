import React from 'react'
import styles from './layout-css-module.module.css'

 const ListItem = (props) => (
   <li>{props.feature}</li>
 )

class FeatureList extends React.Component {
  render() {
    return (
      <ul className={[styles.featureList, styles.primaryRhythm].join(' ')}>

        {this.props.features.map((feature) => {
          return <ListItem feature={feature.feature} key={feature.id} />
        })}
      
      </ul>
    )
  }
}

export default FeatureList;

