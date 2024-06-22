// src/routes/authorRoutes.ts
import express from 'express';
import { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor, getBooksByAuthorName } from '../controllers/authorController';

const router = express.Router();

router.get('/authors', getAllAuthors);
router.get('/authors/:id', getAuthorById);
router.post('/authors/add', addAuthor);
router.put('/authors/update/:id', updateAuthor);
router.delete('/authors/delete/:id', deleteAuthor);
router.get('/authors/:name/books', getBooksByAuthorName);

export default router;
