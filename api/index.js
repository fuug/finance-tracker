const express = require('express');

const app = express();

const PORT = process.env.PORT || 80

app.get('/api/', (req, res) => {
    res.end('<h1>That working to</h1>');
})

app.listen(PORT)