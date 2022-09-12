import React from 'react';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button type='button' onClick={props.onClick} className={classes.button}>
      {props.children}
    </button>
  );
};

export default HeaderCartButton;
