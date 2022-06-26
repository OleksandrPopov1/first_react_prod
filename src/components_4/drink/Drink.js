import "./drink.css";

function Drink({drink, moreInfo}){

    return (
        <div className="drinkBlock">
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
            <button className="drinkBlockButton" onClick={() =>{
                moreInfo(drink);
                document.location.href='#drinkDetailsBlock';
            }}>More info</button>
        </div>
    );
}

export {Drink}