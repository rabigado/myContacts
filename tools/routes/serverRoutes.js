const express = require('express');
const config = require('../config');
const _ = require('lodash');
const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;  
const {Connection} =require('tedious');

const router = express.Router();

function executeStatement(query,callback) {  
    let connection = new Connection(config.database);//start connection
    connection.on('connect', function(err) {
        if(err){
            callback(err);
            connection.close();
        }else{
            let request = new Request(query, function(err, rowCount, rows) {  
            if (err) {  
                callback(err,null);
                connection.close();
            }else{
                connection.close();
                let rowarray = [];
                rows.forEach(function(columns){
                    let rowdata = new Object();
                    columns.forEach(function(column) {
                        rowdata[column.metadata.colName] = column.value;
                    });
                    rowarray.push(rowdata);
                });
                callback(null, rowarray);
            }  
            });  
  
            connection.execSql(request);
        }
    }); 
}

router.get('/AllContacts',function(req,res){
    executeStatement("SELECT * FROM Contacts",function(err,data){
        try{
            if(err)
                res.json({err});
            else{
                res.json({data:data});
            }
        }catch(err){
            res.json(err);
        }
    });
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



module.exports =  router;