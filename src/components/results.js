import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";
export default function Result({ cardsData, match, loading, cardsPerPage, totalPosts, paginate }) {
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
       <Pagination cardsPerPage={cardsPerPage} totalPosts={totalPosts} paginate={paginate}/>
       <Footer/>
      </div>
  )
}