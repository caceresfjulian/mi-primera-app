import React from "react";
import { NavLink } from "react-router-dom";

const cars = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Benz" },
  { id: 3, name: "Chev" },
];

export default function Home() {
  return (
    <div>
      {cars.map((car) => (
        <div>
          <NavLink to={`/cars/${car.id}`}>{car.name}</NavLink>
        </div>
      ))}
    </div>
  );
}
