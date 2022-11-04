import React from 'react'
import react from '../assets/react.png'
import Tailwind from '../assets/TailwindCss.jpeg'
import Tailblock from '../assets/Tailblock.png'
import python from '../assets/python.png'
import JavaScript from '../assets/JavaScript.png'
import html from '../assets/html.png'
import Bootstrap from '../assets/Bootstrap.jpeg'
import node from '../assets/node.png'
import github from '../assets/github.png'


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: Tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 3,
            src: JavaScript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: python,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: Tailblock,
            title: "HTML",
            style: "shadow-blue-800"
        },
        {
            id: 7,
            src: Bootstrap,
            title: "HTML",
            style: "shadow-purple-600"
        },
        {
            id: 8,
            src: node,
            title: "HTML",
            style: "shadow-green-600"
        },
        {
            id: 9,
            src: github,
            title: "Github",
            style: "shadow-white"
        },



    ]
    return (
        <div name="Experience " className=" bg-gradient-to-b from-gray-800 to-black w-full h-full  ">


            <div className=" max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full  text-white ">

                <div className="">


                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline  '>Experience</p>
                    <p className='py-6' >These are technologies I've worked With</p>

                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">

                    {techs.map(({ id,src,title,style}) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                            <img src={src} alt="" className='w-20 mx-auto ' />
                            <p className='mt-4' >{title}</p>
                        </div>




                    ))}







                    {/* 
            <div className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg ">
                <img src={html} alt="" className='w-20 mx-auto '  />
                <p className='mt-4' >Html</p>
            </div>
        </div> */}
                </div>

            </div>

        </div>
    )
}

export default Experience