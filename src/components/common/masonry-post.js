import React from 'react';

export default function MasonryPost({ post, tagsOnTop }) {
  const windowWidth = window.innerWidth;
  // const style = { background: `url("${require(`../../assets/images/${post.image}`)}")` };
  // const imageURL = require(`../../assets/images/${post.image}`);
  const imageBackground = { backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")` }

  // const style = { backgroundImage: `url("${imageURL}:)` };
  const style = windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <a className='masonry-post overlay' style={style} href={post.link}>
      <div className='image-text'>
        {/* <div className='tags-container'>
          {post.categories.map((tag, ind) =>
            <span key={ind} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
              {tag.toUpperCase()}
            </span>
          )}
        </div> */}
        <div>
          <h2 className='image-title'>{post.title}</h2>
          <span className='image-date'>{post.date}</span>
        </div>
      </div>
    </a>
  )
}