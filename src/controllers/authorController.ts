// src/controllers/authorController.ts
import { Request, Response } from 'express';
import Author from '../models/Author';
import Book from '../models/Book'; // Import Book model assuming it's in Book.ts

export const getAllAuthors = async (req: Request, res: Response): Promise<void> => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (error) {
        console.error('Error fetching authors:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAuthorById = async (req: Request, res: Response): Promise<void> => {
    const authorId = parseInt(req.params.id, 10);

    try {
        const author = await Author.findByPk(authorId);
        if (!author) {
            res.status(404).json({ message: 'Author not found' });
            return;
        }
        res.json(author);
    } catch (error) {
        console.error('Error fetching author:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const addAuthor = async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;

    try {
        const newAuthor = await Author.create({
            name,
            description,
        });

        res.status(201).json(newAuthor);
    } catch (error) {
        console.error('Error adding author:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateAuthor = async (req: Request, res: Response): Promise<void> => {
    const authorId = parseInt(req.params.id, 10);
    const { name, description } = req.body;

    try {
        const author = await Author.findByPk(authorId);
        if (!author) {
            res.status(404).json({ message: 'Author not found' });
            return;
        }

        await author.update({
            name,
            description,
        });

        res.json(author);
    } catch (error) {
        console.error('Error updating author:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteAuthor = async (req: Request, res: Response): Promise<void> => {
    const authorId = parseInt(req.params.id, 10);

    try {
        const author = await Author.findByPk(authorId);
        if (!author) {
            res.status(404).json({ message: 'Author not found' });
            return;
        }

        await author.destroy();
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting author:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const getBooksByAuthorName = async (req: Request, res: Response): Promise<void> => {
    const authorName = req.params.name;

    try {
        // Find author by name
        const author = await Author.findOne({ where: { name: authorName } });

        if (!author) {
            res.status(404).json({ message: 'Author not found' });
            return;
        }

        // Fetch books associated with the author
        const books = await author.getBooks();

        res.json(books);
    } catch (error) {
        console.error('Error fetching books by author:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
