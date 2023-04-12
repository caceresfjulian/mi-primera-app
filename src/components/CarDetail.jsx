import React from "react";
import { useParams } from "react-router-dom";

export default function CarDetail() {
  const { carId } = useParams();

  return <div>{carId}</div>;
}
