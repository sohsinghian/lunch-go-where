import React from "react";
import axios from "axios";

const Restaurants = (props) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    const restaurantId = event.target.parentNode.id;
    await axios.delete("http://localhost:5001/restaurants/remove", {
      data: {
        restaurantId,
      },
    });
    props.fetchRestaurants();
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {props.restaurants.map((element) => {
          return (
            <>
              <div
                className="grid grid-cols-2 items-center w-1/5"
                id={element.id}
              >
                <p className="py-1">{element.name}</p>
                <button onClick={handleDelete} className="font-bold self-end">
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
