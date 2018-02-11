import React from 'react';
import Modal from 'react-modal';

const ConfirmModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onCancel}
        contentLabel={props.title}
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <p className="modal__body">{props.message || 'Do you confirm ?'}</p>

        <div className="modal__actions">
            <button id="no" className="button" onClick={props.onCancel}>
                No
            </button>
            <button id="yes" className="button  button--danger" onClick={props.onConfirm}>
                Yes
            </button>
        </div>
    </Modal>
);

export default ConfirmModal;