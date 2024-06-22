// src/controllers/categoryController.ts
import { Request, Response } from 'express';
import Category from '../models/Category';

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
