import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Results from "./components/results";
import Summary from "./components/Summary";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Sets from "./components/Sets";

function App() {
  
  const [userInput, setUserInput] = useState("");
  
  console.log("userInput", userInput)

  const history = useHistory();

  const formSubmit = (event) => {
    event.preventDefault();
      history.push(`/cards/${"name:" + userInput}/1/25/rarity/Asc`)
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
        path="/cards/:query/:page/:pageSize/:orderBy/:desc"
        render={(props) => (
          <Results
            match={props.match}
          />
        )}
      />

       {/* dynamic path names are designated with :  */}
       <Route
        path="/card/:name/:id"
        component={Summary}
      />

      <Route
        exact
        path="/sets"
        render={(props) => (
          <Sets match={props.match}/>
        )}
      />

    </>
  );
}

export default App;
