import Modal from "react-bootstrap/Modal";

const EditModal = (props) => {
    return (
        <div>
            <Modal show={props.isOpen} onHide={props.hideModal}>
                <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>The body</Modal.Body>
                <Modal.Footer>
                    <button onClick={props.hideModal}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditModal;