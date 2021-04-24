import { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";

import {FaMinus, FaPlus} from "react-icons/all";

import { fetchAccounts } from "../actions/accountActions";
import AddAccount from "./AddAccount";

const Accounts = (props) => {

    const [expand, setExpand] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAccounts());

    }, [ ]);

    const accountItems = props.accounts.map(account => (
        <div className="row d-flex">
            <div className={"col-md-3"}>
            <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Account Name: {account.name}</h5>
                        <p className="card-text">Balance: ${account.balance}</p>
                    </div>
            </div>
            </div>
        </div>
    ))

    return (
        <div>
            <div className="w-100 border-bottom mb-3">
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
    accounts: state.accounts.accounts,
});

export default connect(mapStateToProps, { fetchAccounts })(Accounts);