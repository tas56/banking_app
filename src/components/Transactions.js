import { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";

import { fetchTransactions } from "../actions/transactionsActions";

const Transactions = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchTransactions());

    }, [ ]);

    const accountItems = props.transactions.map(transaction => (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
               Amount: {transaction.amount}
            </a>
        </div>
    ))

    return (
        <div>
            <h1>Transactions</h1>
            {accountItems}
        </div>
    )

}

const mapStateToProps = state => ({
    transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, { fetchTransactions })(Transactions);