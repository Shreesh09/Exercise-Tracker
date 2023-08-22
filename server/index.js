require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('/routes/userRoutes');
const exerciseRoutes = require('/routes/exerciseRoutes');

const app = express();

//Applying Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.get('/', (req, res) => {
    res.json({"hello": "world"});
})

//Connecting to DB
(async ()  => {
    try {
        console.log("Connecting to db...");
        await mongoose.connect(process.env['MONGO_URI'], {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to DB");
    } catch(err) {
        console.log(err);
    }
})();

app.use('/', userRoutes);
app.use('/', exerciseRoutes);

const port = process.env['PORT'] || 3000;
app.listen(port, () => {console.log(`listening on ${port}`)});

