import React from 'react'
import styles from '../styles/CustomerCard.module.css'
import Image from 'next/image'

const CustomerCard = ({ comment }) => {
    const { image, name, review } = comment;
  return (
    <div className={styles.customerReview}>
        <div className={styles.customerImage}>
            <Image src={image} alt={name} width={150} height={150} className={styles.img}/>
        </div>
        <div className={styles.customerInfo}>
            <h3 className={styles.customerName}>{name}</h3>
            <p className={styles.customerComment}>{review}</p>
        </div>
    </div>
  )
}

export default CustomerCard