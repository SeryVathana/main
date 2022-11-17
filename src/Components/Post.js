import React from "react";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import { leveningStr } from "../helper";

export default ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <div
        className={`post-img`}
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2022/10/31/18/44/spider-web-7560535_960_720.jpg)`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className="info">
        <Link className="blog-title" to={`/post/${id}`}>
          {title}
        </Link>

        <p>{renderHTML(leveningStr(body, 100))}...</p>

        <Link to={`/post/${id}`} className="btn read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};
