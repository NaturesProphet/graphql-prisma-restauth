import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql/options/graphql.options';

@Module( {
  imports: [
    GraphQLModule.forRootAsync( {
      useClass: GraphqlOptions,
    } ),
  ],
  providers: [],
} )
export class AppModule { }