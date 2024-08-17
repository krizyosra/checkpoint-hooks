import React from "react";
import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";


function MovieCard({ obj }) {
  const navigate = useNavigate();

  const clickbutton = () => {
    console.log("ok");
    navigate(`/details/${obj.id}`);
   
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={obj.posterUrl} />
        <Card.Body>
          <Card.Title>{obj.title}</Card.Title>
          <Card.Text>{obj.description}</Card.Text>

          <Rating iconsCount={5} initialValue={obj.rating} readonly={true} />
          <Button
            className="css-button"
            variant="primary"
            onClick={clickbutton}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
