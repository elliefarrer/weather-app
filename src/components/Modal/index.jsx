import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => (
    <div className="ModalMask" onClick={onClose}>
        <div className="Modal">
            {children}
        </div>
    </div>
)

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;
