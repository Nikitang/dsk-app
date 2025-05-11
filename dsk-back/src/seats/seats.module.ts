import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat } from './seats.model';

@Module({
    providers: [SeatsService],
    controllers: [SeatsController],
    imports: [SequelizeModule.forFeature([Seat])],
})
export class SeatsModule {}
