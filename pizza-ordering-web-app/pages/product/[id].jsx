import { useState } from 'react'
import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addProduct } from '@/redux/cartSlice'

const Product = () => {
    const pizza = {
        id: 1,
        name: 'Burga Pizza',
        image: '/images/Burga.jpg',
        rating: 5,
        price: [20, 30, 40],
        desc: "This is burga pizza",
        Category: "Chicken, Launch, Pizza, Burger",
        Tags: "Healthy, Organic, Chicken, Sauce",
    }
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.price[0]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const changePrice = (number) => {
      setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
      const difference = pizza.price[sizeIndex] - pizza.price[size];
      setSize(sizeIndex);
      changePrice(difference);
    };

    const handleClick = () => {
      dispatch(addProduct({...pizza, price, quantity}));
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.image} objectFit='contain' layout='fill' alt=''></Image>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <p className={styles.desc}>{pizza.Category}</p>
        <p className={styles.desc}>{pizza.Tags}</p>
        <h3 className={styles.choose}>Choose Pizza size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
            <i class="fa-regular fa-heart"></i>
        </div>
        </div>
    </div>
  )
}

export default Product