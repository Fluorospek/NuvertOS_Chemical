const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './process.env'});
const sequelize = require('./database');
const compoundRoutes = require('./route/compound.routes');

app.use(express.json());

app.use('/api/compounds', compoundRoutes);

const PORT = process.env.PORT || 3000;

const db_connect = ()=>{
    try{
        sequelize.sync().then(
            console.log('Connected to MySQL Database')
        )
    } catch(err) {
        console.log(err);
    }
}

app.listen(PORT,()=>{
    db_connect();
    console.log(`Server running on port ${PORT}`)
})