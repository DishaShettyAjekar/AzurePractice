const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
const env = process.env.APP_ENVIRONMENT || 'unset';
res.send(`Hello from AZ-204!`);
});

app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

app.listen(port, () => console.log(`Listening on ${port}`));