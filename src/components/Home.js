import "../styling/home.css";
import Footer from "../components/Footer";
export default function Home({ searchBar, errorMessage }) {
  return (
    <main className="home-container">
      <div className="home-content">
          {errorMessage === true ? <p className="errorMessage">Can only search by Pokémon name ie: blastoise</p> : ""}
        <div>
          <h1 className="title-home">Pokémon TCG Guru</h1>
          <h3 className="explain-title">A project remake of the Ultimate Pokémon Card Database</h3>
          {searchBar}
          <p className="search-by">Search by Pokémon name ie: "blastoise"</p>
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
