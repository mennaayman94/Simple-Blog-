import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
//we can put dynamic styles
// // style={{ 
//     color: 'white', 
//     backgroundColor: '#f1356d',
//     borderRadius: '8px' 
//   }}