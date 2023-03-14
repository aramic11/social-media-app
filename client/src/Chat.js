import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });
  const GET_MESSAGES = gql`
  query{
    messages{
      id,
      content,
      username
    }
  }`;
  
  const Messages = ({username}) =>{
    const {data} = useQuery(GET_MESSAGES);
    if (!data){
        return null;
    }
    return JSON.stringify(data);
  }

  const Chat = () =>{
    return (
        <div>
            <Messages username="Jack"/>
        </div>
    )
  }

  export default () => (
    <ApolloProvider client={client}>
        <Chat/>
    </ApolloProvider>

  );