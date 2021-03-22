import {Link} from 'react-router-dom';
import '../styling/nav.css';

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <Link to='/'>
          <h1>Home</h1>
        </Link>

        <Link to='/about'>
          <h1>About</h1>
        </Link>
      </nav>
    </>
  )
}