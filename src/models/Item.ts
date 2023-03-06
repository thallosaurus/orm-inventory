import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database';

export default class Item extends Model {
    declare id: number;
    declare name: number;
    declare ean: number;
}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ean: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    /*locationId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }*/
}, { sequelize });