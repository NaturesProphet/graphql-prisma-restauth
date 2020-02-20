require( 'dotenv' ).config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './common/configs/api.conf';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap () {

  const app = await NestFactory.create( AppModule );

  app.useGlobalPipes( new ValidationPipe() );
  app.enableCors( {
    origin: '*'
  } );



  await app.listen( port );
  console.log( `API is ready and listening to port ${port}` );
}

bootstrap();
