
import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const menuItems = [
  {
    name: 'Categories',
    href: '#',
  },
  {
    name: 'Website Builders',
    href: '#',
  },
  {
    name: "Today's deals",
    href: '#',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative bg-[#212731] ">
      <div className="mx-auto flex max-w-7xl items-center lg:justify-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">
        
      <div className=" grow justify-between contents ">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach"
          ></input>
        </div>
        <div className="hidden lg:block text-white">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-900"
                >
                  {item.name}
                 
                </a>
              </li>
            ))}
          </ul>
        </div>
       
        <div className="ml-2 lg:hidden flex items-center justify-between">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">

            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <X width={25} height={25}  onClick={toggleMenu} className="cursor-pointer px-auto" />
              <div className="px-5 pb-6 pt-5">
               
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
