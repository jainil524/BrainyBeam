import React, { useEffect, useRef } from 'react';
import "/public/css/urban.css";
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
    const animationSearchRef = useRef(null);
    const inputRef = useRef(null);
    const dynamicTextsRef = useRef([]);

    useEffect(() => {
        const animationSearch = animationSearchRef.current;
        const input = inputRef.current;
        const dynamicTexts = dynamicTextsRef.current;

        // Click event to hide animation text and focus on input
        const handleAnimationClick = () => {
            animationSearch.style.display = "none";
            input.focus();
        };

        // Blur event to show animation text again
        const handleInputBlur = () => {
            animationSearch.style.display = "";
        };

        animationSearch.addEventListener("click", handleAnimationClick);
        input.addEventListener("blur", handleInputBlur);

        // Dynamic text rotation
        let index = 0;
        dynamicTexts[0].classList.add("active");

        const intervalId = setInterval(() => {
            dynamicTexts[index].classList.remove("active");
            index = (index + 1) % dynamicTexts.length; // Loop through dynamic texts
            dynamicTexts[index].classList.add("active");
        }, 2000);

        // Cleanup function to remove event listeners and interval
        return () => {
            animationSearch.removeEventListener("click", handleAnimationClick);
            input.removeEventListener("blur", handleInputBlur);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <header>
            <nav>
                <ul className="flex">
                    <li className="logo">
                        <img
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg"
                            alt="UrbanClap Logo"
                        />
                    </li>
                    <li>Beauty</li>
                    <li>Home</li>
                    <li>Native</li>
                </ul>
            </nav>
            <div className="location-section">
                <div className="input-wrapper">
                    <img src="/public/img/loc.png" alt="Location" />
                    <select>
                        <optgroup label="India">
                            <option value="">Gujarat</option>
                            <option value="">Maharastra</option>
                            <option value="">Rajasthan</option>
                            <option value="">Madhya-Pradesh</option>
                        </optgroup>
                    </select>
                </div>
                <div className="input-wrapper search-con">
                    <img src="/public/img/Search.svg" alt="Search" />
                    <input ref={inputRef} type="text" placeholder="Search for Services" />
                    <div className="animation-serach" ref={animationSearchRef}>
                        <div className="static-text">Search For</div>
                        <div className="dynamic-text" ref={el => dynamicTextsRef.current[0] = el}>'Facial'</div>
                        <div className="dynamic-text" ref={el => dynamicTextsRef.current[1] = el}>'Kitchen Cleaning'</div>
                        <div className="dynamic-text" ref={el => dynamicTextsRef.current[2] = el}>'AC Service'</div>
                    </div>
                </div>
            </div>
            <div className="option-section">
                <ul className="flex">
                    <li><img src="/public/img/Cart.png" alt="Cart" /></li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#0F0F0F" viewBox="0 0 24 24">
                            <path
                                fill="#0F0F0F"
                                fillRule="evenodd"
                                d="M8.25 1.5a.75.75 0 00-.75.75V3H5.25a1.5 1.5 0 00-1.5 1.5v15.75a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H16.5v-.75a.75.75 0 00-.75-.75h-7.5zM16.5 6a.75.75 0 01-.75.75h-7.5A.75.75 0 017.5 6V4.5H5.25v15.75h13.5V4.5H16.5V6zM9 5.25V3h6v2.25H9zm6 10.5H9v-1.5h6v1.5zm-6-4.5h6v-1.5H9v1.5z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </li>
                    <li>
                        <ThemeToggleButton />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
