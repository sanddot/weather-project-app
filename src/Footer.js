import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a href="https://github.com/sanddot" target="_blank" rel="noreferrer">
          Sandra Domeikiene
        </a>
        , is{" "}
        <a
          href="https://github.com/sanddot/weather-project-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://check-weather-project-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
