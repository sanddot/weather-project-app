import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="search-city-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-input"
        />
        <input type="submit" value="Search" className="submit-button" />
      </form>
    </div>
  );
}
