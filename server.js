const uuid = require('uuid');
const fs = require('fs');
// const http = require('http');
const express = require('express');
// const path = require('path');
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require('./routes/apiRoutes')(app); // api routes
require('./routes/htmlRoutes')(app); // public HTML




app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

  