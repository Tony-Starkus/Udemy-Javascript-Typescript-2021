import React from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  console.log(params);
  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs}`}
      </h1>
      <Outlet />
    </div>
  );
};

export default Post;
