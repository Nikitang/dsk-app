import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SeatsCreate {
    seatNumber: number;
    availability: boolean;
}

@Table({ tableName: 'seats' })
export class Seat extends Model<Seat, SeatsCreate> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
    seatNumber: number;

    @Column({ type: DataType.BOOLEAN, allowNull: false })
    availability: boolean;
}
