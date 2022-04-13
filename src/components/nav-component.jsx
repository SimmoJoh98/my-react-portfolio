import React from 'react';

function MyNav(){
    return (
        <>
           <div className='fixed flex flex-row justify-end bg-green-300 p-2 w-full'>
           <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className='text-4xl font-bold m-2 transition ease-in-out delay-0 p-1  hover:text-white duration-300 hover:rounded'>About</button>
            <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className='text-4xl font-bold m-2 transition ease-in-out delay-0 p-1  hover:text-white duration-300 hover:rounded'>Skills</button>
            <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className='text-4xl font-bold m-2 transition ease-in-out delay-0 p-1  hover:text-white duration-300 hover:rounded'>Experience</button>
            <button onClick={() => {window.scrollTo({top: 830, left: 0, behavior: 'smooth'})}} className='text-4xl font-bold m-2 transition ease-in-out delay-0 p-1  hover:text-white duration-300 hover:rounded'>Projects</button>
           </div>
        </>
    );
}


export default MyNav;