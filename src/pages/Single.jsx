import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import moment from 'moment';
import DomPurify from 'dompurify';
import Image from '../components/Image.jsx';
import { posts } from '../../db.js';

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = parseInt(location.pathname.split("/")[2]); // Ensure postId is an integer

  useEffect(() => {
    // Find the post in the static posts array
    const foundPost = posts.find(p => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
    }
    window.scrollTo(0, 0);
  }, [postId]);

  const handleDelete = () => {
    // Filter out the post from the posts array
    const updatedPosts = posts.filter(p => p.id !== postId);
    // Normally, you would want to update your state or context here
    console.log('Updated posts after deletion:', updatedPosts);
    navigate("/");
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  return (
    <div className='single'>
      <div className="content">
        <Image url={post?.img}></Image>
        <div className='user'>
          <img src={post.userImage ? post.userImage : `http://cdn-icons-png.flaticon.com/128/1144/1144760.png`} alt="User " />
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()} </p>
          </div>
          {/* Assuming currentUser  is defined somewhere in your app */}

            <div className="edit">
              <Link to={`/write?edit=${postId}`} state={post}>
                <img src={"https://cdn-icons-png.flaticon.com/128/10336/10336582.png"} alt="Edit" />
              </Link>
              <img onClick={handleDelete} src="https://cdn-icons-png.flaticon.com/128/9068/9068885.png" alt="Delete" />
            </div>
          
        </div>
        <h1>{getText(post.title)}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DomPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;