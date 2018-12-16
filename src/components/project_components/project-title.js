import React from 'react'
import styles from '../project_components/layout-css-module.module.css';

export default (props) => (
    <div className={styles.primaryRhythm}>
    <h1 className={styles.projectH1}>{props.title}</h1>
    <h2 className={styles.projectH2}>{props.timeframe}</h2>
    </div>
)