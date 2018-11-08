import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { ConfigService } from './app/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const packageJson = require('../package.json');

  const options = new DocumentBuilder()
    .setTitle('spotify')
    .setDescription(packageJson.description || 'API')
    .setLicense(packageJson.license || '', '')
    .setVersion(packageJson.version || '0.0.0')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, swaggerDoc);

  const config: ConfigService = app.get('ConfigService');

  await app
    .enableCors()
    .useGlobalPipes(
      new ValidationPipe({
        disableErrorMessages: config.isProdEnvironment,
        transform: true,
        whitelist: true,
      }),
    )
    .listen(config.port);
}
bootstrap();
