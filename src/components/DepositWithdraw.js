import {useState} from 'react'
import {connect} from "react-redux";
import {updateAccount} from "../actions/accountActions";
import {addTransaction} from "../actions/transactionsActions";

const DepositWithdraw = (props) => {

    const [amount, setAmount] = useState('');

    return (
        <div className="bg-light mt-2 mb-4">

            <div className={'form-group'}>

                <input type={'text'}
                       placeholder={'Enter Amount...'}
                       value={amount}
                       className={'form-control'}
                       onChange={(e) => setAmount(e.target.value)} />

                <div className="row mt-3 d-flex justify-content-center">

                    <input className={'btn btn-small btn-danger float-right'}
                           type={'submit'}
                           value={'Withdrawal'}
                           onClick={(e) => {
                               // eslint-disable-next-line no-restricted-globals
                               let c = confirm(`Would you like to withdrawal $${amount}?`);
                               if (c === true){
                                   e.preventDefault();

                                   const account = {
                                       id: props.account.id,
                                       name: props.account.name,
                                       balance: (parseFloat(props.account.balance) - parseFloat(amount)).toFixed(2)
                                   }

                                   props.updateAccount(account);

                                   setAmount('')
                               }
                           }} />

                    <input className={'btn btn-small btn-success float-right ml-2'}
                           type={'submit'}
                           value={'Deposit'}
                           onClick={(e) => {
                               // eslint-disable-next-line no-restricted-globals
                               let c = confirm(`Would you like to deposit $${amount}?`);
                               if (c === true){
                                   e.preventDefault();

                                   const account = {
                                       id: props.account.id,
                                       name: props.account.name,
                                       balance: (parseFloat(props.account.balance) + parseFloat(amount)).toFixed(2)
                                   }

                                   props.updateAccount(account);

                                   setAmount('')
                               }
                           }} />

                </div>

            </div>


        </div>
    )
}


export default connect(null, { updateAccount })(DepositWithdraw);
