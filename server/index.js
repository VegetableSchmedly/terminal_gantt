"use strict";
import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import cors from 'cors';
import 'dotenv/config';

import router from "./routes/movements.js";



// express application
const app = express();



// .env vars
const CONNECTION_URL = process.env.MONGODB_CONNECT_STRING;
const PORT = process.env.PORT;



//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()

});



//routes
app.use('/api/movements', router);



//connect to mongodb
mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
});
