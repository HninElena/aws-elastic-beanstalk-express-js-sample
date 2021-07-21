const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Hnin Thazin Naing! you are very very cute. '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
