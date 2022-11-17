import React from "react";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import { leveningStr } from "../helper";

export default ({ post }) => {
  const { id, title, body } = post;
  return (
    <Link
      className="feature-small post-img"
      to={`/post/${id}`}
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2022/10/31/18/44/spider-web-7560535_960_720.jpg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
    >
      <div className="info">
        <Link className="blog-title" to={`/post/${id}`}>
          {title}
        </Link>

        <p>{renderHTML(leveningStr(body, 150))}... Read More.</p>
      </div>
    </Link>
  );
};
