import gql from "graphql-tag";

const CREATE_MESSAGE = gql`
  mutation postMessage($content:String!){
    postMessage(content: $content) {
      content
    }
  }
`;

export default CREATE_MESSAGE;
