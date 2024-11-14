import Foodmark from "../Foodmark/Foodmark";
import '../Foodmarks/Foodmarks.css'
const Foodmarks = ({foodmarks}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-xl text-center mt-16">
            <h1 className="text-3xl font-bold mt-7">Want to Cook:{foodmarks.length}</h1>
            <div>
                <ul className="mt-4">
                    <li>Name</li>
                    <li>Time</li>
                    <li>Calories</li>
                </ul>
            </div>
            {
                foodmarks.map(foodmark => <Foodmark key={foodmark.calories} foodmark={foodmark}></Foodmark>)
            }
        </div>
    );
};

export default Foodmarks;