import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-100 flex justify-between'>
       <div className='p-2'>
       <a href="#"><h1 className='text-3xl font-bold '>SporTeas</h1></a>
       </div>
       <div className='flex p-4'>
            <ul className='flex gap-3'>
                <li><button className=' cursor-pointer text-slate-800 font-bold hover:underline underline-offset-4 active:text-slate-500'>Contact</button></li>
                <li><button className=' cursor-pointer text-slate-800 font-bold hover:underline underline-offset-4 active:text-slate-500'>Favorite</button></li>
                <li><button className=' cursor-pointer text-slate-800 font-bold hover:underline underline-offset-4 active:text-slate-500'>Subscribe</button></li>
            </ul>
       </div>
    </div>
  )
}

export default Navbar