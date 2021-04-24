import "../styling/home.css";
import Footer from "../components/Footer";
export default function Home({ searchBar, errorMessage }) {
  return (
    <main className="home-container">
      <div className="home-content">
        <div>
          <h1>Pokémon TCG Guru</h1>
          <h3>A project remake of the Ultimate Pokémon Card Database</h3>
          {errorMessage === true ? <p>Can only search by pokemon name ie: blastoise</p> : ""}
          {searchBar}
          <p>Search by Pokémon name ie: "blastoise"</p>
        </div>

        <a href="http://localhost:3000/card/Blastoise/base1-2">
          <img
            src={`${process.env.PUBLIC_URL}/images/blastoise.png`}
            className="card blastoise"
            alt="pokemon"
          />
        </a>

        <a href="http://localhost:3000/card/Venusaur/base1-15">
          <img
            src={`${process.env.PUBLIC_URL}/images/venusaur.png`}
            className="card venusaur"
            alt="pokemon"
          />
        </a>

        <a href="http://localhost:3000/card/Charizard/base6-3">
          <img
            src={`${process.env.PUBLIC_URL}/images/charizard.png`}
            className="card charizard"
            alt="pokemon"
          />
        </a>
      </div>

      <div className="home-footer">
        <Footer />
      </div>
    </main>
  );
}
