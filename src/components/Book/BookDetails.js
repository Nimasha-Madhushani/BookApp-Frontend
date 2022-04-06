import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const id = useParams().bid;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:500/books/${id}`).then((res) => {
        console.log(res.data);
      });
    };
    fetchHandler();
  }, [id]); //whenever the id changed in url we can fetch that product with the id
  return <div></div>;
};

export default BookDetails;
