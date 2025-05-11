import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { AddSeatDto } from './dto/add-seat.dto';
import { ChangeSeatDto } from './dto/change-seat-access.dto';

@Controller('seats')
export class SeatsController {
    constructor(private seatsService: SeatsService) {}

    @Post()
    add(@Body() seatDto: AddSeatDto) {
        return this.seatsService.addSeats(seatDto);
    }

    @Get()
    getAll() {
        return this.seatsService.getAllSeats();
    }

    @Patch()
    update(@Body() dto: ChangeSeatDto) {
        return this.seatsService.updateSeat(dto);
    }
}
