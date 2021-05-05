'use strict';

const Transaction = require('../models/transaction.model');

exports.findAll = function(req, res) {
    Transaction.findAll(function(err, transactions) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', transactions);
        res.json({ "data": transactions});
    });
};


exports.create = function(req, res) {
    const new_account = new Transaction(req.body);

    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Transaction.create(new_account, function(err, transaction) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Transaction added successfully!",data:transaction});
        });
    }
};


exports.findById = function(req, res) {
    Transaction.findById(req.params.id, function(err, transaction) {
        if (err)
            res.send(err);
        res.json(transaction);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Transaction.update(req.params.id, new Account(req.body), function(err, account) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Transaction successfully updated' });
        });
    }

};


exports.delete = function(req, res) {
    Transaction.delete( req.params.id, function(err, account) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Transaction successfully deleted' });
    });
};