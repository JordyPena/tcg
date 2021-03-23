import Card from "./Card";
import "../styling/home.css";
export default function Home({ cardsData, match }) {
  return (
    <>
      <div className="home-container">
        <div className="card">
          {cardsData.map((card) => {
            return <Card card={card} match={match} />;
          })}
        </div>
      </div>
    </>
  );
}
