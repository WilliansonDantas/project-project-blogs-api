const express = require('express');
require('express-async-errors');

// código Willianson

const user = require('./routes/user');

// código Willianson

// ...

const app = express();

app.use(express.json());

// código Willianson

app.use(user);

app.use((err, req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// código Willianson

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
