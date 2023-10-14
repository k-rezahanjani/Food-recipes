import { useState } from "react";
import "../create/Create.css"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [newingredient, setNewIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const doc = ({title, ingredients, method, cookingTime: cookingTime + ' minutes'})

        try {
            const ref = collection(db, 'recipes')
            await addDoc(ref, doc)
            alert("You're recipe has been added successfully!")

            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch(err) {
            console.log(err);
        }

    }
    const handleAdd = (e) => {
        e.preventDefault()
        if(newingredient && !ingredients.includes(newingredient)) {
            setIngredients((prevIng) => [...prevIng, newingredient])
        }
        setNewIngredient("")
    }
    return ( 
        <div className="create">
            <h2 className="page-title">Add a new Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Recipe Ingredient:</span>
                    <div className="ingredient">
                        <input 
                            type="text" 
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newingredient}
                        />
                        <button onClick={handleAdd} className="btn">Add</button>
                    </div>
                </label>
                <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Recipe method:</span>
                    <textarea 
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Recipe cooking time:</span>
                    <input 
                        type="number" 
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}
 
export default Create;