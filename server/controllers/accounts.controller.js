'use strict';

const Account = require('../models/account.model');

exports.findAll = function(req, res) {
    Account.findAll(function(err, accounts) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', accounts);
        res.json({ "data": accounts});
    });
};


exports.create = function(req, res) {
    const new_account = new Account(req.body);

    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Account.create(new_account, function(err, account) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Account added successfully!",data:account});
        });
    }
};


exports.findById = function(req, res) {
    Account.findById(req.params.id, function(err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Account.update(req.params.id, new Account(req.body), function(err, account) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Account successfully updated' });
        });
    }

};


exports.delete = function(req, res) {
    Account.delete( req.params.id, function(err, account) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Account successfully deleted' });
    });
};