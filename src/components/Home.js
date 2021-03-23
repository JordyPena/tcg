import Card from "./Card";
import Summary from "./Summary";
import "../styling/home.css";
export default function Home({ cardsData }) {
  return (
    <>
    
        <div className="row">
          <div className="left">
            {console.log(cardsData)}
            {cardsData.map((card) => {
              return <Card card={card} />;
            })}
          </div>

          <div className="right">
            {cardsData.map((card) => {
              return <Summary card={card} />;
            })}
          </div>
        </div>
    
    </>
  );
}
