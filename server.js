//DEPENDENCIES

const express = require('express');

//EXPRESS CONFIGURATION

const app = express();

//Initial port
const PORT = process.env.PORT || 3005;

//Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTER

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER

app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});