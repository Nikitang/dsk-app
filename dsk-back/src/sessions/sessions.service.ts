import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Session } from './sessions.model';
import { AddSessionDto } from './dto/add-session.dto';

@Injectable()
export class SessionsService {
    constructor(@InjectModel(Session) private sessionRepo: typeof Session) {}

    async addSession(dto: AddSessionDto) {
        const session = await this.sessionRepo.create(dto);

        return session;
    }

    async getAllSessions() {
        const seesions = await this.sessionRepo.findAll();

        return seesions;
    }
}
