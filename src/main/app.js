import express from "express";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express'
import {getStockDayData} from "./controller/stockDayController.js";
import {swaggerSpec} from "./utils/swagger.js";
export const app = express();
const port = 3000;
app.use(getStockDayData)
    .use('/api-docs',swaggerUi.server,swaggerUi.setup(swaggerSpec))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Start in port:${port}`);
});
