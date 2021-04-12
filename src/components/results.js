import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

export default function Result({ match }) {

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [ numberOfPages,  setNumberOfPages] = useState(0);

  const history = useHistory();

  useEffect(() => {

    const { name, page } = match.params

    console.log(match.params.orderBy)
    let url =`https://api.pokemontcg.io/v2/cards?q=name:${name}&pageSize=25&page=${page}`

    if (match.params.orderBy) {
      const { orderBy } = match.params
      let orderByParam = [];

        orderByParam.push(`orderBy=${orderBy}`)

        url = url + "&" + orderByParam
        console.log('updated url', url)
    }
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

  const selectedOption = (event) => {
  
    history.push(`/cards/${match.params.name}/${match.params.page}/${event.target.value}`)
  }

  console.log(match)

  return (
    
    <div className="home-container">
       <div>
        <select value={match.params.orderBy || "name"} onChange={(event) => selectedOption(event)}>
          <option value="name">Name</option>
          <option value="set.releaseDate">Release Date</option>
          <option value="set.name,number">Set/Number</option>
          <option value="rarity">Rarity</option> 
        </select>  
       </div>
       <div>
         <select value={match.params.orderBy || "name"} onChange={(event) => selectedOption(event)}>
           <option value={match.params.orderBy || "name"}>Asc</option>
           <option value={`-${match.params.orderBy}` || "name"}>Desc</option>
         </select>
       </div>
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
