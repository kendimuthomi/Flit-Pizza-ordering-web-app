import React from 'react'
import { useState } from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/images/pizza-logo_afsvzn.png" alt='' width={80} height={50} />
      </div>
      <div className={styles.image}>
        <Image src="/images/pizza-header-img_krzjsl.png" alt='' width={150} height={50} />
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`${styles.menuItems} ${isOpen ? styles.showMenu : ''}`}>
        <ul className={styles.list}>
          <Link href='/' passHref>
          <li className={styles.listItem}>HOME</li>
          </Link>
          <Link href='/products' passHref>
            <li className={styles.listItem}>PRODUCTS</li>
          </Link>
          <li className={styles.listItem}>PAGES</li>
          <li className={styles.listItem}>BLOG</li>
          <li className={styles.listItem}>CONTACTS</li>
          <li><i class="fa-solid fa-magnifying-glass"></i></li>
        <Link href='/cart' passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
          <i class="fa-solid fa-cart-shopping"></i>
          <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
        </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar