import Home from './Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route exact path='/' component={Home}/>
  );
}

export default App;
