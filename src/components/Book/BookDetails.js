import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Checkbox,
  FormControlLabel,
  Button,
  FormLabel,
  Box,
  TextField,
} from "@mui/material";
const BookDetails = () => {
    const history=useNavigate()
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const id = useParams().bookId;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]); //whenever the id changed in url we can fetch that product with the id

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/books/${id}`,{
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
    }).then(res=>res.data)//this then will add data 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/books"))
  };
  //console.log(inputs)
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    //console.log(e.target.name, "Value", e.target.value);
  };

  return (
    <div>
      {inputs && ( //only render the form ,when we have data in the inputs
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel className="label">Name : </FormLabel>
            <TextField
              value={inputs.name || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel className="label">Author : </FormLabel>
            <TextField
              value={inputs.author || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel className="label">Description : </FormLabel>
            <TextField
              value={inputs.description || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel className="label">Price : </FormLabel>
            <TextField
              value={inputs.price || ""}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel className="label">Image : </FormLabel>
            <TextField
              value={inputs.image || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
              }
              label="Available"
            />
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
