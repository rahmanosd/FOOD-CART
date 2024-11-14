import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
const Foods = ({handleAddToFoodmark}) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('banner.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl"></h1>
            {
            foods.map(food => 
            <Food key={food.celories} 
            handleAddToFoodmark={handleAddToFoodmark}
            food={food}></Food>)
            }
        </div>
    );
};

export default Foods;