import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Summary from "./components/Summary";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=!name:charizard`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentCards(data.data);
      });
  }, []);

  return (
    <>
      <Route path="/" component={Nav} />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/"
        render={(props) => (
          <Home cardsData={currentCards} match={props.match} />
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
