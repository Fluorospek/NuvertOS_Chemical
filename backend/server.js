const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors=require('cors');
dotenv.config({path: './process.env'});
const sequelize = require('./database');
const compoundRoutes = require('./route/compound.routes');
const swaggerjsdocs = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

app.use(express.json());
app.use(cors());

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

const options={
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Chemical Compounds",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },

        ]
    },
    apis: ["./route/*.js"]
}

const spaces = swaggerjsdocs(options);
app.use(
    "/api-docs",
    swaggerui.serve,
    swaggerui.setup(spaces)
)

app.listen(PORT,()=>{
    db_connect();
    console.log(`Server running on port ${PORT}`)
})