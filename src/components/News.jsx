import React from 'react'

const News = ({data}) => {
  return (
    <div>
        <div className='pb-[7rem] '>
          <div className='border shadow-md rounded-md'>
          <h1 className='text-left font-semibold italic'>source: {data.author}</h1>
            <h2 className='text-center font-bold text-3xl first-letter:underline-offset-4 py-2'>{data.title}</h2>
            <div className='flex justify-center'>
            <img className='h-[35rem] w-[65rem] rounded-md max-sm:w-[25rem] max-sm:h-[25rem]' src={data.urlToImage} alt="" />
            </div>
            <div>
            <h2 className='description-font text-left font-bold pt-3 '>{data.description}</h2>
            </div>
            <div className='px-9'>
            <h2 className='text-center text-xl'>{data.content}</h2>
            </div>
            <div className='flex justify-center p-3 pb relative'>
            <a className='absolute bg-slate-900 p-2 px-6 rounded-sm shadow-lg hover:top-1' href={data.url}><h2 className='cursor-pointer shadow-inner text-white'>Read More</h2></a>
            </div>
            <div className='pb-5'>
            <h2 className='italic pl-3'>Published on: {data.publishedAt}</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default News