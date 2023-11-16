import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/images/pizza-logo_afsvzn.png" alt='' width={50} height={50} />
      </div>
      <div className={styles.image}>
        <Image src="/images/pizza-header-img_krzjsl.png" alt='' width={100} height={50} />
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HOME</li>
          <li className={styles.listItem}>PRODUCTS</li>
          <li className={styles.listItem}>PAGES</li>
          <li className={styles.listItem}>BLOG</li>
          <li className={styles.listItem}>CONTACTS</li>
          <Image src="/images/search_icon.png" alt='' width={32} height={32} />
        </ul>
        <div className={styles.item}>
          <div className={styles.cart}>
          <Image src="/images/cart_item_sale_icon.png" alt='' width={32} height={32} />
          <div className={styles.counter}>0</div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar