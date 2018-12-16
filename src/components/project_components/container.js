import React from 'react'
import styles from './layout-css-module.module.css'

const Container = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

export default Container;