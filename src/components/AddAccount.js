import {useState} from 'react'
import {connect} from "react-redux";
import { addAccount } from "../actions/accountActions";
import { addTransaction } from "../actions/transactionsActions";

const AddAccount = (props) => {

    const [name, setName] = useState('')
    const [deposit, setDeposit] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();

        const account = {
            name: name,
            balance: deposit
        }

        props.addAccount(account);
        props.addTransaction(account)

        setName('')
        setDeposit('')
    }

    return (
        <div className="card bg-light mt-2 mb-4">
            <div className="card-body">
                <form className={''} onSubmit={onSubmit}>

                    <div className={'form-group'}>
                        <label>Account Name</label>
                        <input type={'text'}
                               placeholder={'Account name...'}
                               value={name}
                               className={'form-control'}
                               onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={'form-group'}>
                        <label>Initial Deposit</label>
                        <input type={'text'}
                               placeholder={'Add deposit...'}
                               value={deposit}
                               className={'form-control'}
                               onChange={(e) => setDeposit(e.target.value)} />
                    </div>

                    <input className={'btn btn-success float-right'} type={'submit'} value={'Save Account'} />
                </form>
            </div>
        </div>
    )
}


export default connect(null, { addAccount, addTransaction })(AddAccount);
