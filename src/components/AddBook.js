import { FormLabel, Box, TextField, Button } from "@mui/material";
import React from "react";

const AddBook = () => {
  return (
    <form>
      <Box
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        maxWidth={700}
        alignItems={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
       
        marginTop={20}
      >
        <FormLabel className="label">Name : </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        ></TextField>
        <FormLabel className="label">Author : </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        ></TextField>
        <FormLabel className="label">Description : </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        ></TextField>
        <FormLabel className="label">Price : </FormLabel>
        <TextField
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        ></TextField>
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
