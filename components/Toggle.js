import { useState } from 'react'
import styles from '@/styles/Toggle.module.css'

export const Toggle = ({ toggled, setToggled }) => {
    return (
      <div className={styles.container}>
        <label className={styles.label}>
            <input type="checkbox" defaultChecked={toggled} onClick={() => setToggled(!toggled)} />
            <span />
        </label>
      </div>
    )
}
