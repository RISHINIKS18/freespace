const express = require('express');
require('dotenv').config();
const StocksTransactions = require('./controller/stocks')
const mongoConfig = require("./config/mongo.js");
const bodyParser = require('body-parser').json();
const app = express();
const port = `${process.env.PORT}`;
const cron = require("node-cron");
const request = require('request');

//login Router
app.post('/login',
    bodyParser,
    StocksTransactions.login
)

//Add Stock Router
app.post('/addStock',
    bodyParser,
    StocksTransactions.addStock
);

//Update Stock Router
app.post('/updateStockPrice/:stockName',
    StocksTransactions.updateStockPrice
);

//Get Stock Price Router
app.get('/getStockPrice/:stockName',
    StocksTransactions.getStockPrice
);

//Get All Stock Price Router 
app.get('/getAllStockPrice',
    StocksTransactions.getAllStockPrice
)

//Cron schedular for every 30 sec to get Stock Price
cron.schedule("*/30 * * * * *", () => {
    console.log("running a task every 30 Seconds");
    request('http://localhost:6060/getStockPrice/6321e562bdb07bffb28cc373', function (error, response) {
        console.log('##response#', response.body);
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    })
})


app.listen(port, () => console.log(`App Listing on  ${port}`));
module.exports = app;
mongoConfig.bootstrap();

