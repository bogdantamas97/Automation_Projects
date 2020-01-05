const express = require('express');
const Router = express.Router();
const sqlConnection = require('../sqlConnection');

Router.get("/", (req, res) => {
    sqlConnection.query("SELECT * from locations", (err, rows) => {
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
                        id: req.query.id,
                        date: req.query.date, 
                        lat: req.query.lat,
                        lng: req.query.lng
                    };
      const sql = "INSERT INTO locations SET ?";
      sqlConnection.query(sql, data,(err) => {
        if(err) throw err;
        res.redirect('/');
      });
  });
  
Router.post('/update',(req, res) => {
    const sql = "UPDATE locations SET lat='"+req.query.lat+"', lng='"+req.query.lng+"' WHERE id='"+req.query.id+"'";
      sqlConnection.query(sql, (err) => {
        if(err) throw err;
        res.redirect('/');
      });
    }); 
  
Router.post('/delete',(req, res) => {
      const sql = "DELETE FROM locations WHERE id='"+req.query.id+"'";
      sqlConnection.query(sql, (err) => {
        if(err) throw err;
          res.redirect('/');
      });
    });

module.exports = Router;