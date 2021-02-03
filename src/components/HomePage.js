
import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  const { text, onClick, path } = props;
  return (
    <Link onClick={onClick} to={path}>
      <div>{text}</div>
    </Link>
  );
}

export default HomePage;
