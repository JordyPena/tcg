import Card from "./Card";
import "../styling/home.css";
export default function Home({ cardsData, match }) {
  return (
    <>
      <div className="row">
        <div className="left">
          {console.log(cardsData)}
          {cardsData.map((card) => {
            return <Card card={card} match={match} />;
          })}
        </div>
      </div>
    </>
  );
}
