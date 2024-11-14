const Food = ({food, handleAddToFoodmark}) => {
    const {calories, recipe_id, recipe_name, short_description,
    ingredients, image, preparing_time} = food
    return (
        <div className="border-2 rounded-xl p-6 m-14">
           <img className='mb-3 rounded-xl' src={image} alt="added by the picture" />
           <h1 className="text-xl font-bold mb-3">{recipe_name}</h1>
           <p className="mb-3">{short_description}</p>
           <div className="bg-slate-200 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Ingredients : {recipe_id}</h3>
            <p className="grid ml-8">
                {
                ingredients.map((hash, idx) => 
                <span key={idx}><a href="">{hash}</a>
                </span>)
                }
            </p>
            <div className="flex gap-6  m-5">
            <p>{preparing_time}</p>
            <p>{calories}</p>
            </div>
           </div>
           <button onClick={() => handleAddToFoodmark(food)} className="text-black font-medium bg-green-500 rounded-3xl p-2">
           Want to Cook</button>
        </div>
    );
};

export default Food;