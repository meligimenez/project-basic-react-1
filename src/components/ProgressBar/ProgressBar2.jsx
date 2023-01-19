import React from 'react'
import styles from './styles.module.css'

export const ProgressBar2 = ({ now, label }) => {
  return (
    <div/*  className='progressContainer' */ className={styles.progressContainer}>
      <span className={styles.bar} style={{ width: `${now}%` }}></span>
      <span className={styles.number}>{label}</span>
    </div>
  )
}

export default ProgressBar2