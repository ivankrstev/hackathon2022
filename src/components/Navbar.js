import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/gym'>
            Gym
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/threadmill'>
            ThreadMill
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
