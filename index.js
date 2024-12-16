// index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./helper/db.Connection');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

const userRoutes = require('./router/index');

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
