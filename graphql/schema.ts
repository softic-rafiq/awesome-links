// export const typeDefs = `
//   type Link {
//     id: ID
//     title: String
//     description: String
//     url: String
//     imageUrl: String
//     users: [String]
//   }

//   type Query {
//     links: [Link]!
//   }
// `;
import { builder } from "./builder";
import "./types/Link";
import "./types/User";

export const schema = builder.toSchema();
