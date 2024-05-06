import {taiexService} from "./taiexApiService.js";
import schedule from 'node-schedule';

const saveStockDayInformation = async ()=>{
    const today =new Date().toISOString()
    try{
        const getStockRes = await taiexService.getStockDayDataApi()
        await taiexService.saveAll(getStockRes)
        console.log('Scheduled Successful:',today)
    }catch (e){
        console.error('擷取收盤資料失敗:',today)
    }
}

const setupSchedule=()=>{
    schedule.scheduleJob('0 19 * * 1-5')
}

setupSchedule();
