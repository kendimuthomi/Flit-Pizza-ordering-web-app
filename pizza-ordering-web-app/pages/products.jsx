import React from 'react';
import { useState } from 'react';
import PizzaCard from '@/components/PizzaCard';
import PizzaList from '@/components/PizzaList';
import styles from '../styles/Products.module.css'
import Image from 'next/image';
import { TbMenuDeep } from "react-icons/tb";
import { MdClose } from "react-icons/md";

const Products = () => {
    const [priceFilter, setPriceFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filteredPizzas, setFilteredPizzas] = useState(PizzaList);
    const [isVisible, setIsVisible] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const hideButton = () => {
        setIsVisible(false);
    };
    const filterPizzas = () => {
        const filtered = PizzaList.filter(pizza => pizza.price <= priceFilter);
        setFilteredPizzas(filtered);
  };

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        <div className={styles.top}>
      <div>
        {isVisible && (
            <button onClick={() => { filterPizzas(); toggleSidebar(); hideButton() }} className={styles.filterBtn}>
              <TbMenuDeep />
                Filter</button>
        )}
      </div>
      {isOpen && (
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <label htmlFor="priceFilter">Filter by Price:</label>
            <button onClick={toggleSidebar}>
              <MdClose />
            </button>
          <input
            type="range"
            id="priceFilter"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
          <span>{priceFilter}</span>
          <p>Price: $40 - $74</p>
          <button>Filter</button>
        <div>
          <h5 className={styles.sidebarTitle}>Top product</h5>
            {filteredPizzas.map((pizza, index) => (
              <div key={index} className={styles.filterProduct}>
                <Image src={pizza.image} alt={pizza.name} width={150} height={150} />
                <div className={styles.filterTexts}>
                    <p>{pizza.name}</p>
                    <p>${pizza.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      <div className={styles.sort}>
        <p>Showing all 9 results</p>
        <label htmlFor="dropdown"></label>
      <select id="dropdown" className={styles.sortSelect} value={selectedOption} onChange={handleOptionChange}>
        <option value="">Default Sorting</option>
        <option value="option1">One</option>
        <option value="option2">Two</option>
        <option value="option2">Three</option>
      </select>
      </div>
      </div>
      <div className={styles.pizzas}>
        {PizzaList.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} className={styles.pizza} />
      ))}
      </div>
    </div>
  )
}

export default Products