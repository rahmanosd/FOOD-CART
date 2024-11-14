import './Navbar.css'
import search from '../../assets/search.png'
import people from '../../assets/people.png'
const Navbar = () => {
    return (
        <div className="navbar">
        {/* navbar section */}
        <h3 className="font-bold text-4xl">Recipe calorios</h3>
        <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Products</li>
            <li>About</li>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder=" Search"/>
        <img src={search} alt="" />
        </div>
        <img src={people} alt="" className='toggle-icon'/>
        </div> 
          
    );
};

export default Navbar;