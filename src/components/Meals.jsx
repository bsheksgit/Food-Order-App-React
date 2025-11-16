import useHttp from "../hooks/useHttp";
import Error from "./Error";
import FoodCard from "./FoodCard";
import { useContext, useEffect, useMemo } from "react";
import { CartContext } from "../store/CartContext.jsx";
 
export default function Meals(){
    const config = useMemo(() => ({}), []);
    const initialData = useMemo(() => ([]), []);
    const {addItemToCart, cartItems} = useContext(CartContext);

    useEffect(() => {
    console.log(cartItems);
    }, [cartItems]);

    const {data, isLoading, error} = useHttp('http://localhost:3000/meals', config, initialData);

    if (error) {
    return <Error title="Failed to fetch meals." message={error} />;
    }
    
    return(
    <ul id="meals">
        {isLoading?"Fetching meals, please wait...":data.map((foodItem) => <FoodCard 
        key={foodItem.id} 
        foodDetails={foodItem} 
        onClick={() => addItemToCart(foodItem)}/>)}
    </ul>
    );

}