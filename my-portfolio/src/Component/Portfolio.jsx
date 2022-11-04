import React from 'react'
import Facebook from "../assets/Facebookpic.png"
import gym from "../assets/gymwebsite.jpeg"
import loginpage from '../assets/loginpage.jpg'
import petapp from '../assets/petapp.jpeg'
import Todo from '../assets/Todo.png'
import Writing from '../assets/writingpad.png'



const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: Facebook

    },
    {
      id: 2,
      src: gym

    },
    {
      id: 3,
      src: loginpage

    },
    {
      id: 4,
      src: petapp

    },
    {
      id: 5,
      src: Todo

    },
    {
      id: 6,
      src: Writing

    },
  ]
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white md:h-auto ">

      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full  ">
        <div className='pb-8' >
          <p className="text-4xl font-bold inline  border-b-4  border-gray-500 ">Portfolio</p>

          <p className="py-6 ">Check Out some of my work again</p>
        </div>




      </div>


      <div className=" grid sm:grid-cols-2 md:grid-cols-3  gap-24 px-12 sm:px-0 ">
        {
          portfolios.map(({ id, src }) => (

            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg   ">

              <img src={src} className=" duration-200 hover:scale-105  " />


              <div className='flex items-center justify-center  h-16 ' >

                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ' >Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Code</button>


              </div>


            </div>



          ))

        }


      </div>

    </div>

    // </div >
  )
}

export default Portfolio