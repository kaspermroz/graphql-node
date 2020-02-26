import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './gql'
import LaunchAPI from './datasources/launch'

const dataSources = () => ({
  launchAPI: new LaunchAPI(),
});
const server = new ApolloServer({ typeDefs, resolvers , dataSources});
const app = express();
const port = process.env.PORT || 3001;
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`Server listening at: http://localhost:${port}${server.graphqlPath}`);
});
