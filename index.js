const express = require('express');
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => console.log(`This server is listening at http://localhost:${port}`));
