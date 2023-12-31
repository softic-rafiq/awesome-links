import { createYoga } from "graphql-yoga";
import { NextApiRequest, NextApiResponse } from "next";
import { schema } from "../../graphql/schema";
// import { resolvers } from "../../graphql/resolvers";
// import { typeDefs } from "../../graphql/schema";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
