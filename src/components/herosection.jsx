import React from 'react'

function herosection() {
  return (
    
    <div class="h-[600px] bg-linear-to-r from-blue-400 from-70% to-red-400 pl-[38px] flex gap-50 ">
        <div>
            <div className='flex flex-col'>
                <div className='w-[510px] h-[199px] pt-[106px]'>
                <img src="https://staging.design-mumbai.com/wp-content/uploads/2025/03/design-mumbai-banner-logo.svg" alt="" />
                </div>
                <div className='flex mt-[130px]'>
                    <div className='text-white text-2xl'>India’s international <br /> contemporary design show</div>
                    <div  className='text-white pl-[58px]'>26–29 November 2025 <br />Jio World Garden, <br /> Mumbai</div>
                </div>
                <div className='flex mt-[39px]'>
                    <div className="text-white border-2 w-[159px] h-[38px] pl-[40px] hover:bg-amber-600  hover:border-none pt-1 ">Exhibit</div>
                    <div className="text-white ml-[25px] border-2 w-[159px] h-[38px] pl-[40px] hover:bg-amber-600 hover:border-none pt-1 ">Buy Tickets</div>
                </div>
            </div>
        </div>
       <div className='w-[581px] h-[500px] mt-[100px]'>
          <video autoPlay loop playsinline="" preload="auto" class="w-full object-cover h-full aspect-[1/0.88] lg:aspect-auto object-top"><source src="https://staging.design-mumbai.com/wp-content/uploads/2025/03/DM_Website_Video-2.mp4" type="video/mp4"></source></video>
       </div>
    </div>
   
  )
}

export default herosection
