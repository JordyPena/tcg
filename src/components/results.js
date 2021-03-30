import Card from '../components/Card';

export default function Result({ cardsData, match, }) {
  return (
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
  )
}