const express = require('express');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 3500;

// Define routes
app.use('/user', require('./routes/user'));

app.listen(PORT,  () => {
  console.log(`App listening on port ${PORT}!`);
});
