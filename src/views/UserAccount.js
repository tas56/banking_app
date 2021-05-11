import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { fetchAccounts } from "../actions/accountActions";
import { fetchTransactions } from "../actions/transactionsActions";

const UserAccount = (props) => {

    const [accounts,setAccounts] = useState([]);
    const [transactions,setTransactions] = useState([]);
    const { id } = useParams();


    useEffect( () => {

        axios.get('http://localhost:8000/api/v1/accounts')
            .then(res => {
                let data = res.data;
                setAccounts(data);
            }).catch(error => {
            console.log(error);
        })

    }, [] );

    console.log(accounts)


   const userAccount = accounts.find(account => account.id === parseInt(id));
    console.log(userAccount)

    const userTransactions = props.transactions.map(transaction => transaction.account_id === parseInt(id))
        .map(transaction => {
            return (
                <tr key={transaction.id}>
                    <th scope="row">{transaction.id}</th>
                    <td>{parseFloat(transaction.amount).toFixed(2)}</td>
                    <td>{transaction.account_id}</td>
                    <td>{transaction.transaction_type}</td>
                    <td>{transaction.transaction_date}</td>
                </tr>
            )
        })
    console.log(userTransactions);

    return (
        <div>
            <h1>User Account</h1>
            <h3>Account Name:</h3>
            <h2>{userAccount.username}</h2>
            <h3>Account Balance:</h3>
            <h2>${userAccount.balance}</h2>
            <h3>Transactions</h3>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Account ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                </tr>
                </thead>
                <tbody>
                {userTransactions}
                </tbody>
            </table>

        </div>
    )

}


export default connect(null, { fetchAccounts, fetchTransactions })(UserAccount);