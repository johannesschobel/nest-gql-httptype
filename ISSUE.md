# Issue Description

This repository shows the following issue:
Consider the fact, that there is an API serving regular HTTP/REST and GraphQL requests. Respective output, however, should be properly transformed with respect to the "request type" (i.e., GRAPHQL or HTTP).

NestJS recently introduced a new feature, that the `ExecutionContext.getType()` returns `graphql` for `GraphQL` requests, however, this does not apply for the `ArgumentHost`, which is needed in the `ExceptionFilter`.

This repository demonstrates this issue.

## Installation

1) Clone this repository
2) run `npm install` to install all dependencies
3) run `npm run start` to start the server

Now go to `http://localhost:3000/api` and watch the console.
The console should output something like this:

```bash
ExecutionContext with http
Before...
ArgumentHost with http
```

If you now go to `http://localhost:3000/graphql` and call the Query like this:

```bash
{
  helloWorld
}
```

you should see the following output on the console:

```bash
ExecutionContext with graphql
Before...
ArgumentHost with http
```

## Expectation

I would expect the `ArgumentHost` to also output `graphql` for `GraphQL` requests, like it is available in the `ExecutionContext`.

All the best!