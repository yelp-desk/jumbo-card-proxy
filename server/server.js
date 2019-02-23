const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static((__dirname + '/../public/')));

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../public/'));
});
app.listen(port, () => {
	console.log(`server running at: http://localhost:${port}`);
});
