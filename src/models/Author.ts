// src/models/Author.ts
import { DataTypes, Model, HasManyGetAssociationsMixin} from 'sequelize';
import sequelize from '../sequelize';
import Book from './Book'; 

interface AuthorAttributes {
    
    name: string;
    description: string;
}

class Author extends Model<AuthorAttributes> implements AuthorAttributes {
    
    public name!: string;
    public description!: string;
    public getBooks!: HasManyGetAssociationsMixin<Book>; // Function provided by sequelize for association

    // Other model setup (init, etc.) remains unchanged

    // Method to associate with Book model
    static associate(models: any) {
        this.hasMany(models.Book, { foreignKey: 'author_id', as: 'books' });
    }
}

Author.init(
    {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Author',
        tableName: 'authors',
        timestamps: false,
    }
);

export default Author;
