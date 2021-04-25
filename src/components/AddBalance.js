import {useState} from 'react'
import {connect, useDispatch} from "react-redux";
import {updateAccount} from "../actions/accountActions";

const AddBalance = (props) => {

    const [deposit, setDeposit] = useState('')


    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        const account = {
            name: props.accounts.name,
            balance: deposit
        }

        dispatch(updateAccount(account));

        setDeposit('')

    }

    return (
        <div className="card bg-light mt-2 mb-4">
            <div className="card-body">
                <form className={''} onSubmit={onSubmit}>

                    <div className={'form-group'}>
                        <input type={'text'}
                               placeholder={'Deposit Amount...'}
                               value={deposit}
                               className={'form-control'}
                               onChange={(e) => setDeposit(e.target.value)} />
                    </div>

                    <input className={'btn btn-success float-right'} type={'submit'} value={'Deposit'} />
                </form>
            </div>
        </div>
    )
}


export default connect(null, { updateAccount })(AddBalance);
