import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Popup ({setExamId,setRefeshData,numExams}) {
  const handleClick=(id)=>{    
    setExamId(id);
    setRefeshData(true);
  }
  let links = [];
  for (let i = 0; i < numExams; i++) {
    links.push({ label: 'Đề số ' + (i+1),id:(i+1 )});
  } 
  // { label: 'Đề giữa kỳ 1 - Đề 1',id:1 },
    
  return (
    <div class="popup-menu">
    <div className="flex  w-full justify-end ">
      <div className="flex gap-10">        
      <Menu>
      <MenuButton className="bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</MenuButton>
      <MenuItems anchor="bottom" className="bg-[#ffebae] p-2 mr-20 z-99999 sub-menu">
        {links.map((link) => (
          <MenuItem key={link.id} className="block no-underline hover:underline ">
            <a href="#" onClick={(e)=>{handleClick(link.id);}}  >{link.label}</a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
      </div>
    </div>
    </div>
  )
}

export default Popup
