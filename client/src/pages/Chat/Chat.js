import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery, gql, useMutation } from '@apollo/client';
import React from 'react';
import CREATE_MESSAGE from '../../graphql/Message/SendMessage'

const GET_MESSAGES = gql`
   query {
    messages {
      user
      username
      content
      
    }
  }
`;




const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES, {
    pollInterval: 500,})

  if (!data) {
    return null;
  }

  console.log('Messages is rendering with data > ', JSON.stringify(data))

  return (

    <>
    
      {data.messages.map(({ user: messageUser, content, username }, i) => (
        <div
          key={`message-${i}`}
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
              color: user === messageUser ? "blue" : "black",
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


const Chat = () => {
  const [state, setState] = React.useState({
    content: "",
  });

  const [postMessage] = useMutation(CREATE_MESSAGE);
  const onSend = (evt) => {
    evt.preventDefault();

    if (state.content) {
      postMessage({
        variables: { content: state.content }
      }).then(() => {
        setState({
          ...state,
          content: ''
        })
      }).catch(console.error)
    }
  }

  return (
    <Container>
      <Row>

        <Col md={{ offset: 4 }}>
          <Card border="warning">
            <Card.Header >Live Chat</Card.Header>
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Body>
                messages:
                <Messages user="" value={state} />

                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >  </Form.Label>
                    <Form.Control  as="textarea" rows={3} value={state.content} onChange={(evt) => setState({
                      ...state, content: evt.target.value,
                    })}
                      onKeyUp={(evt) => {
                        if (evt.keyCode === 13) {
                          onSend(evt);
                        }
                      }}

                    />
                    <Button variant="primary" onClick={(evt) => onSend(evt)}>Send</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card.Body>
          </Card>

        </Col>
      </Row>

    </Container>
  )
}


export default Chat;