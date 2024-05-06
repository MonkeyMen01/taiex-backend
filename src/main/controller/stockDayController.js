import {taiexService} from "../service/taiexApiService.js";



export const getStockDayData = async (req,res)=>{
    try{
         const getStockRes =await taiexService.getStockDayDataApi()
        await taiexService.saveAll(getStockRes)
        return res.json(getStockRes)
    }catch (e){
        console.log('擷取收盤資料失敗',e.message)
        res.status(404).send({
            message:e.message
        })
        return []
    }
}