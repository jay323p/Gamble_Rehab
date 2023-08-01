// IMPORTS/CONFIGS
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorHandler = require('./middleware/errorMiddleware');
//ROUTE IMPORTS
const userRoute = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome');
});

// ROUTES
app.use('/api/users', userRoute);
app.use('/api/games', gameRoutes);

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

// CONNECT DB AND START SERVER
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log(`DB CONNECTION ERROR: ${err}`);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});
