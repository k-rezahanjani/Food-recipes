import "./Navbar.css"
import Searchbar from "./Searchbar";
import {Link} from "react-router-dom"
import { useTheme } from "./hooks/useTheme";

const Navbar = () => {

    const {color} = useTheme();
    
    return ( 
        <div className="navbar" style={{background: color}}>
            <nav>
                <Link to="/" className="brand"><h1>Food Recipe</h1></Link>
                <Searchbar />
                <Link to="/create" ><h1>Create Recipe</h1></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;