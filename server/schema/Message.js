import { gql } from "apollo-server-express";

// Define the schema for post and comment likes
const Message = gql`
  type Message {
    id: ID!
    username: String!
    content: String!

  }

  extend type Query {
    messages: [Message!]
  }
  extend type Mutation {
    postmessage(username: String! , content: String!): ID!
    
  }

`;

export default Message;