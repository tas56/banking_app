import {  useParams } from "react-router-dom";
import DepositWithdraw from "./DepositWithdraw";
import axios from "axios";

const UserAccount = (props) => {

    const { id } = useParams();

    const userAccount = () => {
       return  axios.get('http://localhost:8000/api/v1/accounts')
            .then(res => { return res.data })
            .then( res => {
                console.log(res)
                const account = res.find(account => account.id === parseInt(id))
                console.log(account);
                return account;
            }).catch(error => {
            console.log(error) })

    }

    const userTransactions = () => {
        return  axios.get('http://localhost:8000/api/v1/transactions')
            .then(res => { return res.data })
            .then( res => {
                console.log(res)
                const transactions = res.map(transaction => transaction.account_id === parseInt(id))
                console.log(transactions);
                return transactions;
            }).catch(error => {
                console.log(error) })

    }

    console.log(userAccount)
    console.log(userTransactions)

    return (
        <div>
            <h1>User Account</h1>
            <h3>Account Name:</h3>
            <h2>{userAccount.username}</h2>
            <h3>Account Balance:</h3>
            <h2>{userAccount.balance}</h2>
            <h3>Transactions</h3>

        </div>
    )

}


export default UserAccount