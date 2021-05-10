import Modal from "react-bootstrap/Modal";
import { useState } from "react";

import { updateAccount } from "../actions/accountActions";
import { connect } from "react-redux";

const EditModal = (props) => {

    const [name, setName] = useState('')
    const [deposit, setDeposit] = useState('')

    const onClick = () => {

        let editName =  name !== '' ? name : props.account.username;
        let editBalance =  deposit !== '' ? deposit : props.account.balance;

        const account = {
            username: editName,
            balance: editBalance,
            id: props.account.id
        }

        props.updateAccount(account);

        setName('');
        setDeposit('');

    }

    return (
        <div>
            <Modal show={props.isOpen} onHide={props.hideModal}>
                <Modal.Header>
                    <Modal.Title>Edit Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={'form-group'}>
                        <label>Current name: <b>{props.account.username}</b></label>
                        <input type={'text'}
                               placeholder={'Edit name...'}
                               value={name}
                               className={'form-control'}
                               onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={'form-group'}>
                        <label>Current balance:
                            <b><span className={props.account.balance >= 0 ? 'text-success': 'text-danger'}>
                                ${props.account.balance}</span></b>
                        </label>
                        <input type={'text'}
                               placeholder={'Edit balance...'}
                               value={deposit}
                               className={'form-control'}
                               onChange={(e) => setDeposit(e.target.value)} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger"
                            onClick={props.hideModal}>Cancel</button>
                    <button className="btn btn-success"
                            onClick={ () => onClick()}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default connect(null, { updateAccount })(EditModal);
