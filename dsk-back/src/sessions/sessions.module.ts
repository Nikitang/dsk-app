import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Session } from './sessions.model';

@Module({
    controllers: [SessionsController],
    providers: [SessionsService],
    imports: [SequelizeModule.forFeature([Session])],
})
export class SessionsModule {}
