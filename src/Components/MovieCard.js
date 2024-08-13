import React from "react";

import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";

function MovieCard({ obj }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={obj.posterUrl} />
        <Card.Body>
          <Card.Title>{obj.title}</Card.Title>
          <Card.Text>{obj.description}</Card.Text>
         
          <Rating iconsCount={5} initialValue={obj.rating} readonly={true}/>
        </Card.Body>
        
      </Card>
    </div>
  );
}

export default MovieCard;
