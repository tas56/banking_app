import { useState, useEffect } from 'react';
import { connect } from "react-redux";

import Card from 'react-bootstrap/Card';
import {FaMinus, FaPlus} from "react-icons/all";

import { fetchAccounts } from "../actions/accountActions";
import AddAccount from "./AddAccount";

const Accounts = (props) => {

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        props.fetchAccounts();
    }, []);

    const accountItems = props.accounts.map(account => (
        <Card className={"col-md-3 m-2"} key={account.id}>
            <Card.Title>Account Name: {account.name}</Card.Title>
            <Card.Body className={"w-100 float-right"}>Balance: {account.balance}</Card.Body>
        </Card>
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
    accounts: state.accounts.items
})

export default connect(mapStateToProps, { fetchAccounts })(Accounts);