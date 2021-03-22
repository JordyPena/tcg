import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path='/' component={Nav}/>

      <Route exact path='/' component={Home}/>

      <Route exact path='/about' component={About}/>
    </>
  );
}

export default App;
