import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className='mt-10 '>
        <div className="footer p-10 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl px-20 ">
  <aside>
    {/* <img className='w-[15%]' src={logo} alt="" /> */}
    <p className='uppercase text-center text-white font-semibold text-xl '>JARIF FASHION HOUSE<br/></p>
    <p></p>
  </aside> 
  
  
  <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3488323853703!2d90.2577379760264!3d23.912698682524933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9edefc0469d%3A0x405b65d31a1f445e!2sSENA%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1703369474778!5m2!1sen!2sbd" width="600" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
 

  
</div>
<div className=" footer-center p-4 bg-base-300 text-base-content container mx-auto rounded-2xl" >
 <aside >
   <p className='flex flex-shrink  justify-center items-center font-bold'>Copyright &copy; 2023 - All right reserved by Jarif Fashion House & Developed By  <span className='ml-3 uppercase'>Munshi Jobaer Siddique</span> </p>
 </aside>
</div>
</footer>
        </div>
    );
};

export default Footer;