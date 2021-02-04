import { NavLink } from 'react-router-dom';


export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <strong>Welcome!</strong>
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink style={{textDecoration: 'none', color: 'black'}} exact to='/'>View all Posts</NavLink>
      &nbsp; | &nbsp;
      <NavLink style={{textDecoration: 'none', color: 'black'}} exact to='/new'>Create a New Post</NavLink>
    </nav>
  );
}