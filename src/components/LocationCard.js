import React from "react";
import LocationsList from "./LocationsList";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
      <span className="location-container">
        <LocationsList />
      </span>
    )
}
