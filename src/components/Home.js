import "../styling/home.css";
export default function Home({ searchBar }) {
  return (
    <main className="home-container">
      <div className="home-content">
        <div>
          <h1>Pokémon TCG Guru</h1>
          <h3>A project remake of the Ultimate Pokémon Card Database</h3>
          {searchBar}
          <p>Search by Pokémon name ie: "blastoise"</p>
        </div>

        <a href="http://localhost:3000/card-summary/base1-2">
          <img
            src={`${process.env.PUBLIC_URL}/images/blastoise.png`}
            className="card blastoise"
            alt="pokemon"
          />
        </a>

        <a href="http://localhost:3000/card-summary/base1-15">
          <img
            src={`${process.env.PUBLIC_URL}/images/venusaur.png`}
            className="card venusaur"
            alt="pokemon"
          />
        </a>

        <a href="http://localhost:3000/card-summary/base6-3">
          <img
            src={`${process.env.PUBLIC_URL}/images/charizard.png`}
            className="card charizard"
            alt="pokemon"
          />
        </a>
      </div>

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
    </main>
  );
}
