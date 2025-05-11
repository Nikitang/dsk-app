import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';

@Module({
    controllers: [MoviesController],
    providers: [MoviesService],
    imports: [SequelizeModule.forFeature([Movie])],
})
export class MoviesModule {}
