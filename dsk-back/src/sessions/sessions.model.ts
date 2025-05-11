import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SessionCreate {
    time: string;
    period: string;
}

@Table({ tableName: 'sessions' })
export class Session extends Model<Session, SessionCreate> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    time: string;

    @Column({ type: DataType.STRING, allowNull: false })
    period: string;
}
