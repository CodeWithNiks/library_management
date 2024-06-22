"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
var sequelize_1 = __importDefault(require("./sequelize"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api', bookRoutes_1.default);
// Add other routes as needed
// Start server
sequelize_1.default.authenticate()
    .then(function () {
    console.log('Database connected.');
    app.listen(PORT, function () {
        console.log("Server is running on http://localhost:".concat(PORT));
    });
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
