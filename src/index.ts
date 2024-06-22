// src/index.ts
// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import categoryRoutes from './routes/categoryRoutes';
import sequelize from './sequelize';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', bookRoutes);
app.use('/api', authorRoutes);
app.use('/api', categoryRoutes);
// Add other routes as needed

// Start server
sequelize.authenticate()
    .then(() => {
        console.log('Database connected.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
