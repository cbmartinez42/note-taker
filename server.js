const fs = require('fs');
// const nodemon = require('nodemon');
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routers
require('./routes/apiRoutes')(app); // api routes
app.use(express.static('public'));
require('./routes/htmlRoutes')(app); // public HTML


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

  // npm run start