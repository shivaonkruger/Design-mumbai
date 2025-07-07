import React from 'react';
import Dropdown from './dropdown';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      
      <div className="text-2xl font-bold">
            <div>
                Design<span className="text-gray-500">Mumbai</span>
            </div>
      </div>

      
      <div className="flex space-x-6">
            <div><a href="#" className="hover:text-red-600">Home</a></div>
            <div><a href="#">Exhibit</a></div>
            <div><a href="#">Exhibitors</a></div>
            <div><a href="#">Features</a></div>
            <div><a href="#">Visit</a></div>
            <div><a href="#">Team</a></div>
            <div><a href="#">Contact</a></div>
            
            <Dropdown 
                label="Partners" 
                items={['Partner A','Partner B','Partner C']} 
            />
            <Dropdown 
          label="Talks" 
          items={['Talk 1','Talk 2','Talk 3']} 
            />
      </div>

      
      <div>
        <button className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-100">
          Subscribe
        </button>
      </div>
    </div>
  );
}