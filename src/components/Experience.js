import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details =  ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div 
        style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>

                <u1 className="w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                    position="Software Engineer Intern" company="LegitScript"
                    companyLink="https://www.legitscript.com/"
                    time="Summer 2023-Present" address="Portland, OR"
                    work="Worked with the merchant monitoring team to develop and maintain
                    tools for LegitScript analysts, including improving the accuracy 
                    in merchant monitioring."

                    />
                    <Details 
                    company="L'SPACE Mission Concept Academy"
                    companyLink="https://www.lspace.asu.edu/"
                    time="September 2022-December 2022" address="Portland, OR"
                    work="Receive mission development skills training each week from NASA scientists and engineers
                    and collaborate with other students to design a mission-related team project using Siemens 
                    NX CAD modeling."
                    />
                    <Details 
                    position="Tutor" company="Clackamas Community College"
                    time="Fall 2020-Fall 2022" address="Oregon City, OR"
                    work="Assisted in tutoring courses on computer programming, maintaining and encouraging a growth mindset toward
                    student learning and teaching practice. Facilitated problem-solving with a curious mind and critical thinking
                    skills."
                    />

                    <Details
                    position="Front-End Employee at Costco"
                    time="September 2018-June 2023" address="Clackamas, OR"
                    work="Various positions including cashier, security, photo center, bakery, gas station, front-end, stocker and
                    menver service."

                    />
                </u1>
            </div>
        </div>
    )
}

export default Experience