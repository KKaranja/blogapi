const express = require('express');
const mongoose = require('mongoose');
const db = require('./keys').mongoURL;

const createServer = require('./createServer');

mongoose
  .connect(db)
  .then(() => {
    const app = createServer();
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Could not connect to MongoDB and start the server');
    console.log(err);
  });
