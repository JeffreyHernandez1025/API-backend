// import dependencies
const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');

// import routes
const getRouter = require('./routes/get');

// set the port
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// set the endpoints
app.use('/catch', getRouter);

// run server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});