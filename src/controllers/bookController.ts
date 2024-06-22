

import { Request, Response } from 'express';
import Book from '../models/Book';



export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
export const addBook = async (req: Request, res: Response): Promise<void> => {
    const { title, description, published_date, author_id, category_id } = req.body;
  
    try {
      const newBook = await Book.create({
        
        title,
        description,
        published_date,
        author_id,
        category_id,
});
  
      res.status(201).json(newBook);
    } catch (error) {
      console.error('Error adding book:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export const updateBook = async (req: Request, res: Response): Promise<void> => {
    const bookId = parseInt(req.params.id, 10);
    const { title, description, published_date, author_id, category_id } = req.body;
  
    try {
      const book = await Book.findByPk(bookId);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
  
      await book.update({
        title,
        description,
        published_date,
        author_id,
        category_id,
      });
  
      res.json(book);
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export const deleteBook = async (req: Request, res: Response): Promise<void> => {
    const bookId = parseInt(req.params.id, 10);
  
    try {
      const book = await Book.findByPk(bookId);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
  
      await book.destroy();
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

