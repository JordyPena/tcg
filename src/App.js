import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Summary from "./components/Summary";
import Results from "./components/results";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function App() {
  const [currentCards, setCurrentCards] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [invalidSearch, setInvalidSearch] = useState(false);
  
  const history = useHistory();

  const formSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${userInput}&pageSize=10`)
      .then((response) => {
        console.log(response.status);
        if (response.status === 400) {
          setInvalidSearch(true);
          throw new Error("Type a valid pokemon name in field");
        }
        return response.json();
      })
      .then((data) => {
        setInvalidSearch(false);
        setCurrentCards(data.data);
      })
      .catch((error) => {
        console.error({ error });
      });
      history.push("/card")
  };

  const inputChange = (event) => {
    setUserInput(event.target.value);
  };

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
          cardsData={currentCards}
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
          />
        )}
      />

      {/* dynamic path names are designated with :  */}
      <Route
        path="/card-summary/:id"
        render={({ match }) => {
          const item = currentCards.find((card) => {
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
