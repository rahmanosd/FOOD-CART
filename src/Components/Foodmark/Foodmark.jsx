const Foodmark = ({foodmark}) => {
    const {recipe_name,preparing_time,calories} = foodmark
    return (
        <div  className="flex p-3 bg-gray-200 mt-4 rounded-xl">
            <h1 className="font-semibold ml-3">{recipe_name}</h1>
            <p className="ml-3">{preparing_time}</p>
            <span className="ml-5 p-2">{calories}</span>
            <button className="font-semibold bg-green-500 rounded-2xl p-3 ml-2">Preparing</button>
        </div>
    );
};

export default Foodmark;