import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <nav className="container">
        <ul className="navbar" role="list">
          <li className="nav-item"><NavLink to="/"><img src="/assets/shared/logo.svg" alt="" /></NavLink></li>
          <li className="nav-item"><NavLink to="/detail/1" className="text-preset-6">START SLIDESHOW</NavLink></li>
        </ul>
      </nav>  
    </header>
  )
}
