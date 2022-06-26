import "./compositionDrink.css";

function CompositionDrink({drink}){
    const compositionArray = [];

    for (let i = 1; i < 16; i++) {
        const component = "strIngredient" + i
        if (drink[component]) compositionArray.push(drink[component]);
    }

    return (
        <span>
            {compositionArray.map(value => <span className="oneComposition">{value}</span>)}
        </span>
    );
}

export {CompositionDrink}