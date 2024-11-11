// "use client";
// import Image from 'next/image';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const projects = [
//   {
//     title: "Project 1",
//     description: "This is an interactive Resume Builder.",
//     imageUrl: "/resume.png",
//     link: "https://hackathon-milestone-interactive-resume-builder-zyew.vercel.app/",
//   },
//   {
//     title: "Project 2",
//     description: "This is a Figma template copy project.",
//     imageUrl: "/figma.png",
//     link: "https://vercel.com/mubeshira-saads-projects/project-e-commerce-website-using-figma-template",
//   },
//   {
//     title: "Project 3",
//     description: "This is a Terminal-based Adventure Game project.",
//     imageUrl: "/adventure.jpg",
//     link: "https://github.com/Mubeshira/Adventure-game-1.git",
//   },
  
//   // Add more projects as needed
// ];

// export default function Projects() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800, // Animation duration in milliseconds
//       once: true,    // Animation happens only once when scrolling
//     });
//   }, []);

//   return (
//     <section className="py-16 bg-black h-screen ">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl text-blue-700 font-bold text-center mb-8">Projects</h2>
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <a
//               key={index}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gray-300 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//               data-aos="fade-up"
//               data-aos-delay={index * 100} // Stagger the animation for each project
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={project.imageUrl}
//                   alt={project.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="w-full h-full"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-gray-600 mt-2">{project.description}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Project 1",
    description: "This is an interactive Resume Builder.",
    imageUrl: "/resume.png",
    link: "https://milestone1-static-resume-ten.vercel.app/",
  },
  {
    title: "Project 2",
    description: "This is a Figma template copy project.",
    imageUrl: "/figma.png",
    link: "https://vercel.com/mubeshira-saads-projects/project-e-commerce-website-using-figma-template",
  },
  {
    title: "Project 3",
    description: "This is a Terminal-based Adventure Game project.",
    imageUrl: "/adventure.jpg",
    link: "https://github.com/Mubeshira/Adventure-game-1.git",
  },
  {
    title: "Project 4",
    description: "This is a pixel perfect panacloud website.",
    imageUrl: "/pana.png",
    link: "https://assignment12-panacloud.vercel.app/",
  },
  {
    title: "Project 5",
    description: "This is a terminal based currency converter app.",
    imageUrl: "/exchange.jpg",
    link: "https://github.com/Mubeshira/Currency-Converter-Application.git",
  },
  {
    title: "Project 6",
    description: "This is a terminal based currency converter app.",
    imageUrl: "/qalculate2.webp",
    link: "https://github.com/Mubeshira/simple_calculator.git",
  },
  

];

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
        <h2 className="text-4xl sm:text-5xl text-blue-700 font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-120 "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 sm:h-64 transition ease-in-out delay-150 bg-slate-500 hover:scale-105 duration-300">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2 transition ease-in-out delay-150">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
