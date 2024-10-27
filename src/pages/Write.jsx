import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { savePosts, getPosts } from '../../db'; // Import the functions from db.js

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const postId = useLocation().search.split('=')[1];
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const handleClick = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(), // Unique ID based on timestamp
      title,
      desc,
      cat,
      img: file ? URL.createObjectURL(file) : "", // Use a temporary URL for the uploaded image
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    };

    // Get existing posts and add the new post
    const existingPosts = getPosts();
    const updatedPosts = [...existingPosts, newPost];

    // Save the updated posts to local storage
    savePosts(updatedPosts);

    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div className='add'>
      <div className="content">
        <input type='text' value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} />
        <div className='editorContainer'>
          <ReactQuill className='editor' theme='snow' value={desc} onChange={setDesc} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>{(state) ? 'Update' : 'Publish'}</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility </b> Public
          </span>
          <input style={{ display: 'none' }} type="file" id="file" onChange={e => setFile(e.target.files[0])} />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>{(state) ? 'Update' : 'Publish'}</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className='cat'>
            <input type="radio" checked={cat.toLowerCase() === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)} />
            <label htmlFor="art">Art</label>
          </div>
          <div className='cat'>
            <input type="radio" checked={cat.toLowerCase() === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)} />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat.toLowerCase() === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)} />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className='cat'>
            <input type="radio" checked={cat.toLowerCase() === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className='cat'>
            <input type="radio" checked={cat.toLowerCase() === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)} />
            <label htmlFor="design">Design</label>
          </div>
          <div className='cat'>
            <input type="radio" checked={cat.toLowerCase() === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)} />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;