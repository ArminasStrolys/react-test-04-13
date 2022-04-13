import React, { useState, useEffect } from "react";
import Dish from "../dish/Dish";

const Dishes = (props) => {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => setDishes(data.meals))
      .catch((error) => console.log(error));
  }, [props.searchTerm]);
console.log(dishes)
  return (
    <div>
      {dishes != null &&
        dishes.map((dish) => (
          <Dish
            key={dish.idMeal}
            name={dish.strMeal}
            category={dish.strCategory}
            img={dish.strMealThumb}
            ingredients={[
              dish.strIngredient1 + ", ",
              dish.strIngredient2 + ", ",
              dish.strIngredient4 + ", ",
              dish.strIngredient5 + ", ",
              dish.strIngredient6 + ", ",
              dish.strIngredient7
            ]}
          />
        ))}
    </div>
  );
};

export default Dishes;
