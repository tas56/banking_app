import { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import {FaMinus, FaPlus, FaEdit, FaTimes, FaArrowRight } from "react-icons/all";

import { fetchAccounts } from "../actions/accountActions";
import AddAccount from "./AddAccount";
import AccountItem from "./AccountItem";
import AddBalance from "./AddBalance";
import Withdrawal from "./Withdrawal";

const Accounts = (props) => {

    const [expand, setExpand] = useState(false);
    const [expandDeposit, setExpandDeposit] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAccounts());

    }, [ ]);

    const accountItems = props.accounts.map( (account) => {
       return <AccountItem account={account} />
    });

    return (
        <div className="w-100">
            <div className="w-100 border-bottom border-success mb-3">
                <p onClick={() => setExpand(!expand)}
                   style={{cursor:'pointer'}}> Add Account
                    {expand ? <FaMinus data-toggle="tooltip"
                                       data-placement="bottom"
                                       title="collapse"
                                       className="ml-2" />
                        : <FaPlus data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="add task"
                                  className="ml-2" /> }
                </p>
                {expand && <AddAccount /> }
            </div>
            <h1>Accounts</h1>
            {accountItems}
        </div>
    )

}

const mapStateToProps = state => ({
    accounts: state.accounts.accounts
});

export default connect(mapStateToProps, { fetchAccounts })(Accounts);