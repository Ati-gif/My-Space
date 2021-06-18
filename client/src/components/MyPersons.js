import React from "react";
import axios from "axios";
import { Card, Divider, Image, Header, Button } from "semantic-ui-react";
import PostForm from "./PostForm";
class MyPersons extends React.Component {
  state = { persons: [] };

   componentDidMount() {
    axios
      .get("/api/my_persons")
      .then((res) => this.setState({ persons: res.data }));
      
  }


  render() {
    const { persons, destroy, editClicked, id } = this.state;
    return (
      <div>
        <br />
        <Header as="h1" color="blue" textAlign="center">
          MySpace
        </Header>
        <Header as="h2" textAlign="center">
          Friends
        </Header>
        <br />
        <Card.Group itemsPerRow={4} >
          {persons.map((person) => (
            <Card key={person.id}>
              <Image src={person.avatar} wrapped ui={false} size="small" />
              <Card.Content >
                <Divider />
                <Card.Header>{person.name} </Card.Header>
                <p>

                </p>
                <Card.Meta> Post: Summer 2021! </Card.Meta>
                <p></p>
                <p>
                <Card.Meta> New Post:  <PostForm /> </Card.Meta>
                </p>
              </Card.Content>
             <Button onClick={() => destroy(id)} button basic color="red" content="red"
             >
        Unfriend
      </Button>
      
      <Button
        onClick={() => editClicked(id)}
        button
        basic
        color="green"
        content="green"
      >
        Edit
      </Button>
      </Card>
      ))}
          </Card.Group>
      </div>
    );
  }
}

export default MyPersons;
