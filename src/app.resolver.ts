import { Resolver, Query } from '@nestjs/graphql';

@Resolver('App')
export class AppResolver {
    @Query(returns => String)
    async helloWorld(): Promise<String> {
        return 'Hello World'
    }
}
