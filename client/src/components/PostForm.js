import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import axios from "axios";

export default function PostForm(props) {
  const [showForm, setShowForm] = useState(false);  
  const [post, setPost] = useState(props.post ? props.post : "");

    async function display(e) {
    console.log("clicked");
    const data = { post: post };
    if (props.id) {
      let res = await axios.put(`/api/posts/${props.id}}`, data); // update method 'look in localhost:routes'
      props.edit(res.data);
    } else {
      let res = await axios.post(`/api/posts`, data); // create method 'look in localhost:routes'
      props.add(res.data);
    }
  };
  
  if (showForm) {
    console.log(showForm);
    return (
      <Form onSubmit={display}>
        <Form.Input
          value={post}
          label={"type here:"}
          onChange={(e) => setPost(e.target.value)}
        />
        <Button color="" icon basic onClick={() => this.dislike(post.id)}>
          <Icon name="x" />
        </Button>
        <Button color="pink" icon basic onClick={() => this.like(post.id)}>
          <Icon name="like" />
        </Button>
        <Form.Button color="teal">Submit</Form.Button>
      </Form>
    );
    } else {
    return (
      <Button
        onClick={() => setShowForm(true)}
        basic
        color="teal"
        content="Teal"
      >
        Show Form
      </Button>
    );
  }
}
