import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";


function Forms({ addMovie }) {
  const [tit, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [Url, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const Add = (e) => {
    e.preventDefault();

    console.log("Title:", tit);
    console.log("Description:", desc);
    console.log("PosteUrl:", Url);
  

    const newMovie = {
      tit,
      desc,
      Url,
      rating,
    };

    addMovie(newMovie);

    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating("");
  };
  return (
    <div>
      <Form onSubmit={Add}>
        <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder=" title"
            value={tit}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 mx-3"
          controlId="formBasicCheckbox"
        ></Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="posterUrl"
            value={Url}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
