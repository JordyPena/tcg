import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Results from "./components/results";
import Summary from "./components/Summary";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function App() {
  
  const [userInput, setUserInput] = useState("");
  const [cardsData, setCardsData] = useState([]);
  

  const history = useHistory();

  const formSubmit = (event) => {
    event.preventDefault();
      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${userInput}`)
      .then((response) => {
        if (response.status === 400) {
          
          throw new Error("Type a valid pokemon name in field");
        }
        return response.json();
      })
      .then((data) => {
        setCardsData(data.data);
        
      })
      .catch((error) => {
        console.error({ error });
      });
      history.push(`/card/${userInput}`)
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
         
          match={props.match}
          searchBar={searchBar}
          />
        )}
      />

      <Route
        exact
        path="/card/:name"
        render={(props) => (
          <Results
            match={props.match}
          />
        )}
      />

       {/* dynamic path names are designated with :  */}
       <Route
        path="/card/:name/:id"
        render={({ match }) => {
          const item = cardsData.find((card) => {
            return card.id === match.params.id;
          });
          console.log("item found", item);
          return <Summary card={item} />;
        }}
      /> 

    </>
  );
}

export default App;
