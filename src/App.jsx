import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CardsComponent from './CardsComponent';
import Footer from './Footer';
import Info from './Info';
import City from './City';
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