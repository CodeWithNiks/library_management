"use strict";
// src/routes/bookRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bookController_1 = require("../controllers/bookController");
var router = express_1.default.Router();
router.get('/books', bookController_1.getAllBooks);
// Define other routes (POST, PUT, DELETE) similarly
exports.default = router;
