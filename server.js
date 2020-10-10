const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");
const connection = mysql.createConnection({
	host:"localhost",
	user : "root",
	password : "",
	database : "demo"
});
 app.use(cors());
 app.use(bodyparser.urlencoded({extended:true}));
 app.use(bodyparser.json());

 app.post("/add",(req,res) => {
 	//console.log("www");
 	//console.log(req.body);
 	const name = req.body.name;
 	const password = req.body.password;
  	const query = `insert into records(username, password) values('${name}', '${password}')`;
 	connection.query(query,(err,res) => {
 		if(err) throw err;
 	});
 });

  app.get("/serverports",(res,req)=>{
 	const query='select * from records';
 	console.log(query);
 	connection.query(query,(err,rows) => {
 		if(err) throw err;
 		res.json(rows);
 	});
 });


 app.get("/get/:id",(res,req)=>{
 	const query='select * from record where record._id=${req.params.id}';
 	connection.query(query,(err,rows) => {
 		if(err) throw err;
 		res.json(rows);
 	});
 });

 app.post("/edit/:id",(res,req)=>{
 	const query='update record set record.name="req.body.name"';
 	connection.query(query,(err,rows) => {
 		if(err) throw err;
 		res.json(rows);
 	});
 });

 app.post("/delete/:id",(res,req)=>{
 	const id=req.params.id;
 	const query='delete from record where record._id = ${id}';
 	connection.query(query,(err,res) => {
 		if(err) throw err;
 	});
 });

app.listen(4200,() => console.log("server is runnint on the port 4200") );
