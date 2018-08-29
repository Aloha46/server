const express = require('express');
const mongoose = require('mongoose');
const keys = require('./Config/keys');

require('./Models/User');
require('./Services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./Routes/authroutes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);