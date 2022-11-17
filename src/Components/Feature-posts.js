import React from "react";

import FeaturePost from "./Feature-post";

export default ({ posts }) => {
  const showPost = posts.map((post) => (
    <FeaturePost key={post.id} post={post} />
  ));

  return <div className="features-blog">{showPost}</div>;
};
