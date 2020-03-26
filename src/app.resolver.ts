import { Resolver, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';

@Resolver('App')
export class AppResolver {
    @Query(returns => String)
    async helloWorld(): Promise<String> {
        throw new NotFoundException('foo');
        return 'Hello World'
    }
}
