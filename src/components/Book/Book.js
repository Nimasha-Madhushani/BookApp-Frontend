import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const Book = (props) => {
  const { _id, name, author, description, price, available, image } =
    props.book_props;
  return (
    <div>
      <img src={image} alt={name} />
      <article>Bt {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs{price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>Update</Button>
      <Button sx={{ mt: "auto" }}>Delete</Button>
    </div>
  );
};

export default Book;
