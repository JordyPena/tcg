import Card from "./Card";
import "../styling/home.css";
export default function Home({ cardsData, match }) {
  return (
    <>
      <div className="home-container">
        <div className="card">
          {cardsData && (
          <>
            {cardsData.map((card, index) => {
              return <Card card={card} match={match} key={index} />;
            })}
          </>
          )}
        </div>
      </div>
    </>
  );
}
