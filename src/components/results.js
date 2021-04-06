import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Summary from "../components/Summary";
import { useHistory } from 'react-router-dom';

export default function Result({ match }) {

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [ numberOfPages,  setNumberOfPages] = useState(0);
  
  const history = useHistory();

  useEffect(() => {

    const { name, page } = match.params

    
    const url =`https://api.pokemontcg.io/v2/cards?q=name:${name}&pageSize=10&page=${page}`

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
      setNumberOfPages(Math.ceil(data.totalCount / data.pageSize))
      console.log("all data",data)
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
  
  const paginate = (pageNumber, pokemonName) => {
    window.scrollTo(0, 0);
    history.push(`/cards/${pokemonName}/${pageNumber}`)
  }

  console.log(match)
  return (
    
    <div className="home-container">
        <div className="card">
          {Object.keys(pokemonData.length) && (
          <>
            {pokemonData.map((card, index) => {
              return <Card card={card} match={match} key={index} />;
            })}
          </>
          )}
        </div>
        
        
       <Pagination numberOfPages={numberOfPages} paginate={paginate} pokemonName={match.params.name}/>
       <Footer/>
      </div>
  )
}
