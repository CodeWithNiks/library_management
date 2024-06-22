

import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

interface BookAttributes {
    
    title: string;
    description: string;
    published_date: Date;
    author_id: number;
    category_id: number;
}

class Book extends Model<BookAttributes> implements BookAttributes {
    
    public title!: string;
    public description!: string;
    public published_date!: Date;
    public author_id!: number;
    public category_id!: number;
}

Book.init(
    {
       
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        published_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Book',
        tableName: 'books',
        timestamps: false,
    }
);

export default Book;
