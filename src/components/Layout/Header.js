import React from 'react';
import CartIcon from './CartIcon';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import meals from './meals.jpg';
import MealsSummary from './MealsSummary';
const Header = () => {
  return (
    <>
    <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton><CartIcon />Your Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='' />
    </div>
        <MealsSummary />
    </>
  )
}

export default Header