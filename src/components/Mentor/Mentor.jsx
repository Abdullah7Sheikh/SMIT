import React from 'react'
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';


const Mentor = () => {
    let mentor =[
        {
            id:1,
            Name:"Ahmed Ashraf",
            profile:"https://avatars.githubusercontent.com/u/54757723?v=4",
            Description:"He is  Ahmed Ashraf an Experienced Web and Mobile Developer, with a track record of 5+ years in the industry. Proficient in React, React Native, Redux, NextJS, Typescript, JavaScript, and Firebase, I have successfully collaborated with various NFT, Blockchain, Realstate companies, and more, of over 350 satisfied clients.Let's connect to explore how my expertise can help your ventures thrive.",
            links:"https://github.com/ahmedrashraf"
        },
        {
            id:2,
            Name:"Ghous Ahmed",
            profile:"https://avatars.githubusercontent.com/u/25761034?v=4",
            Description:"He is Ghous Ahmed an Experienced Web and Mobile Developer also he is Bachelor of Science in Computer Science for Virtual University of Pakistan Now he is passionated full Stack developer and Now He is the Senior developer at stellic ",
            links:"https://github.com/ghousahmed"
        }

    ] 

    
  return (
  
    <>


      <h1 className='flex justify-center text-4xl font-bold'> Our Qualified Mentor</h1>

    {mentor.map((text)=>(
         <section key={text.id}>
         <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
           {/* Banner Text */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex flex-col justify-center"
           >
             <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
               <h1 className="text-4xl font-bold !leading-snug">
               {text.Name}
               </h1>
               <p className="text-dark2">
               {text.Description}
               </p>
               <a
                 href={text.links}
                 className="primary-btn  mx-3 gap-2 flex justify-center items-center  !mt-8"
               >
               <FaGithub />
                view Now
               </a>
             </div>
           </motion.div>
           {/* Banner Image */}
           <div className="flex justify-center items-center">
             <motion.img
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               src={text.profile}
               alt=""
               className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
             />
           </div>
         </div>
       </section>
    ))}
    </>
  )
}

export default Mentor