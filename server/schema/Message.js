import { gql } from "apollo-server-express";


// Define Comment schema
const MessageSchema = gql`

type Message {
    id: ID!
    user: String!
    content: String!
    username:String!
  }
  extend type Query {
    messages: [Message!]
  }
  extend type Mutation {
    postMessage( content: String!): Message!
  }
   
    `;
    


export default MessageSchema;
