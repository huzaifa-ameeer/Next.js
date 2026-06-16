import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center py-5 px-20 justify-between'>
            <h1 className='font-semibold'>Home</h1>
            <div className='flex gap-5'>
                <h2>About</h2>
                <h2>Services</h2>
            </div>
        </nav>
    </div>
  )
}

export default Navbar