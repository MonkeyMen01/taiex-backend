import express from "express";
import {getStockDayData} from "../controller/stockDayController.js";

export const stockDayRouter = express.Router()

stockDayRouter.get('/get/day',getStockDayData)