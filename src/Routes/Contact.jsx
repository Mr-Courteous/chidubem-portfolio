import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";


function Contact() {
    return (
        <div>
            <Header />


            <div class="container">
                <div class="contact-info">
                    <p>You can reach me through the following channels:</p>
                    <ul>

                        <li> <a href="nwekedubemph@gmail.com" target="_blank">nwekedubemph@gmail.com </a></li>
                        <li> <a href="chidubemnwachinemere@gmail.com" target="_blank">chidubemnwachinemere@gmail.com </a></li>                        <li> <a href="tel:+2348160218792" target="_blank">+234 816 021 8792</a></li>
                        <li> <a href="https://www.facebook.com/your_facebook_profile" target="_blank"> Facebook </a></li>
                        <li> <a href="https://x.com/GodfreyChi68415" target="_blank"> Twitter </a></li>
                        <li> <a href="https://www.instagram.com/chidubemnwachinemere1" target="_blank"> Instagram </a></li>
                        <li> <a href="https://www.linkedin.com/in/chidubem-nwachinemere" target="_blank"> LinkedIn </a></li>
                    </ul>
                </div>



            </div>

            <Footer />

        </div>
    )
}


export default Contact