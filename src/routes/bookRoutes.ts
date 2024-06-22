

import express from 'express';
import { addBook, deleteBook, getAllBooks, updateBook } from '../controllers/bookController';


const router = express.Router();

router.get('/books', getAllBooks);

router.post('/books/add',addBook );


router.put('/books/update/:id',updateBook );


router.delete('/books/delete/:id',deleteBook );

export default router;
