// sequelize.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('library', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
