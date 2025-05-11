import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddMovieDto } from './dto/add-movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Post()
    add(@Body() movieDto: AddMovieDto) {
        return this.moviesService.addMovie(movieDto);
    }

    @Get()
    getAll() {
        return this.moviesService.getAllMovies();
    }
}
