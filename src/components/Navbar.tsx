import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center py-5 px-20 justify-between'>
            <Link href="/" className='font-semibold'>Home</Link>
            <div className='flex gap-5'>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar