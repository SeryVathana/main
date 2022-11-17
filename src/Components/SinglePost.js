import React from "react";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import "../App.css";
export default ({
  match: {
    params: { id },
  },
  posts,
}) => {
  let post = posts.filter((post) => post.id === id);
  post = post[0];

  return (
    <div className="single-post">
      <Link to={`/blog`} className="btn go-back">
        Go Back
      </Link>
      <h1 className="header">{post.title}</h1>
      <div
        className={`post-img`}
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2022/10/31/18/44/spider-web-7560535_960_720.jpg)`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className="para">{renderHTML(post.body)}</div>
    </div>
  );
};
