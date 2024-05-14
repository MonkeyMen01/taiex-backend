import {taiexService} from "../service/taiexApiService.js";



export const getStockDayData = async (req,res)=>{
    try{
        const getStockRes =await taiexService.getStockDayDataApi()
        const saveResult =  await taiexService.saveAll(getStockRes)
        if (saveResult.status === 200) {
            return res.status(200).json({ message: saveResult.message, data: getStockRes });
        } else if (saveResult.status === 204) {
            return res.status(204).json({ message: saveResult.message });
        } else {
            return res.status(saveResult.status).json({ message: saveResult.message, error: saveResult.error });
        }
    }catch (e){
        console.log('擷取收盤資料失敗',e.message)
        res.status(404).send({
            message:e.message
        })
        return []
    }
}