import {CompositionDrink} from "../compositionDrinks/CompositionDrink";
import "./chosenDrinksDetails.css"

function ChosenDrinksDetails({drink}){
    return (
        <div id="drinkDetailsBlock" className="drinkDetails">
            <h2>{drink.strDrink}</h2>
            <p><span><b>Category:</b> {drink.strCategory}</span>
                <span><b>Alcohol:</b> {drink.strAlcoholic}</span>
                <span><b>Glass:</b> {drink.strGlass}</span>
                <span><b>Instructions:</b> <br/> {drink.strInstructions}</span></p>
            <h3>Composition:</h3>
            <p><CompositionDrink key={drink.idDrink} drink={drink}/></p>
        </div>
    );
}

export {ChosenDrinksDetails};