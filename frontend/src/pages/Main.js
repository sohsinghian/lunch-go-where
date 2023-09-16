import React, { useState } from "react";
import Restaurants from "../components/Restaurants";
// import axios from "axios";

const Main = () => {
  const [restaurant, setRestaurant] = useState("");

  const handleRestaurantChange = (event) => setRestaurant(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleRequest = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="text-blue-600 text-center font-bold text-6xl">
        Lunch Go Where
      </div>
      <div>Suggest a Restaurant for Lunch:</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          label="name"
          value={restaurant}
          onChange={handleRestaurantChange}
        />
        <button type="submit" className="text-blue-600 font-bold">
          Submit
        </button>
      </form>

      <div>
        <div>Suggested Restaurants</div>
        <Restaurants />
        {/* <button>Remove All</button> */}
      </div>
      <button onClick={handleRequest} className="text-blue-600 font-bold">
        Select Random Restaurant
      </button>
    </>
  );
};

export default Main;
