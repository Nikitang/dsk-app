import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './seats.model';
import { AddSeatDto } from './dto/add-seat.dto';
import { ChangeSeatDto } from './dto/change-seat-access.dto';

@Injectable()
export class SeatsService {
    constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

    async addSeats(dto: AddSeatDto) {
        const seat = await this.seatRepo.create(dto);

        return seat;
    }

    async getAllSeats() {
        const seats = await this.seatRepo.findAll({
            order: [['id', 'ASC']],
        });

        return seats;
    }

    async updateSeat(dto: ChangeSeatDto) {
        if (!dto.id) {
            throw new BadRequestException('ID места обязательно должен быть указан');
        }

        const [updatedRowsCount] = await this.seatRepo.update(
            { availability: dto.availability },
            { where: { id: dto.id } },
        );

        if (updatedRowsCount === 0) {
            throw new NotFoundException(`Место с id ${dto.id} не найдено`);
        }

        const updatedSeat = await this.seatRepo.findByPk(dto.id);
        return updatedSeat;
    }
}
