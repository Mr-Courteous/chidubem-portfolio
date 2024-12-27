import React from "react";
import { useState, useEffect } from 'react';



function CTA() {

    const [paragraphText, setParagraphText] = useState('');
    const [headingText, setHeadingText] = useState('');
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 500); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isAnimated) {
            const paragraphArray = "Looking for a skilled professional with expertise in Event Management, Digital Marketing, and Human Resources? Let's connect. ".split('');
            const headingArray = "Connect Everything, Achieve anything. ".split('');

            let paragraphIndex = 0;
            const paragraphIntervalId = setInterval(() => {
                setParagraphText(paragraphArray.slice(0, ++paragraphIndex).join(''));
                if (paragraphIndex === paragraphArray.length - 1) {
                    clearInterval(paragraphIntervalId);
                }
            }, 50); // Adjust the typing speed

            let headingIndex = 0;
            const headingIntervalId = setInterval(() => {
                setHeadingText(headingArray.slice(0, ++headingIndex).join(''));
                if (headingIndex === headingArray.length - 1) {
                    clearInterval(headingIntervalId);
                }
            }, 100); // Adjust the typing speed

            return () => {
                clearInterval(paragraphIntervalId);
                clearInterval(headingIntervalId);
            };
        }
    }, [isAnimated]);


    return (
        <>

            <div className="CTA-section">



                <div>

                    <h2 className="cta-big-text">
                        {headingText}

                    </h2>

                    <p className="cta-small-text">
                        {paragraphText}
                    </p>




                </div>



                <div>

                </div>

                <button className="cta-button">
                    <a href="https://wa.link/yk7ncg" target="_blank">Contact Me Now</a>
                </button>

            </div>
        </>
    )
}

export default CTA;