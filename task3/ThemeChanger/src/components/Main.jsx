import React from 'react';
import Services from './Service';

const Main = () => {
    return (
        <main>
            <Services />
            <div className="section-images">
                <div className="service-img">
                    <img
                        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
                        alt="Home Services"
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;
