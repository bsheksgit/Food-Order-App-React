import {currencyFormatter} from "../utils/formatting.js";

export default function FoodCard({foodDetails}){
    return(
        <>
        <li className='meal-item'>
        <article>
        <img src={`http://localhost:3000/${foodDetails.image}`} alt={foodDetails.name} />
        <div>
            <h3>{foodDetails.name}</h3>
            <p className="meal-item-price">
                {currencyFormatter.format(foodDetails.price)}
            </p>
            <p className="meal-item-description">
                {foodDetails.description}
            </p>
        </div>
        <p className="meal-item-actions">
            <button className="button">Add to Cart</button>
        </p>        
        </article>
        </li>
        </>
    );
}