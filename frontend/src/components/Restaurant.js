import React from "react";

const Restaurant = () => {
  const handleDelete = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div></div>
      <button onClick={handleDelete}>x</button>
    </>
  );
};

export default Restaurant;
