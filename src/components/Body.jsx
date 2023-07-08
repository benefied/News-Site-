import React from 'react'
import NewsList from './NewsList'

const Body = () => {
  return (
    <div>
        <header className='p-3 pt-16 text-3xl'><h1 className='italic'>News</h1></header>
        <section>
            <NewsList/>
        </section>
    </div>
  )
}

export default Body