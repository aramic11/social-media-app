import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useQuery, gql, useMutation} from '@apollo/client';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import { StoreContext } from '../../store/store';
import CREATE_MESSAGE from '../../graphql/Message/SendMessage'
import { useContext } from 'react';






const GET_MESSAGES = gql`
   query {
    messages {
      user
      username
      content
      
    }
  }
`;




const Messages = ( {user}) =>{
  const {data} = useQuery(GET_MESSAGES, {
    
  });
  if (!data){
    return null;

  }
  

return (
  <>
    {data.messages.map(({ id, user: messageUser, content, username }) => (
      <div
        style={{
          display: "flex",
          justifyContent: user === messageUser ? "flex-end" : "flex-start",
          paddingBottom: "1em",
        }}
      >
        {user !== messageUser && (
          <div
            style={{
              height: 50,
              width: 50,
              marginRight: "0.5em",
              border: "2px solid #e5e6ea",
              borderRadius: 25,
              textAlign: "center",
              fontSize: "18pt",
              paddingTop: 5,
            }}
          >
            {username.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div
          style={{
            background: user === messageUser ? "blue" : "#e5e6ea",
            color: user === messageUser ? "white" : "black",
            padding: "1em",
            borderRadius: "1em",
            maxWidth: "60%",
          }}
        >
          {content}
        </div>
      </div>
    ))}
  </>
);
        };


const  Chat  = ()=>{
  const [state, setState] = React.useState ({
    content:"",
  });
  const context = useContext(StoreContext);

  const [createMessage] = useMutation(CREATE_MESSAGE);
    

  // const [postMessage] = useMutation(CREATE_MESSAGE);
  const onSend = () =>{
      
    if(state.content.length > 0){
      createMessage({

        
        content: state.content
        
        
      });

    }

    setState({
      ...state,
      content:''
    })
  }
  return(
    <Container>
    <Row>
    <Col> 
    <Card border='warning' >
      <Card.Header>Contacts</Card.Header>
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
        <ListGroup>
      <ListGroup.Item> </ListGroup.Item>
      
    </ListGroup>
        </Card.Text>
        
      </Card.Body>
    </Card>
     </Col>
        <Col md={{ offset: 4 }}>
        <Card border ="warning">
      <Card.Header >Live Chat</Card.Header>
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
          messages:
          <Messages user="" value = {state}/>
        
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label >  </Form.Label>
        <Form.Control as="textarea" rows={3} value={state.content} onChange={(evt) =>setState({
        ...state, content: evt.target.value,})} 
         onKeyUp={(evt) => {
          if (evt.keyCode === 13){
            onSend();
          }
         }}

         />

        
      </Form.Group>
      </Form>
      </Card.Text>
        <Button variant="primary" onClick={() => onSend()}>Send</Button>
      </Card.Body>
    </Card>

           
      </Col>
    </Row>
   
  </Container>
  )
}


export default Chat;