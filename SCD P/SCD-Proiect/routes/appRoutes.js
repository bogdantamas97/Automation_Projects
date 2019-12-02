const express = require('express');
const Router = express.Router();
const sqlConnection = require('../sqlConnection');
const idGenerator = require('../functions/idGenerator');

Router.get("/", (req, res) => {
    sqlConnection.query("SELECT * from info", (err, rows) => {
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})
Router.post('/insert',(req, res) => {
      const data = {   
                        id: idGenerator(),
                        firstname: req.query.firstname, 
                        lastname: req.query.lastname, 
                        email: req.query.email,
                        password: req.query.password
                    };
      const sql = "INSERT INTO info SET ?";
      sqlConnection.query(sql, data,(err) => {
        if(err) throw err;
        res.redirect('/');
      });
  });
  
Router.post('/update',(req, res) => {
    const sql = "UPDATE info SET firstname='"+req.query.name+"', lastname='"+req.query.lastname+"', email='"+req.query.email+"', password='"+req.query.password+"' WHERE id='"+req.query.id+"'";
      sqlConnection.query(sql, (err) => {
        if(err) throw err;
        res.redirect('/');
      });
    }); 
  
Router.post('/delete',(req, res) => {
      const sql = "DELETE FROM info WHERE id='"+req.query.id+"'";
      sqlConnection.query(sql, (err) => {
        if(err) throw err;
          res.redirect('/');
      });
    });

module.exports = Router;