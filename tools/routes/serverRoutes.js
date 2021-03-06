const express = require('express');
const config = require('../config');
const _ = require('lodash');
const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;  
const {Connection} =require('tedious');

const router = express.Router();
//main function to use in order to get data from the app sql db
//which sits on azure.
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
    executeStatement("SELECT * FROM Contacts ORDER BY firstName ",function(err,data){
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
router.post('/deleteContact',function(req,res){
    if(!req.body.contact){//test correct data
        res.status(500).send({error:'no contact sent'});
    }
    let contact = parseInt(req.body.contact);
    let q = `DELETE FROM [dbo].[Contacts]
                WHERE id=${contact}`;
    executeStatement(q,(err,data)=>{
        if(err){
            res.json({err});
        }
        else{
            res.status(200).send({data});
        }
    });

});
router.post('/updateContact',function(req,res){
    if(!req.body.contact){
        res.json({error:"no body attached"});
    }
    let contact = JSON.parse(req.body.contact);
    let q =``;
    if(contact.id){
        //do update
        q=` UPDATE [dbo].[Contacts]
            SET [firstName] = '${contact.firstName?contact.firstName:''}'
                ,[lastName] = '${contact.lastName?contact.lastName:''}'
                ,[Email] = '${contact.Email?contact.Email:''}'
                ,[HomePhonenumber] = '${contact.HomePhonenumber?contact.HomePhonenumber:''}'
                ,[WorkPhoneNumber] = '${contact.WorkPhoneNumber?contact.WorkPhoneNumber:''}'
            WHERE id=${contact.id}`;
    }else{
        //do create
        q=`DECLARE @MyTableVar table( NewId int);
            INSERT INTO [dbo].[Contacts]
                ([firstName]
                ,[lastName]
                ,[Email] 
                ,[HomePhonenumber]
                ,[WorkPhoneNumber])
                    OUTPUT INSERTED.id INTO @MyTableVar
                    VALUES(
                        '${contact.firstName?contact.firstName:''}',
                        '${contact.lastName?contact.lastName:''}',
                        '${contact.Email?contact.Email:''}',
                        '${contact.HomePhonenumber?contact.HomePhonenumber:''}',
                        '${contact.WorkPhoneNumber?contact.WorkPhoneNumber:''}'
                    );SELECT * FROM @MyTableVar`;
    }
    executeStatement(q,(err,data)=>{
        if(err){
            res.json({err});
        }
        else{
            res.json(data);
        }
    });
});


// export default router;
module.exports =  router;