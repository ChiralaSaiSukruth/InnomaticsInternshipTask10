
import React, { useState } from "react";
import { FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const validateInputs = () => {
    const { name, author, description, price, image } = inputs;
    if (!name || !author || !description || !price || !image) {
      alert("Please fill all the fields.");
      return false;
    }
    return true;
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      });
      return res.data;
    } catch (err) {
      console.error("Error in sending request:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      sendRequest().then(() => navigate("/books"));
    }
  };

  return (
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
        <FormLabel>Name:</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author:</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description:</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price:</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image:</FormLabel>
        <TextField
          value={inputs.image}
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
              onChange={handleCheckboxChange}
              name="available"
            />
          }
          label="Available"
        />
        <Button type="submit" variant="contained">Add Book</Button>
      </Box>
    </form>
  );
};

export default AddBook;
