import React, { useEffect } from 'react';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import { posts } from '../../db';

const Menu = ({ cat }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = cat ? posts.filter(post => post.cat === cat).reverse() : posts.reverse();

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div className="post" key={post.id}>
            <Link className="link" to={`/post/${post.id}`}>
              <Image url={post.img}></Image>
              <h2>{post.title}</h2>
              <button>Read More</button>
            </Link>
          </div>
        ))
      ) : (
        <p>No posts available in this category.</p>
      )}
    </div>
  );
};

export default Menu;