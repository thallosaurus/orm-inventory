import { Sequelize } from "sequelize";

export const sequelize: Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/database.sqlite'
});

sequelize.sync();