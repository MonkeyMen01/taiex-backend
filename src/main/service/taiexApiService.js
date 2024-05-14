import axios from "axios";
import {StockDay} from "../entitys/StockDay.js";
import {cleanDecimal, formatDate} from "../utils/functions.js";
import {sequelize} from "../utils/dataSource.js";


export const taiexService = {
    getStockDayDataApi: async function () {
        try {
            const getStockRes = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY_ALL?')
            return getStockRes.data
        } catch (e) {
            console.log('擷取收盤資料失敗', e.message)
            return []
        }
    },
    saveAll: async function (items) {
        const lastData = this.findLastOne()
        if(formatDate(items.date) === lastData.date) return
        try {
            const result = await sequelize.transaction(async (t) => {
                const createPromises = items.data.map(item => {
                    return StockDay.create({
                        code: item[0],
                        date: formatDate(items.date),
                        name: item[1],
                        tradeVolume: item[2].replace(/,/g, ''),
                        tradeValue: item[3].replace(/,/g, ''),
                        openingPrice: cleanDecimal(item[4]),
                        highestPrice: cleanDecimal(item[5]),
                        lowestPrice: cleanDecimal(item[6]),
                        closingPrice: cleanDecimal(item[7]),
                        changePrice: cleanDecimal(item[8]),
                        transaction: item[9].replace(/,/g, '')
                    }, {transaction: t})
                })
                return Promise.all(createPromises);
            })
        } catch (e) {
            console.log('save all error:', e)
            return e
        }
    },
    findLastOne() {
        return StockDay.findOne({
            order: [['date', 'DESC']]
        }).then(data => data.get())
            .catch(error => error)
    }

}





