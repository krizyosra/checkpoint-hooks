import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


function Details({data}) {

  const params= useParams()
  const obj= data.find(el=>el.id==params.id)
  console.log(obj)
  return (
    <div>
      <iframe className="iframe" src={obj.trailerSrc}></iframe>
      <br></br>
      <Link to={"/"}><button className="css-button">Return</button></Link>
    </div>
  );
}

export default Details;
