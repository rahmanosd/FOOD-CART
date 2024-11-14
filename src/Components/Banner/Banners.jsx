import './Banners.css'
import background from '../../assets/background.png'
const Banner = () => {
    // const [banners, setBanners] = useState([])
    // useEffect(() => {
    //     fetch('banner.json')
    //     .then(res => res.json())
    //     .then(data => setBanners(data))
    // },[])
    return (
        <div className='banner'>
        <img src={background} alt="" />
        <div className="content">
        <h1 className='font-bold text-4xl text-center pt-5'>
        Discover an exceptional cooking <br/> 
        class tailored for you!</h1>
        <p className='text-center pt-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding<br/> 
        problems to become an exceptionally well world-class Programmer</p>
        <div className='pt-5 space-x-5'>
        <button className='text-xl bg-green-500 text-black'>Explore Now</button>
        <button>Our Feedback</button>
        </div>
        </div>
        <div>
            <h1 className='text-4xl font-extrabold text-black text-center pt-10'>
            Our Recipes</h1>
            <p className='text-center pt-5'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget<br/> 
            urna volutpat curabitur elementum mauris aenean neque.</p>
        </div>
        {/* <div className='md:w-2/3'>
        <h1 className="text-4xl">blogs: {banners.length}</h1>
        </div>
        {
         banners.map(foodtimes => <Foodtimes key={foodtimes.calories} foodtimes={foodtimes}></Foodtimes>)
        } */}
        </div>
        
    );
};

export default Banner;