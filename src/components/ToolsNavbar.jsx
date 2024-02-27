import React from 'react'

export default function ToolsNavbar() {
    const menuItems = [
        {
          name: 'Tools',
          href: '#',
        },
        {
          name: 'AWS Builder',
          href: '#',
        },
        {
          name: "Start Build",
          href: '#',
        },
        {
          name: "Build Supplies",
          href: '#',
        },
        {
          name: "Tooling",
          href: '#',
        },
        {
          name: "BlueHosting",
          href: '#',
        },
      ]
  return (
   
        <ul className='flex items-center justify-between w-[70%] px-6'>
            {
                menuItems.map((item, index) => {
                    return <li key={index}><a href={item.href} className='text-[12px]'>{item.name}</a></li>
                })

                }
            
        </ul>
  
  )
}
