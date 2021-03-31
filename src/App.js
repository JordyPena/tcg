import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Summary from "./components/Summary";
import Results from "./components/results";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  const history = useHistory();

  const formSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${userInput}`)
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
        setCardsData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error({ error });
      });
      history.push("/card")
  };

  const inputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber)
  }

  const searchBar = (
    <form onSubmit={(event) => formSubmit(event)}>
      <input
        type="text"
        name="searchBar"
        value={userInput}
        onChange={(event) => inputChange(event)}
        placeholder="Search for a card"
      />
    </form>
  );

  const invalidEntry = (
    <h5 className="nav-text-red">Type a valid pokemon name in field</h5>
  );

  return (
    <>
      <Route
        path="/"
        render={(props) => (
          <Nav
            renderProps={props}
            searchBar={searchBar}
            invalidSearch={invalidSearch}
            invalidEntry={invalidEntry}
          />
        )}
      />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/"
        render={(props) => (
          <Home
          cardsData={cardsData}
          match={props.match}
          searchBar={searchBar}
          />
        )}
      />

      <Route
        exact
        path="/card"
        render={(props) => (
          <Results
            cardsData={currentCards} 
            match={props.match}
            loading={loading}
            cardsPerPage={cardsPerPage}
            totalPosts={cardsData.length}
            paginate={paginate}
          />
        )}
      />

      {/* dynamic path names are designated with :  */}
      <Route
        path="/card-summary/:id"
        render={({ match }) => {
          const item = cardsData.find((card) => {
            return card.id === match.params.id;
          });
          console.log("app.js", item);
          return <Summary card={item} />;
        }}
      />
    </>
  );
}

export default App;
