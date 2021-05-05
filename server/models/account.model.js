'user strict';
var dbConn = require('../config/db.config');
//city object create
var account = function (account) {
    this.username = account.username;
    this.balance = account.balance;
};
account.create = function (newAccount, result) {
    dbConn.query("INSERT INTO accounts set ?", newAccount, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
account.findById = function (id, result) {
    dbConn.query("Select * from accounts where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
account.findAll = function (result) {
    dbConn.query("Select * from accounts", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('accounts : ', res);
            result(null, res);
        }
    });
};
account.update = function (id, account, result) {
    dbConn.query("UPDATE accounts SET username=?,balance=? WHERE id = ?", [account.username, account.balance, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
account.delete = function (id, result) {
    dbConn.query("DELETE FROM accounts WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = account;