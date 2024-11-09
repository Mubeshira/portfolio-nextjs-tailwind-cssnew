// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { TypeAnimation } from 'react-type-animation';

  


// function Hero() {
//   return (
//     <section className='display flex '>
//       <div className='text-5xl mt-32 ml-40 text-blue-700	' > 
//        {/* <h1>
//         <span className='text-transparent bg bg-clip-text text-emerald-700'>Hello I'm</span>
//        <span className='text-transparent bg bg-clip-text text-emerald-700'>Mubeshira</span> 
//        </h1> */}
//        {/* <h1>
//   <span className='text-transparent bg bg-clip-text text-emerald-700'>Hello I'm</span>
//   <span className='text-transparent bg bg-clip-text text-emerald-700'> Mubeshira</span> 
// </h1>

//          */}

// {/* const name = "Mubeshira"; */}
//  <h1 className='text-5xl text-white'>I'm Mubeshira Saad</h1> 

// <h1>
//   <span className='text-transparent bg bg-clip-text text-emerald-700'>Hello I'm</span>
//   {/* <span className='text-transparent bg bg-clip-text text-emerald-700'> {Mubeshira}</span>  */}
// </h1>

     
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'I am a Frontend Developer',
//         1000,
//         'WEB DEVELOPER',
//         1000,
//         'UI/UX Designer',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '0.75em', display: 'inline-block'  }}
//       repeat={Infinity}
//     />
//         <p className='text-xl mt-6 text-md text-emerald-500'> I'm a frontend developer on a journey to master the art of creating user-friendly and visually engaging

//            websites and web applications.</p>
//         <a href="/projects"><button className='transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... px-4 py-  rounded-full text-xl	 mt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>Projects</button></a>
//       </div>

//       <div className='transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-full mt-32 ml-12 mr-24   border-8 border-pink-400 shadow-yellow-900'>
//         <Image
//           src='/newavatar-removebg-preview.png'
//           alt='hero'
//           width={440}
//           height={440}
//         />
//       </div>
   
//     </section>
//   )
// }

// export default Hero









"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-10 md:p-20 bg-black text-white">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2" data-aos="fade-right">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Hello, I'm <span className="text-emerald-500">Mubeshira Saad</span>
        </h1>
        
        <TypeAnimation
          sequence={[
            'I am a Frontend Developer',
            1000,
            'WEB DEVELOPER',
            1000,
            'UI/UX Designer',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.25em', display: 'inline-block' }}
          repeat={Infinity}
        />
        
        <p className="text-lg mt-6 text-emerald-300">
          I'm a frontend developer on a journey to master the art of creating user-friendly and visually engaging websites and web applications.
        </p>

        <a href="/projects">
          <button className="transition ease-in-out delay-150 mt-6 md:mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 hover:scale-110 duration-300">
            View My Projects
          </button>
        </a>

        <div className='mt-6 md:mt-10 flex justify-center md:justify-start gap-6'>
          <a href="https://www.facebook.com/mubeshira.malik">
            <FaFacebook className='text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-2 rounded-full hover:scale-110 duration-300' />
          </a>
          <a href="https://www.instagram.com/mubeshiramalik/">
            <AiFillInstagram className='text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-2 rounded-full hover:scale-110 duration-300' />
          </a>
          <a href="https://www.linkedin.com/in/mubeshira-saad-6461622b8/">
            <FaLinkedin className='text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-2 rounded-full hover:scale-110 duration-300' />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="mt-10 md:mt-0 md:ml-10 flex-shrink-0"
        data-aos="fade-left"
      >
        <div className="transition ease-in-out delay-150 bg-slate-500 hover:scale-105 duration-300 rounded-full border-8 border-teal-400 shadow-teal-300 shadow-lg">
          <Image
            src="/newavatar-removebg-preview.png"
            alt="Mubeshira's Avatar"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;



// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { TypeAnimation } from 'react-type-animation';
//  import { FaFacebook, FaLinkedin } from 'react-icons/fa';
//  import { AiFillInstagram } from 'react-icons/ai';

// function Hero() {
//   return (
//     <section className="flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 lg:px-16 py-16 lg:py-32 bg-black">
//       <div className="text-center lg:text-left lg:w-1/2">
//         <h1 className="text-4xl lg:text-5xl text-blue-700 mb-4">
//           Hello, I'm <span className="text-emerald-400">Mubeshira Saad</span>
//         </h1>
//         {/* <h2 className="text-3xl lg:text-4xl text-white mb-2">I'm Mubeshira Saad</h2> */}
        
//         <TypeAnimation
//           sequence={[
//             'I am a Frontend Developer',
//             1000,
//             'WEB DEVELOPER',
//             1000,
//             'UI/UX Designer',
//             1000,
//           ]}
//           wrapper="span"
//           speed={50}
//           className="text-2xl lg:text-4xl text-white"
//           repeat={Infinity}
//         />

//         <p className="text-lg lg:text-xl mt-4 text-emerald-500">
//           I'm a frontend developer on a journey to master the art of creating user-friendly and visually engaging websites and web applications.
//         </p>
        
//         <a href="/projects">
//           <button className="mt-8 px-6 py-3 text-xl text-white bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-transform transform hover:scale-110 duration-300">
//             Projects
//           </button>
//         </a>
        
//         <div className='mt-6 md:mt-10 flex justify-center md:justify-start gap-6'>
// //           <a href="https://www.facebook.com/mubeshira.malik">
// //             <FaFacebook className='text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-2 rounded-full hover:scale-110 duration-300' />
// //           </a>
// //           <a href="https://www.instagram.com/mubeshiramalik/">
// //             <AiFillInstagram className='text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-2 rounded-full hover:scale-110 duration-300' />
// //           </a>
// //           <a href="https://www.linkedin.com/in/mubeshira-saad-6461622b8/">
// //             <FaLinkedin className='text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-2 rounded-full hover:scale-110 duration-300' />
// //           </a>
// //         </div>
//       </div>

//       <div className="w-48 h-48 lg:w-96 lg:h-96 mt-8 lg:mt-0 lg:ml-12 flex-shrink-0 rounded-full overflow-hidden border-8 border-teal-400 shadow-xl transition ease-in-out delay-150 bg-slate-500 hover:scale-105 duration-300 ">
//         <Image
//           src="/newavatar-removebg-preview.png"
//           alt="hero"
//           width={440}
//           height={440}
//           className="object-cover"
//         />
//       </div>
//     </section>
//   );
// }

// export default Hero;
