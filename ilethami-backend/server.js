const express = require('express');
const cors = require('cors');
const app = express();
const clientRouter = require('./routes/client');
const port = 3000; // nodejs port

// Express middleware
// Middleware - function that runs between incoming request and final route handler
app.use(express.json());

// Cross origin resource sharing enabled for ff: origins(aka ports)
app.use(
  cors({
    origin: [
      'http://localhost:5173', // Vite default server port
      'http://localhost:3000',
    ],
  }),
);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Web listening on port ${port}`);
});
