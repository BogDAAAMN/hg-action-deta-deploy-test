const express = require('express');

const app = express(); // instantiate express

app.get('/hey', async (req, res) => {
   res.send('Lets deploy this on v1.0.1 eyyyy!')
});

module.exports = app;
