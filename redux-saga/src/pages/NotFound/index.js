import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="backLink" to="/">
        Back
      </Link>
    </div>
  );
}

export default NotFound;
