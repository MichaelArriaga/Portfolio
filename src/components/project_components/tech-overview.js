import React from 'react'
import styles from './layout-css-module.module.css';



export default (props) => (
    <ul className={styles.techOverview}>
        <li className={styles.techListHeading}>{props.heading}</li>
        <li className={styles.techListItem}>{props.listitem1}</li>
        <li className={styles.techListItem}>{props.listitem2}</li>
    </ul>
)