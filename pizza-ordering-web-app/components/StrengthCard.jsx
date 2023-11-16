import React from 'react'
import styles from '../styles/StrengthCard.module.css'
import Image from 'next/image';

const StrengthCard = ({ strength }) => {
    const { image, title, paragraph } = strength;
  return (
    <div className={styles.strengthCard}>
        <div className={styles.strengthImage}>
        <Image src={image} alt={title} width={32} height={32} />
        </div>
        <div className={styles.strengthDesc}>
            <h3 className={styles.descTitle}>{title}</h3>
            <p className={styles.desc}>{paragraph}</p>
        </div>
    </div>
  )
}

export default StrengthCard