import React from "react";
import Modal from "react-modal"

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleDeleteSelectedOption}
        contentLabel="Selected Option"
        appElement={app}
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            className="button"
            onClick={props.handleDeleteSelectedOption}
        >
            Ok
        </button>
    </Modal>
)

export default OptionModal