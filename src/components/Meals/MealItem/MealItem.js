import React from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

export const MealItem = (props) => {
  return (
    <div className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
        </div>
        <div>
            <MealItemForm onSubmit={props.onSubmit} />
        </div>
    </div>
  )
}
