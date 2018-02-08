import React from 'react';
import Modal from 'react-modal';

const ConfirmModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onCancel}
        contentLabel={props.title}
        closeTimeoutMS={200}
        className="modal"
    >
        <p className="modal__body">{props.message || 'Do you confirm ?'}</p>

        <div className="modal__actions">
            <button className="button" onClick={props.onCancel}>
                No
            </button>
            <button className="button  button--danger" onClick={props.onConfirm}>
                Yes
            </button>
        </div>
    </Modal>
);

export default ConfirmModal;