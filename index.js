const express = require('express');
const app = express();

app.get('/', (req, res) => {
	return res.send("Hello Node Express Server");
});

app.listen(3000, () => {
	console.log("Express Server Started on Port 3000");
});
