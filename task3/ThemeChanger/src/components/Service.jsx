import React from 'react';

const servicesData = [
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg',
        label: 'Woman Salon & Spa',
    },
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg',
        label: 'Man Salon & Massage',
    },
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg',
        label: 'AC & Appliance Repair',
    },
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg',
        label: 'Cleaning',
    },
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png',
        label: 'Electrician, Plumber & Carpenter',
    },
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg',
        label: 'Native Water Purifier',
    },
    {
        imgSrc: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg',
        label: 'Painting & Waterproofing',
    },
];

const Services = () => {
    return (
        <div className="section-services">
            <div className="title">Home Services at your doorstep</div>
            <div className="services">
                <div className="subtitle">What are you looking for?</div>
                <ul className="flex">
                    {servicesData.map((service, index) => (
                        <li key={index}>
                            <div>
                                <img src={service.imgSrc} alt={service.label} />
                            </div>
                            <span>{service.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Services;
