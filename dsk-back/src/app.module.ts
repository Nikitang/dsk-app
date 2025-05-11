import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { Movie } from './movies/movies.model';
import { SessionsModule } from './sessions/sessions.module';
import { SeatsModule } from './seats/seats.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Movie],
            autoLoadModels: true,
        }),
        MoviesModule,
        SessionsModule,
        SeatsModule,
    ],
})
export class AppModule {}
