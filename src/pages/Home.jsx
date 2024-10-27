
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Image from '../components/Image.jsx';
import { posts } from '../../db.js';

const Home = () => {
  const cat = useLocation().search.toLowerCase().split('=')[1]


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  const filteredPosts = cat ? posts.filter(post => post.cat === cat) : posts;

  return (
    (filteredPosts.length !== 0) ? (
      <div className='home'>
        <div className="posts">
          {filteredPosts.map(post => (
            <div className="post" key={post.id}>
              <Image url={post.img}></Image>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title.substring(0, 100)}</h1>
                </Link>
                <p>{getText(post.desc).substring(0, 200)}.....</p>
                <Link className="link" to={`/post/${post.id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className='home'>
        <div className='loading'>
          <img src='https://i.giphy.com/feN0YJbVs0fwA.webp' alt="Loading" />
          <h1>Loading...</h1>
        </div>
      </div>
    )
  );
};

export default Home;

  
 