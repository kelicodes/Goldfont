import Banner from "../../Components/Banner/Banner.jsx"
import Collection from "../../Components/Collection/Collection.jsx"
import Categories from "../../Components/Categories/Categories.jsx"


const Home=()=>{
    return (<div className="home">
        <Banner/>
        <Collection/>
        <Categories/>
    </div>)
}


export default Home