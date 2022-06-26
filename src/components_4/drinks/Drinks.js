import {useEffect, useState} from "react";

import "./drinks.css";
import {Drink} from "../drink/Drink";
import {ChosenDrinksDetails} from "../chosenDrinksDetails/ChosenDrinksDetails";

function Drinks(){

    const [drinks, setDrinks] = useState([]);
    const [drink, setDrink] = useState(null);

    useEffect(() =>{
        const arrayDrinks = [];
        for (let i = 0; i < 12; i++) {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
                .then(response => response.json())
                .then(value => {
                    if (arrayDrinks.find(item => item.idDrink === value.drinks[0])){
                        i--;
                    }else {
                        arrayDrinks.push(value.drinks[0]);
                    }
                    if(i === 11) setDrinks(arrayDrinks);
                })
        }
    }, []);

    const moreInfo = (value) =>{
        setDrink(value);
    }

    return (
        <div className="mainDrinksDiv">
            <h1>Random Drinks</h1>
            <div className="drinksBlock">
                {drinks.map((drink, index) => <Drink
                key={index}
                drink={drink}
                moreInfo={moreInfo}
            />)}</div>
            <div>{drink && <ChosenDrinksDetails drink={drink}/>}</div>
            <button className="anotherButton" onClick={() => document.location.reload()}>Another Drinks</button>
        </div>
    );
}

export {Drinks}