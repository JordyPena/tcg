import React from "react";
import "../styling/home.css";

export default function Footer() {
  return (
    <div className="footer-position">
      <p className="footer-text">All data made available by the</p>
      <a href="https://pokemontcg.io/" className="tcg-link">
        Pokémon TCG API
      </a>
      <p className="footer-text">
        This website is not produced, endorsed, supported, or affiliated with
        Nintendo or the Pokémon Company.
      </p>
    </div>
  );
}
