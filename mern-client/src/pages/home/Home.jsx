import React from 'react' 
import Banner from '../../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import OtherBooks from './OtherBooks'


const Home = () =>{
    return(
        <div>
            <Banner/>
            <BestSellerBooks/>
            <FavBook/>
            <OtherBooks/>
        </div>
    )
}

export default Home