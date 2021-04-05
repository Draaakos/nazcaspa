import React, { useRef } from 'react';
import classNames from 'classnames';

const Modal = ({ status, onHandler, children }) => {
  const content = useRef();
  const classes = classNames({
    "modal": true,
    "modal--active": status
  });

  const onCloseModal = evt => {
    if(evt.target.id == "modal") {
      onHandler();
    };
    
  }

  return (
    <div id="modal" className={classes} onClick={onCloseModal}>
      <div id="content" className="content">
        {children}
      </div>
    </div>
  )
};

Modal.defaultProps = {
  isActive: false
};

export default Modal;