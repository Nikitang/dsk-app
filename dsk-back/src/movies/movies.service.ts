import { Injectable } from '@nestjs/common';
import { Movie } from './movies.model';
import { InjectModel } from '@nestjs/sequelize';
import { AddMovieDto } from './dto/add-movie';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie) private movieRepo: typeof Movie) {}

    async addMovie(dto: AddMovieDto) {
        const movie = await this.movieRepo.create(dto);

        return movie;
    }

    async getAllMovies() {
        const movies = await this.movieRepo.findAll();

        return movies;
    }
}
