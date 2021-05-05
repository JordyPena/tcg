import "../styling/card.css";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  return (
    <>
      <div className="card-container">
        <Link to={`/card/${card.name}/${card.id}`}>
          <img src={card.images.small} alt="pokemon" className="card-image" />
        </Link>
      </div>
    </>
  );
}
