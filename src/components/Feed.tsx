import * as React from 'react';

import { useGetPostsQuery, Loader } from '@snapify/shared-modules';

const Feed: React.FC = () => {
  const { data, error, loading } = useGetPostsQuery();

  if (!data || loading) {
    return <Loader />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {data.getPosts.map(({ _id, title, text }) => (
        <div key={_id}>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Feed;
