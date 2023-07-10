import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#FFFBEB] h-screen mb-12 flex items-center justify-center'>
      {/* left */}
      <div className='flex items-center justify-center w-3/5 h-screen custom-img bg-cover' />
      {/* right */}
      <div className='flex items-center justify-center w-2/5 h-screen mr-14 p-5'>
        <div className='flex flex-col'>
          <h1 className='mb-5 custom-h1'>
            Create, Manage & Boost Your Products
          </h1>
          <p className='mb-5 py-5 custom-p'>
            Pharetra blandit augue volutpat libero augue semper. Non diam neque
            praesent sem senectus mauris lectus a urna. Tortor pellentesque
            ipsum tincidunt enim.
          </p>
          <div className='flex items-center justify-between px-5 py-5 '>
            <button className='custom-button'>Sign up</button>
            <button className='custom-button'>Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
