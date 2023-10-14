import "./Recipe.css"
import { useParams } from "react-router-dom";
import { useTheme } from "../../components/hooks/useTheme";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Recipe = () => {
    const {id} = useParams();
    const { mode } = useTheme()

    const [recipe, setRecipe] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const ref = doc(db, 'recipes', id);
        getDoc(ref)
            .then(doc => {
                if(!doc.exists()) {
                    setError('No data exisited...')
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    setRecipe(doc.data())
                }
            })
    }, [id])

    return ( 
        <div className={`recipe ${mode}`}>
            {error && <p className="error">Error: {error}</p>}
            {isLoading && <p className="loading">Loading...</p>}
            {recipe && (
                <div key={recipe.id}>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook</p>
                    <ul>
                        {recipe.ingredients.map((ing) => <li>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </div>
            )}
        </div>
     );
}
 
export default Recipe;