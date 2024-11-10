// // /components/About.js

// "use client";
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Image from 'next/image';

// function About() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Customize duration as needed
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center mt-20 p-6 md:p-12 bg-black  .h-screen">
//       {/* Text Section */}
//       <div className="md:w-1/2 p-6" data-aos="fade-right">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4">About Me</h2>
//         <p className="text-lg  text-emerald-500 mb-6">
//           I'm a passionate frontend developer with a strong foundation in creating beautiful,
//           responsive, and user-friendly interfaces. I have a keen eye for design and a
//           commitment to delivering high-quality web experiences.
//         </p>
//         <p className="text-lg  text-emerald-500 mb-6">
//           My journey in web development started with a love for creating visually engaging
//           websites, and I continuously strive to enhance my skills in modern web technologies.
//         </p>


//         <a href="/contact"><button className='transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... px-4 py-  rounded-full text-xl	 mt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>Contact Me</button></a>
//       </div>

//       {/* Image Section */}
//       <div className=" flex justify-center rounded-full border-8  md:mt-0 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  mt-32   border-pink-400" data-aos="fade-left">
//         <Image
//           src="/newavatar-removebg-preview.png" // Update with your image path
//           alt="About Image"
//           width={280}
//           height={280}
//           className="rounded-full shadow-lg transition ease-in-out duration-300 transform hover:scale-105"
//         />
//       </div>
//     </section>
//   );
// }

// export default About;



// /components/About.js

"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-black min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 p-6" data-aos="fade-right">
        <h2 className="text-5xl font-bold text-blue-700 mb-4">About Me</h2>
        <p className="text-lg text-emerald-500 mb-6">
          I &apos; m a passionate frontend developer with a strong foundation in creating beautiful,
          responsive, and user-friendly interfaces. I have a keen eye for design and a
          commitment to delivering high-quality web experiences.
        </p>
        <p className="text-lg text-emerald-500 mb-6">
          My journey in web development started with a love for creating visually engaging
          websites, and I continuously strive to enhance my skills in modern web technologies.
        </p>
        <a href="/contact">
          <button className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-6 py-2 rounded-full text-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 mt-10">
            Contact Me
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div
        className="transition ease-in-out delay-150 bg-slate-500 hover:scale-105 duration-300 rounded-full border-8 border-teal-400 shadow-teal-300 shadow-lg"
        data-aos="fade-left"
      >
        <Image
          src="/newavatar-removebg-preview.png" // Update with your image path
          alt="About Image"
          width={280}
          height={280}
          className="rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}

export default About;
