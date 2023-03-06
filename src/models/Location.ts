import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import Item from "./Item";

export default class Location extends Model {}

Location.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, { sequelize });

Location.hasOne(Item);