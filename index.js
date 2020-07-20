import { GraphQLServer } from "graphql-yoga"; // babel 설치 필요
import resolvers from "./graphql/resolvers";
console.log("hello");

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
