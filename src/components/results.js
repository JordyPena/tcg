import Card from '../components/Card';
import Pagination from '../components/Pagination';

export default function Result({ cardsData, match, loading, postsPerPage, totalPosts, paginate }) {
  if (loading) {
    return <h2>Loading....</h2>
  }
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
       <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
      </div>
  )
}