import "../styling/home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default function Home({ searchBar, errorMessage }) {
  return (
    <main className="home-container">
      <div className="home-content">
        {errorMessage === true ? (
          <p className="errorMessage">
            Can only search by Pokémon name ie: blastoise
          </p>
        ) : (
          ""
        )}
        <div>
          <h1 className="title-home">Pokémon TCG Guru</h1>
          <p className="explain-title">
            A project remake of the Ultimate Pokémon Card Database
          </p>
          {searchBar}
          <p className="search-by">Search by Pokémon name ie: "blastoise"</p>
        </div>

        <Link to="/card/Blastoise/base1-2">
          <img
            src={`${process.env.PUBLIC_URL}/images/blastoise.png`}
            className="card blastoise hvr-bob"
            alt="pokemon"
          />
        </Link>

        <Link to="/card/Venusaur/base1-15">
          <img
            src={`${process.env.PUBLIC_URL}/images/venusaur.png`}
            className="card venusaur hvr-bob"
            alt="pokemon"
          />
        </Link>

        <Link to="/card/Charizard/base6-3">
          <img
            src={`${process.env.PUBLIC_URL}/images/charizard.png`}
            className="card charizard hvr-bob"
            alt="pokemon"
          />
        </Link>
      </div>

      <div className="home-footer">
        <Footer />
      </div>
    </main>
  );
}
