import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact';
import Portfolio from './Routes/Portfolio';
import Services from './Routes/Services';



function App() {

    return (

        <>


            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>


        </>
    )
}

export default App

