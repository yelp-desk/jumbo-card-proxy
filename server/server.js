const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//setup the static for the path of /public
app.use(express.static(path.join(__dirname, '/../public/')));

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../public/'));
});
app.listen(port, () => {
	console.log(`server running at: ${port}`);
});
