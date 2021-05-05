'user strict';
var dbConn = require('../config/db.config');
//city object create
var transaction = function (transaction) {
    this.account_id = transaction.account_id;
    this.amount = transaction.amount;
    this.transaction_date = transaction.transaction_date;
    this.transaction_type = transaction.transaction_type;
};
transaction.create = function (newTransaction, result) {
    dbConn.query("INSERT INTO transactions set ?", newTransaction, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
transaction.findById = function (id, result) {
    dbConn.query("Select * from transactions where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
transaction.findAll = function (result) {
    dbConn.query("Select * from transactions", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('transactions : ', res);
            result(null, res);
        }
    });
};
transaction.update = function (id, transaction, result) {
    dbConn.query("UPDATE accounts SET account_id=?,amount=?,transaction_date=?,transaction_type=? WHERE id = ?", [transaction.account_id, transaction.balance, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
transaction.delete = function (id, result) {
    dbConn.query("DELETE FROM transactions WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = transaction;