const express = require('express');
const product = express();
const database = require("../Database");


product.get("/getCategories", (req,res)=>{
    let appData = {
        error: false,
        data: []
    }
    database.connection.getConnection((err, connection)=>{
        if(err){
            appData.error = true,
            appData.data = err;
            res.status(500).json(appData);
        } else {
            connection.query("select * from categories", (err, rows)=>{
                if(err){
                    appData.error = true,
                    appData.data = err;
                    res.status(500).json(appData);
                } else {
                    appData.data = rows;
                    res.status(200).json(appData);
                }
            })
        }
    })
})

module.exports = product;