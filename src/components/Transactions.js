import { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";

import { fetchTransactions } from "../actions/transactionsActions";

const Transactions = (props) => {

    useEffect(() => {

        props.fetchTransactions();

    }, [ ]);

    const transactionItems = props.transactions.map(transaction => (
            <li className="list-group-item list-group-item-action">
               Transaction ID: {transaction.id} |
                Amount: {parseFloat(transaction.amount).toFixed(2)}
            </li>
    ))

    return (
        <div>
            <h1>Transactions</h1>
            <ul className="list-group">
                {transactionItems}
            </ul>
        </div>
    )

}

const mapStateToProps = state => ({
    transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, { fetchTransactions })(Transactions);