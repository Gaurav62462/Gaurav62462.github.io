const express = require("express");
var nodemailer = require('nodemailer');
const app = express();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");
const creds = require('./config');
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "demo"
});
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
  });


app.post("/add", (req, res) => {
	//console.log("www");
	//console.log(req.body);
	const name = req.body.name;
	const password = req.body.password;
	const query = `insert into records(username, password) values('${name}', '${password}')`;
	connection.query(query, (err, res) => {
		if (err) throw err;
	});
});

app.get("/serverports", (res, req) => {
	const query = 'select * from records';
	console.log(query);
	connection.query(query, (err, rows) => {
		if (err) throw err;
		res.json(rows);
	});
});


app.get("/get/:id", (res, req) => {
	const query = 'select * from record where record._id=${req.params.id}';
	connection.query(query, (err, rows) => {
		if (err) throw err;
		res.json(rows);
	});
});

app.post("/edit/:id", (res, req) => {
	const query = 'update record set record.name="req.body.name"';
	connection.query(query, (err, rows) => {
		if (err) throw err;
		res.json(rows);
	});
});

app.post("/delete/:id", (res, req) => {
	const id = req.params.id;
	const query = 'delete from record where record._id = ${id}';
	connection.query(query, (err, res) => {
		if (err) throw err;
	});
});

app.post("/contact", (req, res) => {
	var myname = req.body.name;
	var myemail = req.body.email;
	var mymessage = req.body.message;
	var formdata = ` name: ${myname}, email: ${myemail}, message: ${mymessage}`;

	var smtptransporter = nodemailer.createTransport({
		pool: true,
		host: "smtp.gmail.com",
		service: "Gmail",
        port: 2525,
		secure: false,
		authMethod: 'PLAIN',
		auth: {
			user: creds.USER,
			pass: creds.PASS
		},
		tls: {
			rejectUnauthorized: false
		  }
	})


	var mail = {
		from: myemail,
		to: 'gaurav62462@gmail.com',
		subject: 'New Message',
		text: `<p>${myname}</p>
		<p>${myemail}</p>
		<p>${mymessage}</p>`,
	}

	smtptransporter.sendMail(mail, (err, data) => {
		console.log(err, 'err')
		console.log(data, 'data')
		if (err) {
			res.json({
				status: 'fail'
			})
		} else {
			res.json({
				status: 'success'
			})
		}
	})

});


app.listen(4200, () => console.log("server is runnint on the port 4200"));
