import { NavLink } from 'react-router-dom';
import '../App.css';


export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <br/>
      <NavLink style={{textDecoration: 'none'}} exact to='/'>View all Posts</NavLink>
      &nbsp; | &nbsp;
      <NavLink style={{textDecoration: 'none'}} exact to='/new'>Create a New Post</NavLink>
    </nav>
  );
}