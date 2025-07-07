import React, { useState } from 'react';

export default function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div 
      className="relative" 
      onMouseLeave={() => setOpen(false)}   
    >
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={() => setOpen(open => !open)}
      >
        <span className="hover:text-red-600">{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>

      </div>
            {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded">
          {items.map(item => (
            <div
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg> */}
