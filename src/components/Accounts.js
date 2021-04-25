import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {FaMinus, FaPlus } from "react-icons/all";

import { fetchAccounts } from "../actions/accountActions";
import AddAccount from "./AddAccount";
import AccountItem from "./AccountItem";


const Accounts = (props) => {

    const [expand, setExpand] = useState(false);

    useEffect(() => {

        props.fetchAccounts();

    }, [ ]);

    const accountItems = props.accounts.map( (account) => {
       return <AccountItem account={account} />
    });

    return (
        <div className="w-100">
            <div className="w-100 border-bottom border-dark mb-3">
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
            <div className="d-flex flex-wrap">
                {accountItems}
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    accounts: state.accounts.accounts
});

export default connect(mapStateToProps, { fetchAccounts })(Accounts);