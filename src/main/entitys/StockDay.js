import {DataTypes, Model} from "sequelize";
import {sequelize} from "../utils/dataSource.js";

export class StockDay extends Model {}

StockDay.init({
    code:{
        type:DataTypes.STRING,
        allowNull:false,
        filed:'code',
        primaryKey: true
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        field:'date',
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false,
        field:'name'
    },
    tradeValue:{
        type:DataTypes.BIGINT,
        allowNull:false,
        field:'trade_value'
    },
    tradeVolume:{
        type:DataTypes.BIGINT,
        allowNull:false,
        field:'trade_volume'
    },
    openingPrice:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
        field:'opening_price'
    },
    highestPrice:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
        field:'highest_price'
    },
    lowestPrice:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
        field:'lowest_price'
    },
    closingPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field:'closing_price'
    },
    changePrice: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field:'change_price'
    },
    transaction: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'transaction'
    }
},{
    sequelize,
    modelName:'StockDay',
    tableName:'stock_day',
    timestamps:false,
    freezeTableName:true,
    primaryKeys:['date','code'],
})

