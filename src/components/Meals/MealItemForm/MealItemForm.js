import React from 'react'
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
        <Input type='number' label='Amount'/>
        <button type='button'>Add</button>
    </form>
  )
}

export default MealItemForm