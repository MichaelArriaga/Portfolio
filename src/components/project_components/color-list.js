import React from 'react'
import styles from './layout-css-module.module.css'

 const ListItem = (props) => (
  <li className={styles.colorListItem}>
    <div className={styles.colorBlock} style={{background: props.hexcode, color: props.labelcolor}}>
        <p>{props.label}</p>
        <p>{props.hexcode}</p>
    </div>
</li>
 )

 class ColorList extends React.Component {
   render() {
     return (
      <div>
      <ul className={[styles.colorList, styles.primaryRhythm].join(' ')} >
          {this.props.colors.map((color) => {
            return <ListItem label={color.label} labelcolor={color.labelcolor} hexcode={color.hexcode} />
          })}
      </ul>
      </div>
     )
   }
 }

export default ColorList;
