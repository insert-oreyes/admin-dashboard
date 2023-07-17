import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [navbarMenu, setNavbarMenu] = useState('false')

  const handleNavbar = () => {
    setNavbarMenu(!navbarMenu)
    console.log('I am:', navbarMenu)
  }

  const navBarLinks = (
    <>
      <li className='p-4'>
        <Link href='/about'>About</Link>
      </li>
      <li className='p-4'>
        <Link href='/how-it-works'>How it works</Link>
      </li>
      <li className='p-4'>
        <Link href='/features'>Features</Link>
      </li>
      <li className='p-4'>
        <Link href='/blog'>Blog</Link>
      </li>
    </>
  )

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex items-center justify-between p-4 custom-navbar-links'>
        <Link href='/'>
          <h1 className='font-extrabold text-xl'>AdmPanel</h1>
        </Link>
        <ul className='sm:flex hidden'>{navBarLinks}</ul>

        {/* Mobile menu button */}
        <div className='sm:hidden block z-10' onClick={handleNavbar}>
          {navbarMenu ? (
            <AiOutlineClose size='20' />
          ) : (
            <AiOutlineMenu size='20' />
          )}
        </div>

        {/* Mobile menu Navbar */}
        <div
          className={
            navbarMenu
              ? 'sm:hidden bg-white w-full h-screen absolute right-0 bottom-0 left-0 top-0 flex items-center justify-center text-center ease-in duration-300'
              : 'sm:hidden bg-white w-full h-screen absolute right-0 bottom-0 left-[-100%] top-0 flex items-center justify-center text-center ease-in duration-300'
          }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/how-it-works'>How it works</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/features'>Features</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
