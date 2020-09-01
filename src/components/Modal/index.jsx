import React from 'react';

const Modal = ({ children, onClose }) => (
    <div className="ModalMask" onClick={onClose}>
        <div className="Modal">
            {children}
        </div>
    </div>
)

export default Modal;
