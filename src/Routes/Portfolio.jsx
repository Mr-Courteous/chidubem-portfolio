import React from "react";
import Header from "../components/header";
import ImageCard from "../components/rendered";
import Footer from "../components/footer";


function Portfolio() {
    return (
        <div>

            <Header />

            <div className="image-cards">
                <ImageCard
                    image="/Images/main-images/FREE DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN AFIKPO DIOCESE FOR ALL CLERGY AND DIOCESE STAFF.jpeg"
                    title="FREE DIGITAL SKILLS TRAINING "
                    description="FREE DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN AFIKPO DIOCESE FOR ALL CLERGY AND DIOCESE STAFF."
                />
                <ImageCard
                    image="/Images/main-images/FREE DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN ATTRIBUTE ARCHBISHOP VINNING THEOLOGICAL COLLEGE AKURE OYO STATE FOR ALL POSTULATE AND SCHOOL MANAGEMENT 👆.jpeg"
                    title="FREE DIGITAL SKILLS TRAINING "
                    description="FREE DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN ATTRIBUTE ARCHBISHOP VINNING THEOLOGICAL COLLEGE AKURE OYO STATE FOR ALL POSTULATE AND SCHOOL MANAGEMENT."
                />
                <ImageCard
                    image="/Images/main-images/FREE DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN EKITI-OKE DIOCESE FOR ALL CLERGY AND DIOCESE STAFF.jpeg"
                    title="FREE DIGITAL SKILLS TRAINING "
                    description="FREE DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN EKITI-OKE DIOCESE FOR ALL CLERGY AND DIOCESE STAFF."
                />
                <ImageCard
                    image="/Images/main-images/FREE DIGITAL SKILLS TRAINING FOR BUSINESS GROWTH IN AFIKPO DIOCESE FOR ALL YOUTH.jpeg"
                    title="FREE DIGITAL SKILLS TRAINING "
                    description="FREE DIGITAL SKILLS TRAINING FOR BUSINESS GROWTH IN AFIKPO DIOCESE FOR ALL YOUTH."
                />
                <ImageCard
                    image="/Images/main-images/Digital skills training for church growth in the Anglican Diocese of Aba Ngwa North.jpeg"
                    title="FREE DIGITAL SKILLS TRAINING "
                    description="DIGITAL SKILLS TRAINING FOR CHURCH GROWTH IN THE ANGLICAN DIOCESE OF ABA NGWA NORTH."
                />
                <ImageCard
                    image="/Images/main-images/WhatsApp Image 2024-12-27 at 12.28.06 PM.jpeg"
                // title="Free Medical Care for the Poor"
                // description="We have provided free medical care to over 2000 poor patients."
                />

                <ImageCard
                    image="/Images/main-images/WhatsApp Image 2024-12-27 at 12.28.13 PM.jpeg"
                // title="Free Medical Care for the Poor"
                // description="We have provided free medical care to over 2000 poor patients."
                />     <ImageCard
                    image="/Images/main-images/WhatsApp Image 2024-12-27 at 12.28.12 PM (2).jpeg"
                // title="Free Medical Care for the Poor"
                // description="We have provided free medical care to over 2000 poor patients."
                />     <ImageCard
                    image="/Images/main-images/WhatsApp Image 2024-12-27 at 12.28.12 PM (1).jpeg"
                // title="Free Medical Care for the Poor"
                // description="We have provided free medical care to over 2000 poor patients."
                />     <ImageCard
                    image="/Images/main-images/WhatsApp Image 2024-12-27 at 12.28.12 PM.jpeg"
                // title="Free Medical Care for the Poor"
                // description="We have provided free medical care to over 2000 poor patients."
                />     <ImageCard
                    image="/Images/main-images/WhatsApp Image 2024-12-27 at 12.28.13 PM (1).jpeg"
                // title="Free Medical Care for the Poor"
                // description="We have provided free medical care to over 2000 poor patients."
                />


            </div>


            <Footer />

        </div>
    )
}


export default Portfolio