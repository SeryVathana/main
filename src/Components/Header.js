import React from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";

export default ({ match: { url } }) => {
  return (
    <header>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="title btn">
              Z<span>NA</span>AMZ
            </Link>
          </li>
          <div>
            <li>
              <Link to="/" className="btn btn-new">
                Home
              </Link>
            </li>
            <BsDot className="dot" />
            <li>
              <Link to="/blog" className="btn btn-bookmarks">
                Blogs
              </Link>
            </li>
            <BsDot className="dot" />
            <li>
              <Link to="/contact" className="btn btn-bookmarks">
                Contacts
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};
