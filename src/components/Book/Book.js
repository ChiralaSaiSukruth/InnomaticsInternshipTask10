// import { Button } from '@mui/material';
// import React from 'react'
// import "./Book.css"
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const Book = (props) => {
//   const history = useNavigate()
//     const{_id,name,author,description,price,image}=props.book;
//     const deleteHandler =async()=>{
//      await axios.delete(`http://localhost:5000/books/${_id}`)
//      .then(res=>res.data)
//      .then(()=>history("/"))
//      .then(()=>history("/books"))
//     }
//   return (
//     <div className='card' style={{width:"18rem",border:"2px solid black", height:"70%", justifyContent:"center", alignItems:"center",margin:"10px",padding:"10px"}}>
// <img src={image} alt={name} width={200}/>
// <article>By {author}</article>
// <h3>{name}</h3>
// <p>{description}</p>
// <h2>Rs{price}</h2>
// <Button LinkComponent={Link} to={`/books/${_id}`} className='Update' style={{width:"20%", height:"1%", border:"2px solid green",margin:"4px"}}>Update</Button>
// <Button onClick={deleteHandler}className='Delete'style={{width:"20%", height:"1%", border:"2px solid red",margin:"4px"}}>Delete</Button>
//     </div>
//   )
// }

// export default Book
import { Button } from '@mui/material';
import React from 'react';
import "./Book.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data);
      alert("Your product has been deleted successfully!"); // Success alert
      history("/books"); // Redirect to books page after deletion
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete the product. Please try again."); // Error alert
    }
  };

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        border: "2px solid black",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img src={image} alt={name} width={200} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button
        LinkComponent={Link}
        to={`/books/${_id}`}
        className="Update"
        style={{
          width: "20%",
          height: "1%",
          border: "2px solid green",
          margin: "4px",
        }}
      >
        Update
      </Button>
      <Button
        onClick={deleteHandler}
        className="Delete"
        style={{
          width: "20%",
          height: "1%",
          border: "2px solid red",
          margin: "4px",
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Book;
