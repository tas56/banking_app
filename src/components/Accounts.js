import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {FaMinus, FaPlus } from "react-icons/all";
import { useAuth0 } from '@auth0/auth0-react'

import { fetchAccounts } from "../actions/accountActions";
import AddAccount from "./AddAccount";
import AccountItem from "./AccountItem";



const Accounts = (props) => {

    const [expand, setExpand] = useState(false);
    const { isAuthenticated } = useAuth0();

    useEffect(( ) => {

        props.fetchAccounts();

    }, [ props ]);

    const accountItems = props.accounts.map( (account) => {
       return <AccountItem account={account} key={account.id} />
    });

    return (
        isAuthenticated && (

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
    )

}

const mapStateToProps = state => ({
    accounts: state.accounts.accounts,
    transactions: state.transactions.transactions
});

export default connect(mapStateToProps, { fetchAccounts })(Accounts);