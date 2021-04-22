import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export default function SetResults({ match }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const { id, page, pageSize, orderBy, desc } = match.params;

    console.log(match.params);
    let url = `https://api.pokemontcg.io/v2/cards?q=set.id:${id}&page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&desc=${desc}`;

    let orderByText;

    // case is what is gonna show in my url to the user
    // so when i have released im saying if my url is displaying and param as released
    // change that param to be the line that follows, this is used so i can still fetch my
    //data correctly from my fetch but can display something different to my user
    // if nothing meets my case return what the url is
    if (match.params.orderBy) {
      switch (match.params.orderBy) {
        case "released":
          orderByText = "set.releaseDate";
          break;
        case "set":
          orderByText = "set.name,number";
          break;
        default:
          orderByText = match.params.orderBy;
          break;
      }

      // if i have the optional param desc
      // take my orderBy var and split it and map each value
      // and return that value with a minus sign in front of it
      // join the values together and create a new url to fetch with the new params added to the end
      if (match.params.desc === "Desc") {
        orderByText = orderByText.split(",").map((eachValue) => {
          return `-${eachValue}`;
        });
        orderByText.join("");
      }
      let orderByParam = `orderBy=${orderByText}`;

      url = url + "&" + orderByParam;
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
        setNumberOfPages(Math.ceil(data.totalCount / data.pageSize));
        setInvalidSearch(false);
        setPokemonData(data.data);
        console.log("all data", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error({ error });
      });
  }, [match]);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  const paginate = (
    pageNumber,
    pokemonName,
    cardsPerPage,
    orderCardsBy,
    ascOrDesc
  ) => {
    window.scrollTo(0, 0);
    history.push(
      `/sets/${pokemonName}/${pageNumber}/${cardsPerPage}/${orderCardsBy}/${ascOrDesc}`
    );
  };

  // this is for sortBy param
  const selectedOption = (event) => {
    if (match.params.page !== "1") {
      history.push(
        `/sets/${match.params.id}/1/${match.params.pageSize}/${event.target.value}/${match.params.desc}`
      );
    } else
      history.push(
        `/sets/${match.params.id}/${match.params.page}/${match.params.pageSize}/${event.target.value}/${match.params.desc}`
      );
  };

  // pushing to a new path with all my params
  //if the value of the option is Desc
  const selectedSortOrder = (event) => {
    if (match.params.page !== "1") {
      let url = `/sets/${match.params.id}/1/${match.params.pageSize}/${match.params.orderBy}`;
      if (event.target.value === "Desc") {
        url += "/Desc";
        history.push(url);
      } else url += "/Asc";
      history.push(url);
    } 
    
    else if (match.params.page === "1"){
      let url = `/sets/${match.params.id}/${match.params.page}/${match.params.pageSize}/${match.params.orderBy}`;
      if (event.target.value === "Desc") {
        url +="/Desc"
        history.push(url)
      } else url += "/Asc"
      history.push(url);
    }
  };

  // this is for pageSize param
  const selectedPageSize = ({ target }) => {
    if (match.params.page !== "1") {
      let url = `/sets/${match.params.id}/1/${target.value}/${match.params.orderBy}/${match.params.desc}`;
      history.push(url);
    } else {
      let url = `/sets/${match.params.id}/${match.params.page}/${target.value}/${match.params.orderBy}/${match.params.desc}`;
      history.push(url);
    }
  };

  return (
    <div className="home-container">
      <div>
        {/* either render value if the orderBy param exist or "name" */}
        <select
          value={match.params.orderBy}
          onChange={(event) => selectedOption(event)}
        >
          <option value="name">Name</option>
          <option value="released">Release Date</option>
          <option value="set">Set/Number</option>
          <option value="rarity">Rarity</option>
        </select>
      </div>
      <div>
        <select
          value={match.params.desc}
          onChange={(event) => selectedSortOrder(event)}
        >
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
      </div>
      <div>
        <select
          value={match.params.pageSize}
          onChange={(event) => selectedPageSize(event)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
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

      <Pagination
        numberOfPages={numberOfPages}
        paginate={paginate}
        pokemonName={match.params.id}
        cardsPerPage={match.params.pageSize}
        orderCardsBy={match.params.orderBy}
        ascOrDesc={match.params.desc}
      />
      <Footer />
    </div>
  );
}