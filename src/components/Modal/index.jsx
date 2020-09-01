import React from 'react';

const Modal = ({ children }) => (
    <div className="ModalMask">
        <div className="Modal">
            {children}
        </div>
    </div>
)

export default Modal;
