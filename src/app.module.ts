import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import path = require('path');

@Module({
  imports: [
    GraphQLModule.forRoot(
      {
        autoSchemaFile: path.join(process.cwd(), 'src', 'schema.gql'),
        playground: true,
        debug: true,
        context: ({ req }) => ({ req }),
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
