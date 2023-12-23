import React from 'react';
import img from "../../image/5155720_2672335.jpg"
const AboutUs = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-20 p-20'>
                <div>
                <img className='lg:w-[60%] rounded-3xl shadow-2xl animate-pulse' src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-center text-blue-500 font-semibold text-xl lg:text-4xl animate-pulse my-8'>About Us</h1>
                    <p className='text-justify font-semibold'>Welcome to <span className='uppercase'>jarif fashion House</span> – Where Service Meets Style!

Discover a shopping experience like no other at [Your Shop Name]. We go beyond providing just products; we offer a service-oriented approach that caters to your every need. <br/>
<span >
Why choose us?

Expert Guidance: Our knowledgeable team is here to assist you in finding the perfect products tailored to your preferences and requirements. From fashion to tech, we're your personal shopping advisors.

Fast and Reliable Shipping: Enjoy the convenience of prompt and secure deliveries. We prioritize getting your purchases to you swiftly, ensuring a seamless shopping experience.

Hassle-Free Returns: Not satisfied with your purchase? No worries. Our hassle-free return policy ensures that you can shop with confidence, knowing that your satisfaction is our priority.

Personalized Recommendations: Benefit from our personalized recommendation system that suggests products based on your preferences, ensuring you always stay on trend.
</span>


</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;