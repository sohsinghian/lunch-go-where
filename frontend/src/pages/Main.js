import React, { useState, useEffect } from "react";
import Restaurants from "../components/Restaurants";
import axios from "axios";

const Main = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleRestaurantChange = (event) =>
    setRestaurantName(event.target.value);

  const fetchRestaurants = () => {
    axios.get("http://localhost:5001/restaurants/all").then((res) => {
      const data = res.data;
      setRestaurants(data);
    });
  };

  const handleAddRestaurant = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5001/restaurants/add", {
      restaurantName,
    });
    fetchRestaurants();
    setRestaurantName("");
  };

  const handleRequest = (event) => {
    event.preventDefault();
    const random =
      restaurants[Math.floor(Math.random() * restaurants.length)].name;
    setRandomRestaurant(random);
  };
  return (
    <>
      <div className="text-blue-600 text-center font-bold text-6xl pt-4">
        Lunch Go Where
      </div>

      <div className="flex flex-col text-center">
        <div className="font-bold pb-2 pt-8">
          Suggest a Restaurant for Lunch:
        </div>
        <form onSubmit={handleAddRestaurant}>
          <input
            type="text"
            placeholder="name of restaurant..."
            value={restaurantName}
            onChange={handleRestaurantChange}
            className="bg-slate-200 rounded-md px-4 py-1"
          />
          <button type="submit" className="text-blue-600 font-bold pl-2">
            Submit
          </button>
        </form>
      </div>

      <div className="flex  flex-col text-center">
        <div className="font-bold pb-4 pt-8">Suggested Restaurants</div>
        <Restaurants
          restaurants={restaurants}
          fetchRestaurants={fetchRestaurants}
        />
        {/* <button>Remove All</button> */}
      </div>
      <div className="text-center pt-8">
        <button onClick={handleRequest} className="text-blue-600 font-bold">
          Select a random Restaurant
        </button>
      </div>
      {randomRestaurant && (
        <div className="text-center pt-4">
          We are going to <span className="font-bold">{randomRestaurant} </span>
          for lunch today!
        </div>
      )}
    </>
  );
};

export default Main;
