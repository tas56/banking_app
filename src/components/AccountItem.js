import {FaArrowRight, FaEdit, FaMinus, FaPlus, FaTimes} from "react-icons/all";
import DepositWithdraw from "./DepositWithdraw";
import {Link} from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {deleteAccount} from "../actions/accountActions";
import EditModal from './EditModal';

const AccountItem = (props) => {

    const [expand, setExpand] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <EditModal isOpen={isOpen}
                       hideModal={hideModal}
                       showModal={showModal}
                       account={props.account} />
            <div className={ props.account.balance >= 0 ?
                            'card mt-3 border border-success':'card mt-3 border-left border-danger'} >
                <div className="card-body">
                    <div className="float-right">
                        <FaEdit
                            className="edit"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="EditModal account"
                            onClick={showModal} />
                        <FaTimes
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Delete account"
                            className="delete ml-2"
                            onClick={() => {
                                // eslint-disable-next-line no-restricted-globals
                                let c = confirm('Would you like to permanently delete this account?');
                                if (c === true)
                                    props.deleteAccount(props.accounts, props.account.id)
                            }}
                        />
                    </div>
                    <p className="card-title">Account Name: </p>
                    <h5 className="card-title"><b>{props.account.name}</b></h5>
                    <div className="card-group ">
                        <p className="card-text">Balance:</p>
                        <h5 className={ props.account.balance >= 0 ?
                            'card-text text-success ml-2':'card-text text-danger ml-2'}>
                            <b>${parseFloat(props.account.balance).toFixed(2)}</b>
                        </h5>
                    </div>
                </div>
                <div className="card-footer">
                    <p onClick={() => setExpand(!expand)}
                       style={{cursor: 'pointer'}}> Deposit/Withdrawal
                        {expand ? <FaMinus data-toggle="tooltip"
                                           data-placement="bottom"
                                           title="collapse"
                                           className="ml-2"/>
                            : <FaPlus data-toggle="tooltip"
                                      data-placement="bottom"
                                      title="Deposit/Withdrawal"
                                      className="ml-2"/>}
                    </p>
                    {expand && <DepositWithdraw account={props.account} /> }
                    <Link className="card-link"
                          to={{pathname:`UserAccount/${props.account.id}`,
                              state: {account: props.account}}}
                            account={props.account} >
                        View Account <FaArrowRight/>
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default connect(null, { deleteAccount })(AccountItem);