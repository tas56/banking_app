import { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";

import { fetchTransactions } from "../actions/transactionsActions";

const Transactions = (props) => {

    useEffect(() => {

        props.fetchTransactions();

    }, [ ]);

    const transactionItems = props.transactions.map(transaction => (
            <tr>
                <th scope="row">{transaction.id}</th>
                <td>{parseFloat(transaction.amount).toFixed(2)}</td>
                <td>{transaction.account_id}</td>
                <td>{transaction.type}</td>
            </tr>
    ))

    return (
        <div>
            <h1>Transactions</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Account ID</th>
                    <th scope="col">Type</th>
                </tr>
                </thead>
                <tbody>
                {transactionItems}
                </tbody>
            </table>
        </div>
    )

}

const mapStateToProps = state => ({
    transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, { fetchTransactions })(Transactions);