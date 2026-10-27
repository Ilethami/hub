const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Express middleware
// Middleware - function that runs between incoming request and final route handler
app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
  }),
);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
