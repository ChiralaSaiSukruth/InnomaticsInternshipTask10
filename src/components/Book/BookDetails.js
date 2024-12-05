
import axios from 'axios';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); 
  const { id } = useParams(); 

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/${id}`);
        const data = res.data;
        setInputs(data.book);
        setChecked(data.book.available); 
      } catch (err) {
        console.error("Error fetching book details:", err);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      });
      alert("Your product is updated successfully!"); // Success alert
      return res.data;
    } catch (err) {
      console.error("Error updating book:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/books")); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked); 
    setInputs((prevInputs) => ({
      ...prevInputs,
      available: e.target.checked, 
    }));
  };

  return (
    <div>
      {inputs && (
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
              value={inputs.name || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author:</FormLabel>
            <TextField
              value={inputs.author || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description:</FormLabel>
            <TextField
              value={inputs.description || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price:</FormLabel>
            <TextField
              value={inputs.price || ""}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image:</FormLabel>
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
                  onChange={handleCheckboxChange}
                  name="available"
                />
              }
              label="Available"
            />
            <Button type="submit" variant="contained" color="primary">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
