"use strict";
// sequelize.ts
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize('library', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = sequelize;
