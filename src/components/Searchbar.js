import "./Searchbar.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const [term, setTerm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${term}`)
        setTerm("")
    }
    return ( 
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                    <input 
                        id="searc"
                        input="text"
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                        required
                    />
            </form>
        </div>
     );
}
 
export default Searchbar;