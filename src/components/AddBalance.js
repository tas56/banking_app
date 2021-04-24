import {useState} from 'react'
import {connect, useDispatch} from "react-redux";
import {addAccount} from "../actions/accountActions";

const AddBalance = (props) => {

    const [balance, setBalance] = useState('')
    const [deposit, setDeposit] = useState('')

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        const account = {
            name: name,
            balance: deposit
        }

        dispatch(addTransaction(account));

        setBalance('')
        setDeposit('')
    }

    return (
        <div className="card bg-light mt-2 mb-4">
            <div className="card-body">
                <form className={''} onSubmit={onSubmit}>

                    <div className={'form-group'}>
                        <label>Account Name</label>
                        <input type={'text'}
                               placeholder={'Add Task'}
                               value={name}
                               className={'form-control'}
                               onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={'form-group'}>
                        <label>Deposit</label>
                        <input type={'text'}
                               placeholder={'Add Description'}
                               value={deposit}
                               className={'form-control'}
                               onChange={(e) => setDeposit(e.target.value)} />
                    </div>

                    <input className={'btn btn-primary float-right'} type={'submit'} value={'Save Account'} />
                </form>
            </div>
        </div>
    )
}


export default connect(null, { addAccount })(AddAccount);
