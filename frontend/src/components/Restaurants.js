import React, { useState, useEffect } from "react";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/restaurants/all").then((res) => {
      const data = res.data;
      setRestaurants(data);
    });
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* <p>{restaurants[0].name}</p> */}
      <div>
        {restaurants.map((element) => {
          return (
            <>
              <div className="flex flex-row">
                <p className="pr-2">{element.name}</p>
                <button onClick={handleDelete} className="font-bold">
                  X
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Restaurants;
