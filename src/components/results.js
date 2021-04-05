import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Summary from "../components/Summary";
export default function Result({ match }) {

  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [invalidSearch, setInvalidSearch] = useState(false);
 
  useEffect(() => {

    const { name } = match.params

    const url =`https://api.pokemontcg.io/v2/cards?q=name:${name}`

    fetch(url)
    .then((response) => {
      setLoading(true);
      if (response.status === 400) {
        setInvalidSearch(true);
        throw new Error("Type a valid pokemon name in field");
      }
      return response.json();
    })
    .then((data) => {
      setInvalidSearch(false);
      setPokemonData(data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error({ error });
    });
  }, [match]);

  if (loading) {
    return <h2>Loading....</h2>
  }
  
   // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemonData === "undefined" ? "" : pokemonData.slice(indexOfFirstCard, indexOfLastCard);

  console.log("it works", currentCards)

  const paginate = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber)
  }

  return (
    
    <div className="home-container">
        <div className="card">
          {currentCards && (
          <>
            {currentCards.map((card, index) => {
              return <Card card={card} match={match} key={index} />;
            })}
          </>
          )}
        </div>
        
        
       <Pagination cardsPerPage={cardsPerPage} totalCards={pokemonData.length} paginate={paginate}/>
       <Footer/>
      </div>
  )
}
