// src/models/Category.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

interface CategoryAttributes {
    id: number;
    category_name: string;
}

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    public id!: number;
    public category_name!: string;
}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
        timestamps: false,
    }
);

export default Category;
