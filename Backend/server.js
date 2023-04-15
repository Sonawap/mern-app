require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")
const WorkOutRoutes = require('./routes/workout');
// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path, req.query, req.params);
  next();
});

// routes
app.use('/api/workouts', WorkOutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and Listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  })

