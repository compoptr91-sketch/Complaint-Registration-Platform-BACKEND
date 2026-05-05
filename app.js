const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>app page - html</h1>');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Welcome page - html</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});