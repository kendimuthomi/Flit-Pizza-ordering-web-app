import React from 'react';
import styles from '../styles/Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstList}>
        <h2 className={styles.title}>INFORMATION</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
      <div className={styles.firstList}>
        <h2 className={styles.title}>TOP ITEMS</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Pepperoni</li>
          <li className={styles.listItem}>Swiss Mushroom</li>
          <li className={styles.listItem}>Barbecue Chicken</li>
          <li className={styles.listItem}>Vegeterian</li>
          <li className={styles.listItem}>Ham & Cheese</li>
        </ul>
      </div>
      <div className={styles.firstList}>
        <h2 className={styles.title}>OTHERS</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Checkout</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Locations</li>
          <li className={styles.listItem}>Legal</li>
        </ul>
      </div>
      <div className={styles.firstList}>
        <h2 className={styles.title}>SOCIAL MEDIA</h2>
        <div className={styles.icons}>
          <i className={`fab fa-facebook-f ${styles['facebook-icon']}`}></i>
          <i className={`fab fa-pinterest-p ${styles['pinterest-icon']}`}></i>
          <i className={`fab fa-twitter ${styles['twitter-icon']}`}></i>
          <i className={`fab fa-instagram ${styles['instagram-icon']}`}></i>
        </div>
        <p className={styles.signupDesc}>Signup and get exclusive offers and coupon codes</p>
        <button className={styles.signBtn}>SIGN UP</button>
      </div>
    </div>
  )
}

export default Footer