import React from 'react';
import "../styling/home.css"

export default function Footer() {
  return (
    <div className="home-footer">
    <p>All data made available by the</p>
    <a href="https://pokemontcg.io/" className="tcg-link">
    Pokémon TCG API
    </a>
    <p>
      This website is not produced, endorsed, supported, or affiliated with
      Nintendo or the Pokémon Company.
    </p>
  </div>
  )
}