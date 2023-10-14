import RecipeList from "../../components/RecipeList";
import "./Home.css"
import { useCollection } from "../../components/hooks/useCollection";

const Home = () => {

    const {collectionData : data, isLoading, error} = useCollection('recipes')

    return ( 
        <div className="home">
            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="error">Error: {error}</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
     );
}
 
export default Home;