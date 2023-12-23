import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className='mt-10 '>
        <div className="footer p-10 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl px-20 ">
  <aside>
    {/* <img className='w-[15%]' src={logo} alt="" /> */}
    <p className='uppercase text-center text-white font-semibold text-xl'>JARIF FASHION HOUSE<br/></p>
    <p></p>
  </aside> 
  
  
  <div>
    <h1 className='text-black font-semibold uppercase text-base'>Import Links</h1>
    <div>
      <ul>
        <li><a target='blank' href="https://www.dhakaeducationboard.gov.bd/">Dhaka Education Board</a></li>
        <li><a target='blank' href="https://moedu.gov.bd/">Ministry of Education</a></li>
        <li><a target='blank' href="https://bangladesh.gov.bd/index.php">BD National Portal</a></li>
        <li><a target='blank' href="https://mopme.gov.bd/">Primary & Mass Education</a></li>
      </ul>
    </div>
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