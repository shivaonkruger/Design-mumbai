import React from 'react'

function navbar() {
  return (
    <header className='w-full h-[81px] flex justify-between -center px-4 lg:px-12 py-4'>
        <img src="https://staging.design-mumbai.com/wp-content/uploads/2025/02/main-logo-1.svg" alt="" />
      <div className='flex justify-center gap-7 py-3'>
            <div className="text-gray-500">Home</div>
            <div className="text-gray-500">Exhibit</div>
            <div className="text-gray-500">Exhibitors</div>
            <div className="text-gray-500">Partners</div>
            <div className="text-gray-500">Talks</div>
            <div className="text-gray-500">Features</div>
            <div className="text-gray-500">Visits</div>
            <div className="text-gray-500">Teams</div>
            <div className="text-gray-500">Contacts</div>
            <div className="text-gray-500 ml-[25px] border-2 w-[159px] h-[38px] pl-[40px] pt-1 hover:bg-amber-600 hover:text-amber-50 hover:border-none">Buy Tickets</div> 
      </div>
    </header>
  )
}

export default navbar
