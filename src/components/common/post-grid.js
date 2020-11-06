import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Tacos from '../../assets/images/tacos.jpg';

export default function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize, posts]);


  return (
    <section className='grid-pagination-container'>
      <section className='post-grid container'>
        {paginatedPosts.map((post, index) => (
          <div className='post-container'>
            <figure>
              <Link to={post.link}>
                {console.log(post.image)}
                <img src={require(`../../assets/images/${post.image}`)} alt={post.image} />
              </Link>
            </figure>
          </div>
        ))}
      </section>
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  )
}