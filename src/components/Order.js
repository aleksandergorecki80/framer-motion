import React from 'react';
import { motion } from 'framer-motion';


const containerVarients = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring', 
      // delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const childrenVarients = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVarients}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childrenVarients}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;