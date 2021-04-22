import { Link } from "react-router-dom";

export default function Set({ eachSet }) {
  return (
   
      <div className="set-content">
         <Link to={`/set/${eachSet.name}/${eachSet.id}`}>
        <figure className="figure-img">
          <img
            src={eachSet.images.logo}
            alt="pokemon-logo"
            className="sets-img"
          />
        </figure>
        <div className="set-middle">
          <figure className="figure-logo">
            <img
              src={eachSet.images.symbol}
              alt="pokemon-symbol"
              className="set-logo"
            />
          </figure>
          <div className="set-middle-column">
            <p className="battle">{eachSet.name}</p>
            <p className="released">Released {eachSet.releaseDate}</p>
          </div>
        </div>
        <div className="set-legal">
          <ul className="legalities-style">
            <li>Standard {eachSet.legalities.standard}</li>
            <li>Expanded {eachSet.legalities.expanded}</li>
          </ul>
        </div>
        </Link>
      </div>
  );
}
