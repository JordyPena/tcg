import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Results from "./components/results";
import Summary from "./components/Summary";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Sets from "./components/Sets";

function App() {
  const [userInput, setUserInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();
  const regexNumbers = /^([^0-9]*)$/;
  const regexSpecial = /^[^*|":<>[\]{}`\\()';@&$]+$/;

 
  const formSubmit = (event) => {
    event.preventDefault();
    const encodeInput = encodeURIComponent(userInput)
    const query = `name:"${encodeInput}*"`
    let url = `/cards/${query}/1/25/rarity/Asc`
    history.push(url);
  };

  const inputChange = (event) => {
    setUserInput(event.target.value);
    if (event.target.value === "")
    setErrorMessage(false)
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

  return (
    <>
      <Route
        path="/"
        render={(props) => <Nav renderProps={props} searchBar={searchBar} errorMessage={errorMessage}/>}
      />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/"
        render={(props) => <Home match={props.match} searchBar={searchBar} errorMessage={errorMessage}/>}
      />

      <Route
        exact
        path="/cards/:query/:page/:pageSize/:orderBy/:desc"
        render={(props) => <Results match={props.match}/>}
      />

      {/* dynamic path names are designated with :  */}
      <Route path="/card/:name/:id" component={Summary} />

      <Route
        exact
        path="/sets"
        render={(props) => <Sets match={props.match} />}
      />
    </>
  );
}

export default App;
