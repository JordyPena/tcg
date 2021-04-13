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

    let orderBy;

    // case is what is gonna show in my url to the user
    // so when i have released im saying if my url is displaying and param as released
    // change that param to be the line that follows, this is used so i can still fetch my
    //data correctly from my fetch but can display something different to my user
    // if nothing meets my case return what the url is
    if (match.params.orderBy) {
      switch(match.params.orderBy) {
        case 'released':
          orderBy = 'set.releaseDate';
          break;
        case 'set':
          orderBy = 'set.name,number';
          break;
        default:
          orderBy = match.params.orderBy
          break;
      }

      // if i have the optional param desc
      // take my orderBy var and split it and map each value
      // and return that value with a minus sign in front of it
      // join the values together and create a new url to fetch with the new params added to the end
      if (match.params.desc) {
       
        orderBy = orderBy.split(',').map((eachValue) => {
          console.log(eachValue)
          return `-${eachValue}`
        })
        orderBy.join('')
      }
         let orderByParam = `orderBy=${orderBy}`

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

  // pushing to a new path with all my params 
  //if the value of the option is Desc
  const selectedSortOrder = (event) => {
    let url = `/cards/${match.params.name}/${match.params.page}/${match.params.orderBy}`
    if (event.target.value === "Desc") 
      url += '/Desc'
    history.push(url)   
  }

  console.log(match)

  return (
    
    <div className="home-container">
       <div>
         {/* either render value if the orderBy param exist or "name" */}
        <select value={match.params.orderBy || "name"} onChange={(event) => selectedOption(event)}>
          <option value="name">Name</option>
          <option value="released">Release Date</option>
          <option value="set">Set/Number</option>
          <option value="rarity">Rarity</option> 
        </select>  
       </div>
       <div>
         <select value={match.params.desc || "Asc"} onChange={(event) => selectedSortOrder(event)}>
           <option value="Asc">Asc</option>
           <option value="Desc">Desc</option>
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
