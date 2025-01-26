import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CardsComponent from './CardsComponent';
import Footer from './Footer';
import Info from './info';
import City from './city';
import MyTable from './MyTable';
function App (){
    return(
        <>
            
            <Navbar />
            <CardsComponent/>
            <Info />
            <City />
            <MyTable />
            <Footer />
        </>
    )
}
export default App;