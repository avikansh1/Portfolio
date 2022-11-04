import React from 'react'
import pic1 from "../assets/pic1.jpg"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <>

            <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  ">

                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-4xl sm:text-7xl font-bold text-white ">I Am A Full Stack Web Developer</h2>


                        <p className="text-gray-500 py-4 max-w-md ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, error non? Impedit, repellat. Sapiente, eius voluptas cupiditate explicabo saepe repellendus!</p>

                        <div className="">
                            <Link to="Portfolio" smooth duration={500}  className="text-white w-fit group px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "  >
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300 ' >
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>

                            </Link>
                        </div>
                    </div>
                    <div className=" rounded-3xl mx-auto w-2/3 md:w-full  ">
                    <img src={pic1} alt=" My Profile  " />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home