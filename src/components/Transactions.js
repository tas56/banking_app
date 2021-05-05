import { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'

import { fetchTransactions } from "../actions/transactionsActions";

const Transactions = (props) => {

    const { isAuthenticated } = useAuth0();

    useEffect(() => {

        props.fetchTransactions();

    }, [ ]);

    const transactionItems = props.transactions.map(transaction => (
            <tr>
                <th scope="row">{transaction.id}</th>
                <td>{parseFloat(transaction.amount).toFixed(2)}</td>
                <td>{transaction.account_id}</td>
                <td>{transaction.transaction_type}</td>
            </tr>
    ))

    return (
        isAuthenticated && (

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
    )

}

const mapStateToProps = state => ({
    transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, { fetchTransactions })(Transactions);