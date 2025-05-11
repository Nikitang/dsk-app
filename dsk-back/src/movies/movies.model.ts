import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface MovieCreate {
    title: string;
    duration: string;
    genre: string;
}

@Table({ tableName: 'movies' })
export class Movie extends Model<Movie, MovieCreate> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    duration: string;

    @Column({ type: DataType.STRING, allowNull: false })
    genre: string;
}
