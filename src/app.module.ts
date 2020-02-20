import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql/options/graphql.options';
import { PrismaModule } from './prisma/prisma.module';

@Module( {
  imports: [
    GraphQLModule.forRootAsync( {
      useClass: GraphqlOptions,
    } ),
    PrismaModule,
  ],
  providers: [],
} )
export class AppModule { }
