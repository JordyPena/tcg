import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
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

      <Route
        exact
        path="/"
        render={(props) => <Home cardsData={currentCards} />}
      />
      <Route exact path="/about" component={About} />
    </>
  );
}

export default App;
