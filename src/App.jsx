import React from 'react';
import Base from './Components/Base';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App(){
    
    return(
        <>
            <section>
                <Navbar/>
                <Base />
            </section>
            <Footer/>
        </>
    )
}

export default App