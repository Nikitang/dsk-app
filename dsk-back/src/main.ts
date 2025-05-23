import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
    const PORT = process.env.PORT || 5000;

    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:3000',
    });

    await app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
}

start();
