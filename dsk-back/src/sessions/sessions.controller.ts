import { Body, Controller, Get, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { AddSessionDto } from './dto/add-session.dto';

@Controller('sessions')
export class SessionsController {
    constructor(private sessionService: SessionsService) {}

    @Post()
    add(@Body() movieDto: AddSessionDto) {
        return this.sessionService.addSession(movieDto);
    }

    @Get()
    getAll() {
        return this.sessionService.getAllSessions();
    }
}
