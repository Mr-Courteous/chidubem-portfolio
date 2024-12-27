import React from "react";
import ServiceCard from "./services";
import ImageCard from "./rendered";


function Services() {
    return (
        <>



            {/* <div className="section-four"> */}



            <div>
                <h2 style={{
                    textAlign: "center",
                    fontFamily: 'Montserrat, sans-serif'

                }}>
                    SERVICES
                </h2>




                <div className="services-section">
                    <div className="service-cards">
                        <ServiceCard
                            title="Event Management Facilitator/Trainer"
                            description="Expert facilitation and training for events, conferences, and workshops to ensure successful and engaging experiences."
                            icon={<i className="fas fa-calendar"></i>}
                        />
                        <ServiceCard
                            title="Product Management"
                            description="Strategic product management to drive business growth and innovation, from product development to launch and beyond."
                            icon={<i className="fas fa-box"></i>}
                        />
                        <ServiceCard
                            title="Business Development Executive"
                            description="Results-driven business development to drive revenue growth and expansion, through strategic partnerships and sales strategies."
                            icon={<i className="fas fa-chart-line"></i>}
                        />
                        <ServiceCard
                            title="Virtual Assistant"
                            description="Expert virtual assistance for businesses, entrepreneurs, and professionals, providing administrative support and task management."
                            icon={<i className="fas fa-headset"></i>}
                        />
                        <ServiceCard
                            title="Digital Marketing"
                            description="Strategic digital marketing to drive brand awareness, engagement, and conversion, through social media, content marketing, and SEO."
                            icon={<i className="fas fa-laptop-code"></i>}
                        />
                        <ServiceCard
                            title="Project Management"
                            description="Expert project management to drive results, efficiency, and success, through agile methodologies and project planning."
                            icon={<i className="fas fa-project-diagram"></i>}
                        />
                        <ServiceCard
                            title="Digital Career Navigator"
                            description="Expert guidance and support for navigating digital careers and industries, through coaching, mentoring, and training."
                            icon={<i className="fas fa-compass"></i>}
                        />
                        <ServiceCard
                            title="Human Resources Manager"
                            description="Strategic HR management to drive talent acquisition, development, and retention, through recruitment, training, and benefits administration."
                            icon={<i className="fas fa-users"></i>}
                        />
                    </div>
                </div>

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
                    {/* <ImageCard
                        image="/Images/main-images/IMG_20191109_125225_5.jpg"
                        title="Free Medical Care for the Poor"
                        description="We have provided free medical care to over 2000 poor patients."
                    /> */}


                </div>



            </div>
        </>
    )
}


export default Services;