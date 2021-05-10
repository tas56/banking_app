import {  useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {connect} from "react-redux";
import {fetchAccounts} from "../actions/accountActions";

const UserAccount = (props) => {

    const [accounts,setAccounts] = useState([]);
    const [transactions,setTransactions] = useState([]);
    const { id } = useParams();


    useEffect( () => {
       props.fetchAccounts()
    });

    console.log(props.accounts)


   const userAccount = props.accounts.find(account => account.id === parseInt(id));
    console.log(userAccount)

    const userTransactions = transactions.map(transaction => transaction.account_id === parseInt(id));
    console.log(userTransactions);

    return (
        <div>
            <h1>User Account</h1>
            <h3>Account Name:</h3>
            <h2>{userAccount.username}</h2>
            <h3>Account Balance:</h3>
            <h2>${userAccount.balance}</h2>
            <h3>Transactions</h3>

        </div>
    )

}


export default connect(null, { fetchAccounts })(UserAccount);