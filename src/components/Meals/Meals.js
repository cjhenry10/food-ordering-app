import React from 'react';
import Card from '../UI/Card/Card';
import { DUMMY_MEALS } from './dummy-meals';
import { MealItem } from './MealItem/MealItem';
import classes from './Meals.module.css';

const Meals = () => {
  return (
    <Card>
      <div className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default Meals;
