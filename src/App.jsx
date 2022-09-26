import { CheckBadgeIcon, HomeIcon, Bars4Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import './styles/main.css'

function App() {



 

  function handleMenu(){
   
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("-translate-x-full")   
  }

  return (
    <div className='relative min-h-screen md:flex'>
      {/* mobile menubar */}
      <div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
        {/* logo */}
        <a href="" className="block p-4 text-white font-bold">FrantecDev</a>

        {/* mobile menu button */}
        <button className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-600' onClick={handleMenu}>
        <Bars4Icon className='h-6 h-6 text-white' /> 
        </button>

      </div>

      {/* sidebar */}
      <div className='sidebar bg-blue-800 text-blue-100 w-64 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
        {/* logo */}
        <a href="#" className='text-white flex items-center space-x-2 pt-4 px-4'>
          <CheckBadgeIcon className='w-8 h-8 text-white' />
          <span className='text-2xl font-extrabold'>FrantecDev</span>
        </a>


        {/* nav */}
        <nav>
          {[
            ['Home', '/dashboard', <HomeIcon className='w-5 h-5 text-white' />],
            ['About', '/About', ""],
            ['Features', '/Features',""],
            ['Pricing', '/Pricing', ""],


          ].map(([title, url, icon]) => (

            <a key={title} href={url} className="block  flex items-center gap-2 py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-blue-300 rounded">{icon}{title}</a>

          ))}
        </nav>

      </div>
      {/* conteudo */}
      <div className='flex-1 text-2xl font-bold'>
      <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
            
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>

    </div>


  )
}

export default App
