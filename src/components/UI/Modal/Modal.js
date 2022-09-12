import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

export const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
        the cart will be here
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCancel} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
          <Card>
              <Overlay />
          </Card>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
