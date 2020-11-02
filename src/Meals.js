import React, { useEffect, useState } from 'react';

function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`/api/meals`).then((res) =>
      res.json().then((data) => {
        setMeals(data);
      })
    );
  }, []);
  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.id}>{meal.title}</div>
      ))}
    </div>
  );
}

export default Meals;
