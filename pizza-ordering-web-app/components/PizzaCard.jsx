import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image';

const PizzaCard = ({ pizza }) => {
    const { name, image, rating, price } = pizza;
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<span key={i}>&#9733;</span>); // Adding filled star
      }
      if (rating % 1 !== 0) {
        stars.push(<span key={stars.length}>&#9734;</span>); // Adding half star if needed
      }
      return stars;
    };
  return (
    <div className={styles.pizzaCard}>
      <div className={styles.pizzaImage}>
        <Image src={image} alt={name} width={300} height={300} />
      </div>
      <div className={styles.pizzaDetails}>
        <div className={styles.namePrice}>
        <h2 className={styles.pizzaName}>{name}</h2>
        <div className={styles.pizzaPrice}>${price}</div>
        </div>
        <div className={styles.pizzaRating}>{renderStars()}</div>
      </div>
      <div className={styles.order}>
        <Image src="/images/white-cart.png" alt='' width={24} height={24} />
        <div className={styles.text}>ORDER NOW</div>
      </div>
    </div>
  )
}

export default PizzaCard