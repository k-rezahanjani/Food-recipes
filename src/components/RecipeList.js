import { Link } from "react-router-dom";
import { useTheme } from '../components/hooks/useTheme';
import removeIcon  from "../assets/remove.svg"; 
import "./RecipeList.css"
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const RecipeList = ({ recipes }) => {
    const { mode } = useTheme()

    const handleClick = async (id) => {
        try {
            const ref = doc(db, 'recipes', id)
            await deleteDoc(ref)
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <img className="delete" onClick={() => handleClick(recipe.id)} src={removeIcon} alt="remove" />
                </div>
            ))}
        </div>
     );
}
 
export default RecipeList;