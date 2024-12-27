import React from "react";
import Header from "../components/header";
import CTA from "../components/cta"
import About from "../components/section-three";
import Services from "../components/section-four";
import Footer from "../components/footer";
import Partners from "../components/partners";

function Home() {
  return (
    <>

      <div className="body">

        <Header />
        <CTA />



        <div className="section-three">          <About />

          <Services />


        </div>
        <Partners />


        <Footer />



      </div>






    </>
  )
}


export default Home