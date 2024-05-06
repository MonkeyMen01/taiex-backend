import express from "express";
import bodyParser from "body-parser";
import {getStockDayData} from "./controller/stockDayController.js";
export const app = express();
const port = 3000;
app.use(getStockDayData)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Start in port:${port}`);
});
